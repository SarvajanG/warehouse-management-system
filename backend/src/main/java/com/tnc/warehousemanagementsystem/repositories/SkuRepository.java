package com.tnc.warehousemanagementsystem.repositories;

import com.tnc.warehousemanagementsystem.models.Sku;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface SkuRepository extends JpaRepository<Sku, UUID> {
    Optional<Sku> findBySku(String sku);
    Optional<Sku> findByName(String name);
}