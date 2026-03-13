package com.tnc.warehousemanagementsystem.services;

import com.tnc.warehousemanagementsystem.models.Client;
import com.tnc.warehousemanagementsystem.repositories.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ClientService {

    private final ClientRepository clientRepository;

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Client getClientById(UUID clientId) {
        return clientRepository.findById(clientId)
                .orElseThrow(() -> new RuntimeException("Client not found with id: " + clientId));
    }

    public Client createClient(Client client) {
        client.setClientId(UUID.randomUUID());
        client.setCreatedAt(OffsetDateTime.now());
        return clientRepository.save(client);
    }

    public Client updateClient(UUID clientId, Client updatedClient) {
        Client existing = getClientById(clientId);
        existing.setName(updatedClient.getName());
        existing.setEmail(updatedClient.getEmail());
        existing.setPhone(updatedClient.getPhone());
        existing.setAddress(updatedClient.getAddress());
        return clientRepository.save(existing);
    }

    public void deleteClient(UUID clientId) {
        getClientById(clientId);
        clientRepository.deleteById(clientId);
    }
}