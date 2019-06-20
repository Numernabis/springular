import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CampaignComponent} from './campaign/campaign.component';
import {AddCampaignComponent} from './campaign/add-campaign.component';
import {EditCampaignComponent} from './campaign/edit-campaign.component';

const routes: Routes = [
  {path: '', component: CampaignComponent},
  {path: 'campaigns', component: CampaignComponent},
  {path: 'add', component: AddCampaignComponent},
  {path: 'edit/:id', component: EditCampaignComponent}
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
