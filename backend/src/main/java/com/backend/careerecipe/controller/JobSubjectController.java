package com.backend.careerecipe.controller;


import com.backend.careerecipe.dto.SubjectResponseDto;
import com.backend.careerecipe.service.JobSubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/jobs")
public class JobSubjectController {
    private final JobSubjectService jobSubjectService;

    @GetMapping("/{job_id}/subjects")
    public List<SubjectResponseDto> getRecommendedSubjects(
            @PathVariable("job_id") String job_id,
            @RequestParam String department,
            @RequestParam int grade,
            @RequestParam int semester_id
    ) {
        return jobSubjectService.getRecommendedSubjects(job_id, department, grade, semester_id);
    }
}
