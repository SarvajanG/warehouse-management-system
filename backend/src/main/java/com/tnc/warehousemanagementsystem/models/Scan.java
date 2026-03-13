package com.tnc.warehousemanagementsystem.models;

import com.tnc.warehousemanagementsystem.enums.StatusEnum;
import jakarta.persistence.*;
import lombok.Data;
import java.time.OffsetDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "scans")
public class Scan {

    @Id
    @Column(name = "scan_id")
    private UUID scanId;

    @Column(name = "scanned_at", nullable = false)
    private OffsetDateTime scannedAt;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, columnDefinition = "status_enum")
    private StatusEnum status;

    @ManyToOne
    @JoinColumn(name = "serial_id", nullable = false)
    private Serial serial;
}