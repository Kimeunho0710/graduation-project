package com.backend.careerecipe.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "favorite")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "subject_id", referencedColumnName = "subject_id"),
            @JoinColumn(name = "department", referencedColumnName = "department")
    })
    private Subject subject;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
