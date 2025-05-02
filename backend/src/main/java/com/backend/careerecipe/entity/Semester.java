package com.backend.careerecipe.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "semester")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Semester {

    @Id
    @Column(name = "semester_id", nullable = false)
    private Integer semester_id;

    @Column(name = "semester_name", length = 20, nullable = false)
    private String semester_name;
}


