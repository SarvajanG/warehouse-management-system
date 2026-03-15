package com.tnc.warehousemanagementsystem.controllers;

import com.tnc.warehousemanagementsystem.enums.StatusEnum;
import com.tnc.warehousemanagementsystem.models.Scan;
import com.tnc.warehousemanagementsystem.services.ScanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/scans")
@RequiredArgsConstructor
public class ScanController {

    private final ScanService scanService;

    @GetMapping
    public ResponseEntity<List<Scan>> getAllScans() {
        return ResponseEntity.ok(scanService.getAllScans());
    }

    @GetMapping("/serial/{serialId}")
    public ResponseEntity<List<Scan>> getScansBySerial(@PathVariable UUID serialId) {
        return ResponseEntity.ok(scanService.getScansBySerial(serialId));
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<Scan>> getScansByStatus(@PathVariable StatusEnum status) {
        return ResponseEntity.ok(scanService.getScansByStatus(status));
    }

    @PostMapping
    public ResponseEntity<Scan> createScan(@RequestBody Scan scan) {
        return ResponseEntity.status(HttpStatus.CREATED).body(scanService.createScan(scan));
    }
}