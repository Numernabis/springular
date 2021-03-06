import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CampaignComponent} from './campaign/campaign.component';
import {AppRoutingModule} from './app-routing.module';
import {CampaignService} from './campaign/campaign.service';
import {HttpClientModule} from '@angular/common/http';
import {AddCampaignComponent} from './campaign/add-campaign.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ModalModule} from 'ngx-bootstrap/modal';
import {EditCampaignComponent} from './campaign/edit-campaign.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignComponent,
    AddCampaignComponent,
    EditCampaignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [CampaignService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
