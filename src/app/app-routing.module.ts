import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralHomeComponent } from './pages/general-home/general-home.component';

const routes: Routes = [
   {path:'', component: GeneralHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
