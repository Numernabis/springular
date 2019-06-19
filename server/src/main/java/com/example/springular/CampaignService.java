package com.example.springular;

import java.util.List;

public interface CampaignService {

    Campaign create(Campaign campaign);

    List<Campaign> findAll();

    Campaign findById(int id);

    Campaign update(Campaign campaign);

    Campaign delete(int id);
}
