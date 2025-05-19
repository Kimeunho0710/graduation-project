package com.backend.careerecipe.controller;

import com.backend.careerecipe.config.JwtProvider;
import com.backend.careerecipe.dto.KakaoUserInfo;
import com.backend.careerecipe.entity.User;
import com.backend.careerecipe.repository.UserRepository;
import com.backend.careerecipe.service.KakaoOAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/oauth")
public class KakaoOAuthController {

    private final KakaoOAuthService kakaoOAuthService;
    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;

    @GetMapping("/kakao")
    public ResponseEntity<?> kakaoLogin(@RequestParam String code) {
        String accessToken = kakaoOAuthService.getAccessToken(code);
        KakaoUserInfo userInfo = kakaoOAuthService.getUserInfo(accessToken);

        // DB에 존재하지 않으면 새로 저장
        userRepository.findByKakaoId(userInfo.getId())
                .orElseGet(() -> {
                    User newUser = new User();
                    newUser.setKakaoId(userInfo.getId());
                    newUser.setNickname(userInfo.getNickname());
                    return userRepository.save(newUser);
                });

        // JWT 발급
        String jwt = jwtProvider.createToken(userInfo.getId());

        // 토큰 + 유저 정보 반환
        return ResponseEntity.ok(Map.of(
                "token", jwt,
                "user", userInfo
        ));
    }
}
