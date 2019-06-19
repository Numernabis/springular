import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CampaignComponent} from './campaign/campaign.component';
import {AddCampaignComponent} from './campaign/add-campaign.component';

const routes: Routes = [
  {path: 'campaigns', component: CampaignComponent},
  {path: 'add', component: AddCampaignComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
