package com.tnc.warehousemanagementsystem.controllers;

import com.tnc.warehousemanagementsystem.models.Client;
import com.tnc.warehousemanagementsystem.services.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/clients")
@RequiredArgsConstructor
public class ClientController {

    private final ClientService clientService;

    @GetMapping
    public ResponseEntity<List<Client>> getAllClients() {
        return ResponseEntity.ok(clientService.getAllClients());
    }

    @GetMapping("/{clientId}")
    public ResponseEntity<Client> getClientById(@PathVariable UUID clientId) {
        return ResponseEntity.ok(clientService.getClientById(clientId));
    }

    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        return ResponseEntity.status(HttpStatus.CREATED).body(clientService.createClient(client));
    }

    @PutMapping("/{clientId}")
    public ResponseEntity<Client> updateClient(@PathVariable UUID clientId, @RequestBody Client client) {
        return ResponseEntity.ok(clientService.updateClient(clientId, client));
    }

    @DeleteMapping("/{clientId}")
    public ResponseEntity<Void> deleteClient(@PathVariable UUID clientId) {
        clientService.deleteClient(clientId);
        return ResponseEntity.noContent().build();
    }
}