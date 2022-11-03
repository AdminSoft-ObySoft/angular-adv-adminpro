import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'progress', component: ProgressComponent},
  {path:'grafica-1', component: Grafica1Component},
  {path:'', redirectTo: '/dashboard', pathMatch: 'full'},
  //{path:'**', component: NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
