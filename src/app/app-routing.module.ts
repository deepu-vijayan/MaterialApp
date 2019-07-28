import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'authenticate', loadChildren: './modules/authenticate/authenticate.module#AuthenticateModule' },
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: '', pathMatch: 'full', redirectTo: '/authenticate/login' },
  //{ path: '**', redirectTo: '/authenticate/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
