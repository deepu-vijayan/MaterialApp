import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { InviteComponent } from './register/invite.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { InviteAllComponent } from './register/invite-all/invite-all.component';
import { SelectedInviteComponent } from './register/selected-invite/selected-invite.component';

const routes: Routes = [
{ path: 'login',  pathMatch: 'full', component: LoginComponent },
{ path: 'invite', component: InviteComponent,
children: [
  { path: 'all', component: InviteAllComponent },
  { path: 'select', component: SelectedInviteComponent }
]
},
{ path: '404', component: NotFoundComponent },
{ path: '403', component: ForbiddenComponent },
//{ path: '', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticateRoutingModule {
  static components = [
    LoginComponent,
    InviteComponent,
    NotFoundComponent,
    ForbiddenComponent
  ];

}
