package com.tnc.warehousemanagementsystem.repositories;

import com.tnc.warehousemanagementsystem.models.Scan;
import com.tnc.warehousemanagementsystem.enums.StatusEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

@Repository
public interface ScanRepository extends JpaRepository<Scan, UUID> {
    List<Scan> findBySerialSerialId(UUID serialId);
    List<Scan> findByStatus(StatusEnum status);
}