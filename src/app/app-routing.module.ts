import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevisComponent } from './devis/devis.component';
import { HomeComponent } from './home/home.component';
import { FactureComponent } from './facture/facture.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { DocPersoComponent } from './doc-perso/doc-perso.component';
import { SignatureElecComponent } from './signature-elec/signature-elec.component';
import { FactureNonPaComponent } from './facture-non-pa/facture-non-pa.component';
import { RessourceComponent } from './ressource/ressource.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'devis',component:DevisComponent},
  {path:'facture',component:FactureComponent},
  {path:'bibliotheques',component:BibliothequeComponent},
  {path:'docperso',component:DocPersoComponent},
  {path:'signatureElec',component:SignatureElecComponent},
  {path:'factureNonPa',component:FactureNonPaComponent},
  {path:'ressource',component:RessourceComponent}
]  
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
