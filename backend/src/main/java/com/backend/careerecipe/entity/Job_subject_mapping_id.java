package com.backend.careerecipe.entity;

import jakarta.persistence.*;
import lombok.*;
import java.io.Serializable;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Job_subject_mapping_id implements Serializable {

    @Column(name = "job_id", length = 10, nullable = false)
    private String job_id;

    @Column(name = "subject_id", length = 10, nullable = false)
    private String subject_id;

    @Column(name = "department", length = 100, nullable = false)
    private String department;
}
