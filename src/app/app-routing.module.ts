import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AbbonementComponent } from './abbonement/abbonement.component';
import { EntraineurComponent } from './entraineur/entraineur.component';
import { JoueurComponent } from './joueur/joueur.component';
import { JoueurEnTestComponent } from './joueur-en-test/joueur-en-test.component';
import { JoueurEnDemandeComponent } from './joueur-en-demande/joueur-en-demande.component';
import { PanierComponent } from './panier/panier.component';
import { Client } from './Models/client';
import { ClientComponent } from './client/client.component';
import { DonationComponent } from './donation/donation.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'client', component: ClientComponent },
  { path: 'abbonement', component: AbbonementComponent },
  { path: 'entraineur', component: EntraineurComponent },
  { path: 'joueur', component: JoueurComponent },
  { path: 'joueurenTest', component: JoueurEnTestComponent },
  { path: 'joueurenDemande', component: JoueurEnDemandeComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
