import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Campaign} from '../models/campaign.model';
import {CampaignService} from './campaign.service';
import {Resources} from "./resources";

@Component({
  templateUrl: './add-campaign.component.html'
})
export class AddCampaignComponent {

  campaign: Campaign = new Campaign();
  cities = Resources.POLAND_CITIES;
  min_bid_amount = Resources.MIN_BID_AMOUNT;
  successMessage: string;
  errorMessage: string;

  constructor(private router: Router,
              private campaignService: CampaignService) {
    this.campaign.status = false;
  }

  createCampaign(): void {
    if (this.campaign.campaignName === undefined || this.campaign.keywords === undefined
      || this.campaign.bidAmount === undefined || this.campaign.campaignFund === undefined
      || this.campaign.town === undefined || this.campaign.radius === undefined) {
      this.errorMessage = "Error: you must fill all fields";
      setTimeout(() => this.errorMessage = null, 2500);
      return;
    }
    if (this.campaign.bidAmount < this.min_bid_amount) {
      this.errorMessage = "Error: minimum bid amount is " + this.min_bid_amount.toString();
      setTimeout(() => this.errorMessage = null, 2500);
      return;
    }
    this.campaignService.createCampaign(this.campaign)
      .subscribe(data => {
        this.successMessage = "Campaign created successfully.";
        setTimeout(() => {
          this.successMessage = null;
          this.campaign = new Campaign();
          this.campaign.status = false;
        }, 2500);
      });
  };

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 46) return true;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }
}
