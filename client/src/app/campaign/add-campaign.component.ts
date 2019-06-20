import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Campaign } from '../models/campaign.model';
import { CampaignService } from './campaign.service';

@Component({
  templateUrl: './add-campaign.component.html'
})
export class AddCampaignComponent {

  campaign: Campaign = new Campaign();
  successMessage: string;

  constructor(private router: Router,
              private campaignService: CampaignService) {
    this.campaign.status = false;
  }

  createCampaign(): void {
    this.campaignService.createCampaign(this.campaign)
      .subscribe( data => {
        this.successMessage = "Campaign created successfully.";
        setTimeout(() => this.successMessage = null, 3000);
      });
  };

}
