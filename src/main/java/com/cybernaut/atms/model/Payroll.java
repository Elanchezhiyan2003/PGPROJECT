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
@Document(collection = "payroll")
public class Payroll {
    @Id
    private String id;
    private String employee;
    private String employeeId;
    private String month;
    private double salary;
    private double bonus;
    private double deductions;
    private double netPay;
    private String status; // "paid", "unpaid"
    private LocalDate paymentDate;
}

