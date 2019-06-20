import {Component, OnInit, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';

import {Campaign} from '../models/campaign.model';
import {CampaignService} from './campaign.service';
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html'
})
export class CampaignComponent implements OnInit {

  campaigns: Campaign[];
  campaignToDelete: Campaign;
  modalRef: BsModalRef;

  constructor(private router: Router,
              private modalService: BsModalService,
              private campaignService: CampaignService) {
  }

  ngOnInit() {
    this.campaignService.getCampaigns()
      .subscribe(data => {
        this.campaigns = data;
      });
  };

  deleteCampaign(): void {
    this.campaignService.deleteCampaign(this.campaignToDelete)
      .subscribe(data => {
        this.campaigns = this.campaigns.filter(c => c !== this.campaignToDelete);
        this.modalRef.hide();
      })
  };

  openModal(template: TemplateRef<any>, campaign: Campaign) {
    this.campaignToDelete = campaign;
    this.modalRef = this.modalService.show(template);
  }
}
