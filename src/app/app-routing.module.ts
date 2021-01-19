import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { FormEssentialsComponent } from './form-essentials/form-essentials.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: 'forms',
    component: FormEssentialsComponent,
    data: { title: 'Form Essentials'}
  },
  { 
    path: 'tables',
    component: TablesComponent,
    data: { title: 'Tables'}
  },
  {
    path: 'alerts',
    component: AlertsComponent,
    data: { title: 'Alerts'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
