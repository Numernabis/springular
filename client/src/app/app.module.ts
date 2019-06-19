import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CampaignComponent} from './campaign/campaign.component';
import {AppRoutingModule} from './app-routing.module';
import {CampaignService} from './campaign/campaign.service';
import {HttpClientModule} from "@angular/common/http";
import {AddCampaignComponent} from './campaign/add-campaign.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignComponent,
    AddCampaignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CampaignService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
