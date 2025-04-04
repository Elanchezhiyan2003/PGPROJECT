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
@Document(collection = "resources")
public class Resource {
    @Id
    private String id;
    private String title;
    private String description;
    private String type;
    private long size;
    private String uploadedBy;
    private LocalDate uploadDate;
    private boolean isCloned;
    private String originalId;
    private String assignedTo;
    private String url;
    private byte[] fileData;
}

