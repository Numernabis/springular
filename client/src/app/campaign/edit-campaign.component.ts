import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Campaign} from '../models/campaign.model';
import {CampaignService} from './campaign.service';

@Component({
  templateUrl: './edit-campaign.component.html'
})
export class EditCampaignComponent implements OnInit {

  campaign: Campaign;
  successMessage: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private campaignService: CampaignService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.campaignService.getCampaign(params['id'])
        .subscribe(data => {
          this.campaign = data;
        })
    );
  }

  updateCampaign(): void {
    this.campaignService.updateCampaign(this.campaign)
      .subscribe(data => {
        this.successMessage = "Campaign updated successfully.";
        setTimeout(() => this.successMessage = null, 3000);
      });
  };

}
