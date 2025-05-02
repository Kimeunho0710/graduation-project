package com.backend.careerecipe.repository;

import com.backend.careerecipe.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}
