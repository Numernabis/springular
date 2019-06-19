import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Campaign } from '../models/campaign.model';
import { CampaignService } from './campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  campaigns: Campaign[];

  constructor(private router: Router, 
              private campaignService: CampaignService) {
  }

  ngOnInit() {
    this.campaignService.getCampaigns()
      .subscribe( data => {
        this.campaigns = data;
      });
  };

  deleteCampaign(campaign: Campaign): void {
    this.campaignService.deleteCampaign(campaign)
      .subscribe( data => {
        this.campaigns = this.campaigns.filter(c => c !== campaign);
      })
  };


}
