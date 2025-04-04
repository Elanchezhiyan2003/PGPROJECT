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
@Document(collection = "tasks")
public class Task {
    @Id
    private String id;
    private String title;
    private String description;
    private String assignedToId;
    private String assignedTo;
    private LocalDate dueDate;
    private String status; // "incomplete", "in-progress", "completed"
    private String priority; // "low", "medium", "high"
    private LocalDate createdAt;
}

