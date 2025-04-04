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
@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String email;
    private String password;
    private String name;
    private Role role;
    private String department;
    private LocalDate joinDate;
    private String phone;
    private String address;
    private int completedBatches;
    private int studentsCompleted;
    private double completionRate;
    private String status;

    public enum Role {
        SUPER_ADMIN, ADMIN, LECTURER
    }
}

