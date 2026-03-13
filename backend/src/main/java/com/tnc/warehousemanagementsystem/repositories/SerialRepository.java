package com.tnc.warehousemanagementsystem.repositories;

import com.tnc.warehousemanagementsystem.models.Serial;
import com.tnc.warehousemanagementsystem.enums.StatusEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface SerialRepository extends JpaRepository<Serial, UUID> {
    List<Serial> findBySerial(String serial);
    List<Serial> findByStatus(StatusEnum status);
    List<Serial> findByClientClientId(UUID clientId);
    List<Serial> findBySkuSkuId(UUID skuId);
}