package com.tnc.warehousemanagementsystem.controllers;

import com.tnc.warehousemanagementsystem.enums.StatusEnum;
import com.tnc.warehousemanagementsystem.models.Serial;
import com.tnc.warehousemanagementsystem.services.SerialService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/serials")
@RequiredArgsConstructor
public class SerialController {

    private final SerialService serialService;

    @GetMapping
    public ResponseEntity<List<Serial>> getAllSerials() {
        return ResponseEntity.ok(serialService.getAllSerials());
    }

    @GetMapping("/{serialId}")
    public ResponseEntity<Serial> getSerialById(@PathVariable UUID serialId) {
        return ResponseEntity.ok(serialService.getSerialById(serialId));
    }

    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<Serial>> getSerialsByClient(@PathVariable UUID clientId) {
        return ResponseEntity.ok(serialService.getSerialsByClient(clientId));
    }

    @GetMapping("/sku/{skuId}")
    public ResponseEntity<List<Serial>> getSerialsBySku(@PathVariable UUID skuId) {
        return ResponseEntity.ok(serialService.getSerialsBySku(skuId));
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<Serial>> getSerialsByStatus(@PathVariable StatusEnum status) {
        return ResponseEntity.ok(serialService.getSerialsByStatus(status));
    }

    @PostMapping
    public ResponseEntity<Serial> createSerial(@RequestBody Serial serial) {
        return ResponseEntity.status(HttpStatus.CREATED).body(serialService.createSerial(serial));
    }

    @PatchMapping("/{serialId}/status")
    public ResponseEntity<Serial> updateSerialStatus(@PathVariable UUID serialId, @RequestBody StatusEnum status) {
        return ResponseEntity.ok(serialService.updateSerialStatus(serialId, status));
    }
}