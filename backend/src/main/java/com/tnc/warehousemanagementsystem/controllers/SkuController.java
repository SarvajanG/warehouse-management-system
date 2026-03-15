package com.tnc.warehousemanagementsystem.controllers;

import com.tnc.warehousemanagementsystem.models.Sku;
import com.tnc.warehousemanagementsystem.services.SkuService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/skus")
@RequiredArgsConstructor
public class SkuController {

    private final SkuService skuService;

    @GetMapping
    public ResponseEntity<List<Sku>> getAllSkus() {
        return ResponseEntity.ok(skuService.getAllSkus());
    }

    @GetMapping("/{skuId}")
    public ResponseEntity<Sku> getSkuById(@PathVariable UUID skuId) {
        return ResponseEntity.ok(skuService.getSkuById(skuId));
    }
}