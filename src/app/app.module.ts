import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AbbonementComponent } from './abbonement/abbonement.component';
import { ClientComponent } from './client/client.component';
import { DonationComponent } from './donation/donation.component';
import { EntraineurComponent } from './entraineur/entraineur.component';
import { JoueurEnDemandeComponent } from './joueur-en-demande/joueur-en-demande.component';
import { JoueurEnTestComponent } from './joueur-en-test/joueur-en-test.component';
import { JoueurComponent } from './joueur/joueur.component';
import { PanierComponent } from './panier/panier.component';
import { FormsModule } from '@angular/forms';


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
