package com.backend.careerecipe.repository;

import com.backend.careerecipe.entity.Job_subject_mapping;
import com.backend.careerecipe.entity.Job_subject_mapping_id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Job_subject_mappingRepository extends JpaRepository<Job_subject_mapping, Job_subject_mapping_id> {
    @Query("SELECT jsm FROM Job_subject_mapping jsm " +
            "WHERE jsm.job_subject_mapping_id.job_id = :job_id " +
            "AND jsm.job_subject_mapping_id.department = :department " +
            "AND jsm.subject.grade = :grade " +
            "AND jsm.subject.semester.semester_id = :semester_id")
    List<Job_subject_mapping> findRecommendedSubjects(
            @Param("job_id") String jobId,
            @Param("department") String department,
            @Param("grade") Integer grade,
            @Param("semester_id") Integer semesterId
    );
}
