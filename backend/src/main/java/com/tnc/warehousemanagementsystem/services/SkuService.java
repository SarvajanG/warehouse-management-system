package com.tnc.warehousemanagementsystem.services;

import com.tnc.warehousemanagementsystem.models.Sku;
import com.tnc.warehousemanagementsystem.repositories.SkuRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SkuService {

    private final SkuRepository skuRepository;

    public List<Sku> getAllSkus() {
        return skuRepository.findAll();
    }

    public Sku getSkuById(UUID skuId) {
        return skuRepository.findById(skuId)
                .orElseThrow(() -> new RuntimeException("SKU not found with id: " + skuId));
    }
}