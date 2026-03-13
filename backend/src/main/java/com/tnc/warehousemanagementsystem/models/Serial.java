package com.tnc.warehousemanagementsystem.models;

import com.tnc.warehousemanagementsystem.enums.StatusEnum;
import jakarta.persistence.*;
import lombok.Data;
import java.util.UUID;

@Data
@Entity
@Table(name = "serials")
public class Serial {

    @Id
    @Column(name = "serial_id")
    private UUID serialId;

    @Column(nullable = false)
    private String serial;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, columnDefinition = "status_enum")
    private StatusEnum status;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;

    @ManyToOne
    @JoinColumn(name = "sku_id", nullable = false)
    private Sku sku;
}