import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Campaign} from '../models/campaign.model';
import {CampaignService} from './campaign.service';
import {Resources} from "./resources";

@Component({
  templateUrl: './edit-campaign.component.html'
})
export class EditCampaignComponent implements OnInit {

  campaign: Campaign = new Campaign();
  cities = Resources.POLAND_CITIES;
  min_bid_amount = Resources.MIN_BID_AMOUNT;
  successMessage: string;
  errorMessage: string;

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
    if (this.campaign.campaignName === '' || this.campaign.keywords === ''
      || this.campaign.bidAmount === null || this.campaign.campaignFund === null
      || this.campaign.town === '' || this.campaign.radius === null) {
      this.errorMessage = "Error: you must fill all fields";
      setTimeout(() => this.errorMessage = null, 2500);
      return;
    }
    if (this.campaign.bidAmount < this.min_bid_amount) {
      this.errorMessage = "Error: minimum bid amount is " + this.min_bid_amount.toString();
      setTimeout(() => this.errorMessage = null, 2500);
      return;
    }
    this.campaignService.updateCampaign(this.campaign)
      .subscribe(data => {
        this.successMessage = "Campaign updated successfully.";
        setTimeout(() => {
          this.successMessage = null;
          this.router.navigateByUrl('/');
        }, 2500);
      });
  };

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 46) return true;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }
}
