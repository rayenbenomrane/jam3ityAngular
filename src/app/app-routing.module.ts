import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'dashbord',component:DashbordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
