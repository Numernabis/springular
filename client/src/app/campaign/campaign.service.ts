import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Campaign } from '../models/campaign.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CampaignService {

  constructor(private http: HttpClient) {}

  //private campaignUrl = 'http://localhost:8080/springular/campaign';
  private apiUrl = '/api';

  public getCampaigns() {
    return this.http.get<Campaign[]>(this.apiUrl);
  }

  public deleteCampaign(campaign) {
    return this.http.delete(this.apiUrl + "/"+ campaign.id);
  }

  public createCampaign(campaign) {
    return this.http.post<Campaign>(this.apiUrl, campaign);
  }

}
