package com.backend.careerecipe.repository;

import com.backend.careerecipe.entity.Job_subject_mapping;
import com.backend.careerecipe.entity.Job_subject_mapping_id;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Job_subject_mappingRepository extends JpaRepository<Job_subject_mapping, Job_subject_mapping_id> {
}
