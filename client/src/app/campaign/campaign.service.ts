import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Campaign} from '../models/campaign.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CampaignService {

  constructor(private http: HttpClient) {
  }

  private apiUrl = '/api';

  public createCampaign(campaign) {
    return this.http.post<Campaign>(this.apiUrl, campaign);
  }

  public getCampaigns() {
    return this.http.get<Campaign[]>(this.apiUrl);
  }

  public getCampaign(id: number) {
    return this.http.get<Campaign>(this.apiUrl + '/' + id);
  }

  public updateCampaign(campaign) {
    return this.http.put(this.apiUrl + '/' + campaign.id, campaign);
  }

  public deleteCampaign(campaign) {
    return this.http.delete(this.apiUrl + '/' + campaign.id);
  }

}
