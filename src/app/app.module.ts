import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { HeroBrandComponent } from './hero-brand/hero-brand.component';
import { HeroSocialComponent } from './hero-social/hero-social.component';
import { HistoryComponent } from './history/history.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { HeroLogoComponent } from './hero-logo/hero-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HeroBrandComponent,
    HeroSocialComponent,
    HistoryComponent,
    ProjectsComponent,
    FooterComponent,
    HeroLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
