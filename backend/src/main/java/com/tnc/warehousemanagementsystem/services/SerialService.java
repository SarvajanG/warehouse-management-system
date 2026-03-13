package com.tnc.warehousemanagementsystem.services;

import com.tnc.warehousemanagementsystem.enums.StatusEnum;
import com.tnc.warehousemanagementsystem.models.Serial;
import com.tnc.warehousemanagementsystem.repositories.SerialRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SerialService {

    private final SerialRepository serialRepository;

    public List<Serial> getAllSerials() {
        return serialRepository.findAll();
    }

    public Serial getSerialById(UUID serialId) {
        return serialRepository.findById(serialId)
                .orElseThrow(() -> new RuntimeException("Serial not found with id: " + serialId));
    }

    public List<Serial> getSerialsByClient(UUID clientId) {
        return serialRepository.findByClientClientId(clientId);
    }

    public List<Serial> getSerialsBySku(UUID skuId) {
        return serialRepository.findBySkuSkuId(skuId);
    }

    public List<Serial> getSerialsByStatus(StatusEnum status) {
        return serialRepository.findByStatus(status);
    }

    public Serial createSerial(Serial serial) {
        serial.setSerialId(UUID.randomUUID());
        return serialRepository.save(serial);
    }

    public Serial updateSerialStatus(UUID serialId, StatusEnum newStatus) {
        Serial existing = getSerialById(serialId);
        existing.setStatus(newStatus);
        return serialRepository.save(existing);
    }
}