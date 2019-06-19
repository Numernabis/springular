import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Campaign } from '../models/campaign.model';
import { CampaignService } from './campaign.service';

@Component({
  templateUrl: './add-campaign.component.html'
})
export class AddCampaignComponent {

  campaign: Campaign = new Campaign();

  constructor(private router: Router,
              private campaignService: CampaignService) {
  }

  createCampaign(): void {
    this.campaignService.createCampaign(this.campaign)
      .subscribe( data => {
        alert("campaign created successfully.");
      });
  };

}
