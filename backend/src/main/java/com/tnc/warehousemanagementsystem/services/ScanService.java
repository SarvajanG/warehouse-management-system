package com.tnc.warehousemanagementsystem.services;

import com.tnc.warehousemanagementsystem.enums.StatusEnum;
import com.tnc.warehousemanagementsystem.models.Scan;
import com.tnc.warehousemanagementsystem.repositories.ScanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ScanService {

    private final ScanRepository scanRepository;

    public List<Scan> getAllScans() {
        return scanRepository.findAll();
    }

    public List<Scan> getScansBySerial(UUID serialId) {
        return scanRepository.findBySerialSerialId(serialId);
    }

    public List<Scan> getScansByStatus(StatusEnum status) {
        return scanRepository.findByStatus(status);
    }

    public Scan createScan(Scan scan) {
        scan.setScanId(UUID.randomUUID());
        scan.setScannedAt(OffsetDateTime.now());
        return scanRepository.save(scan);
    }
}