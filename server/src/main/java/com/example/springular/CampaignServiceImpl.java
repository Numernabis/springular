package com.example.springular;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CampaignServiceImpl implements CampaignService {

    @Autowired
    private CampaignRepository repository;

    @Override
    public Campaign create(Campaign Campaign) {
        return repository.save(Campaign);
    }

    @Override
    public List<Campaign> findAll() {
        return repository.findAll();
    }

    @Override
    public Campaign findById(int id) {
        return repository.findOne(id);
    }

    @Override
    public Campaign update(Campaign Campaign) {
        return repository.save(Campaign);
    }

    @Override
    public Campaign delete(int id) {
        Campaign Campaign = findById(id);
        if (Campaign != null) {
            repository.delete(Campaign);
        }
        return Campaign;
    }
}
