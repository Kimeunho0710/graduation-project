package com.backend.careerecipe.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Job_subject_mapping_id implements Serializable {

    @Column(name = "job_id", nullable = false, length = 10)
    private String job_id;

    @Column(name = "subject_id", nullable = false, length = 10)
    private String subject_id;

    @Column(name = "department", nullable = false, length = 100)
    private String department;
}
