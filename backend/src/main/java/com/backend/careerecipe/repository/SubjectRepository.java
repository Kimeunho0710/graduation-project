package com.backend.careerecipe.repository;

import com.backend.careerecipe.entity.Subject;
import com.backend.careerecipe.entity.Subject_id;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Subject_id> {
}
