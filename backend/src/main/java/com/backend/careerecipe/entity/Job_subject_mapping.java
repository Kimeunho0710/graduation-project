package com.backend.careerecipe.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "job_subject_mapping")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Job_subject_mapping {

    @EmbeddedId
    private Job_subject_mapping_id job_subject_mapping_id; //복합키 타입이므로 String이 아닌 복합키 타입으로 선언

    @ManyToOne
    @MapsId("job_id")
    @JoinColumn(name = "job_id", nullable = false)
    private Job job;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "subject_id", referencedColumnName = "subject_id", nullable = false),
            @JoinColumn(name = "department", referencedColumnName = "department", nullable = false)
    })
    private Subject subject;

    @ManyToOne
    @JoinColumn(name = "semester_id")
    private Semester semester;

    @Column(name = "grade")
    private Integer grade;
}
