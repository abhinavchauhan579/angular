import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { FormEssentialsComponent } from './form-essentials/form-essentials.component';
import { HomeComponent } from './home/home.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home'}
  },
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
