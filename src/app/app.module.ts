import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { CrewComponent } from './pages/crew/crew.component';
import { DestinationMarsComponent } from './pages/destination/destination-mars/destination-mars.component';
import { DestinationMoonComponent } from './pages/destination/destination-moon/destination-moon.component';
import { DestinationEuropaComponent } from './pages/destination/destination-europa/destination-europa.component';
import { DestinationTitanComponent } from './pages/destination/destination-titan/destination-titan.component';
import { CrewAComponent } from './pages/crew/crew-a/crew-a.component';
import { CrewBComponent } from './pages/crew/crew-b/crew-b.component';
import { CrewCComponent } from './pages/crew/crew-c/crew-c.component';
import { CrewDComponent } from './pages/crew/crew-d/crew-d.component';
import { TechnologyAComponent } from './pages/technology/technology-a/technology-a.component';
import { TechnologyBComponent } from './pages/technology/technology-b/technology-b.component';
import { TechnologyCComponent } from './pages/technology/technology-c/technology-c.component';
import { TechnologyComponent } from './pages/technology/technology.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CrewComponent,
    TechnologyComponent,
    DestinationMarsComponent,
    DestinationMoonComponent,
    DestinationEuropaComponent,
    DestinationTitanComponent,
    CrewAComponent,
    CrewBComponent,
    CrewCComponent,
    CrewDComponent,
    TechnologyAComponent,
    TechnologyBComponent,
    TechnologyCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
