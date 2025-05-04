package com.backend.careerecipe.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoadMapResponseDto {
    private String job_id;
    private String roadmap_url;
}
