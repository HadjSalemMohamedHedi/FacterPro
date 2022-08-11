import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { NavuserComponent } from './navuser/navuser.component';
import { BreadCrumpComponent } from './bread-crump/bread-crump.component';
import { DevisComponent } from './devis/devis.component';
import { FactureComponent } from './facture/facture.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { DocPersoComponent } from './doc-perso/doc-perso.component';
import { SignatureElecComponent } from './signature-elec/signature-elec.component';
import { FactureNonPaComponent } from './facture-non-pa/facture-non-pa.component';
import { RessourceComponent } from './ressource/ressource.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    NavuserComponent,
    BreadCrumpComponent,
    DevisComponent,
    FactureComponent,
    BibliothequeComponent,
    DocPersoComponent,
    SignatureElecComponent,
    FactureNonPaComponent,
    RessourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
