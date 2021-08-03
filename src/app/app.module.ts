import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { CarousselComponent } from './header/caroussel/caroussel.component';
import { CardsComponent } from './main/cards/cards.component';
import { BannerComponent } from './main/banner/banner.component';
import { NavlinkComponent } from './footer/navlink/navlink.component';
import { ProfilComponent } from './profil/profil.component';
import { ItemsComponent } from './profil/items/items.component';
import { Cards1Component } from './profil/cards1/cards1.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CarousselComponent,
    CardsComponent,
    BannerComponent,
    NavlinkComponent,
    ProfilComponent,
    ItemsComponent,
    Cards1Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
