import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { AbbonementComponent } from './abbonement/abbonement.component';
import { ClientComponent } from './client/client.component';
import { DonationComponent } from './admin/donation/donation.component';
import { EntraineurComponent } from './entraineur/entraineur.component';
import { JoueurEnDemandeComponent } from './entraineur/joueur-en-demande/joueur-en-demande.component';
import { JoueurEnTestComponent } from './entraineur/joueur-en-test/joueur-en-test.component';
import { JoueurComponent } from './admin/joueur/joueur.component';
import { PanierComponent } from './panier/panier.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ListdeJoueurComponent } from './entraineur/listde-joueur/listde-joueur.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashbordComponent,
    AbbonementComponent,
    ClientComponent,
    DonationComponent,
    EntraineurComponent,
    JoueurEnDemandeComponent,
    JoueurEnTestComponent,
    JoueurComponent,
    PanierComponent,
    LoginComponent,
    ListdeJoueurComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
