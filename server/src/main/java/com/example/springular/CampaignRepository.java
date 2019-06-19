package com.example.springular;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface CampaignRepository extends Repository<Campaign, Integer> {

    void delete(Campaign campaign);

    List<Campaign> findAll();

    Campaign findById(int id);

    Campaign save(Campaign campaign);
}
