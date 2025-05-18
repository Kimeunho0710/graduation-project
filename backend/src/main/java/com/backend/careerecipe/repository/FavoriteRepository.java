package com.backend.careerecipe.repository;

import com.backend.careerecipe.entity.Favorite;
import com.backend.careerecipe.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    Optional<Favorite> findByUserIdAndSubjectId(Long userId, Long subjectId);
    List<Favorite> findAllByUserId(Long userId);
}
