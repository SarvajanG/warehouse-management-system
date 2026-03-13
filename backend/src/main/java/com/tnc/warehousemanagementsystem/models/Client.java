package com.tnc.warehousemanagementsystem.models;

import jakarta.persistence.*;
import lombok.Data;
import java.time.OffsetDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "clients")
public class Client {
    @Id
    @Column(name = "client_id")
    private UUID clientId;

    @Column(nullable = false)
    private String name;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String phone;

    @Column
    private String address;

    @Column(name = "created_at", nullable = false)
    private OffsetDateTime createdAt;
}