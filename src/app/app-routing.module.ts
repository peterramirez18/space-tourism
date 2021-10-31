import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './pages/home/home.component';
import { DestinationEuropaComponent } from './pages/destination/destination-europa/destination-europa.component';
import { DestinationMoonComponent } from './pages/destination/destination-moon/destination-moon.component';
import { DestinationMarsComponent } from './pages/destination/destination-mars/destination-mars.component';
import { DestinationTitanComponent } from './pages/destination/destination-titan/destination-titan.component';
import { CrewAComponent } from './pages/crew/crew-a/crew-a.component';
import { CrewBComponent } from './pages/crew/crew-b/crew-b.component';
import { CrewCComponent } from './pages/crew/crew-c/crew-c.component';
import { CrewDComponent } from './pages/crew/crew-d/crew-d.component';
import { TechnologyAComponent } from './pages/technology/technology-a/technology-a.component';
import { TechnologyBComponent } from './pages/technology/technology-b/technology-b.component';
import { TechnologyCComponent } from './pages/technology/technology-c/technology-c.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'destinations',
    redirectTo: 'destinations/moon',
    pathMatch: 'prefix'
  },

  {
    path: 'destinations/moon',
    component: DestinationMoonComponent,
  },

  {
    path: 'destinations/mars',
    component: DestinationMarsComponent,
  },

  {
    path: 'destinations/europa',
    component: DestinationEuropaComponent,
  },

  {
    path: 'destinations/titan',
    component: DestinationTitanComponent,
  },
  {
    path: 'crew',
    redirectTo: 'crew/a',
    pathMatch: 'prefix'
  },

  {
    path: 'crew/a',
    component: CrewAComponent,
  },

  {
    path: 'crew/b',
    component: CrewBComponent,
  },

  {
    path: 'crew/c',
    component: CrewCComponent,
  },

  {
    path: 'crew/d',
    component: CrewDComponent,
  },

  {
    path: 'technology',
    redirectTo: 'technology/a',
    pathMatch: 'prefix'
  },

  {
    path: 'technology/a',
    component: TechnologyAComponent,
  },

  {
    path: 'technology/b',
    component: TechnologyBComponent,
  },

  {
    path: 'technology/c',
    component: TechnologyCComponent,
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterTestingModule
  
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
