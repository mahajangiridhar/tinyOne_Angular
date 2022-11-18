import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FeaturesComponent } from './shared/components/features/features.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FeatureCardComponent } from './shared/components/feature-card/feature-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    FooterComponent,
    NavbarComponent,
    FeatureCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
