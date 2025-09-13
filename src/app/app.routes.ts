
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { UserAreaComponent } from './pages/user-area/user-area.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'פרויקט גימפל' },
  { path: 'about', component: AboutComponent, title: 'אודות — פרויקט גימפל' },
  { path: 'how', component: HowItWorksComponent, title: 'איך מתחילים — פרויקט גימפל' },
  { path: 'user', component: UserAreaComponent, title: 'אזור משתמש — פרויקט גימפל' },
  { path: '**', redirectTo: '' }
];
