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
@Document(collection = "batches")
public class Batch {
    @Id
    private String id;
    private String year;
    private String month;
    private String batchName;
    private String lecturer;
    private String lecturerId;
    private LocalDate startDate;
    private LocalDate endDate;
    private String status; // "upcoming", "in-progress", "completed"
    private int studentsCompleted;
    private int totalStudents;
    private double completionRate;
}

