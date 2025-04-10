package com.backend.careerecipe.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "subject")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Subject {

    @EmbeddedId
    private Subject_id subject_id;

    @Column(name = "subject_name", length = 100)
    private String subject_name;

    @Column(name = "credit")
    private Integer credit;

    @Column(name = "grade")
    private Integer grade;

    @ManyToOne
    @JoinColumn(name = "semester_id")
    private Semester semester;
}
