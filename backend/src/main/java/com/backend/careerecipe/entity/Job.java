package com.backend.careerecipe.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "job")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Job {

    @Id
    @Column(name = "job_id", length = 10, nullable = false)
    private String job_id;

    @Column(name = "job_name", length = 100, nullable = false)
    private String job_name;

    @Column(name = "roadmap_url")
    private String roadmap_url;
}
