package com.example.springular;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/api"})
//@RequestMapping({"/campaigns"})
public class CampaignController {

    @Autowired
    private CampaignService CampaignService;

    @PostMapping
    public Campaign create(@RequestBody Campaign Campaign){
        return CampaignService.create(Campaign);
    }

    @GetMapping
    public List<Campaign> findAll(){
        return CampaignService.findAll();
    }
    
    @GetMapping(path = {"/{id}"})
    public Campaign findOne(@PathVariable("id") int id){
        return CampaignService.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    public Campaign update(@PathVariable("id") int id, @RequestBody Campaign Campaign){
        Campaign.setId(id);
        return CampaignService.update(Campaign);
    }

    @DeleteMapping(path ={"/{id}"})
    public Campaign delete(@PathVariable("id") int id) {
        return CampaignService.delete(id);
    }
}
