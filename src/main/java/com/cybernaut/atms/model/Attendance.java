package com.cybernaut.atms.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "attendance")
public class Attendance {
    @Id
    private String id;
    private LocalDate date;
    private String userId;
    private String userName;
    private String inTime;
    private String outTime;
    private String duration;
    private String status; // "present", "absent"
}

