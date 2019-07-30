import { NgModule } from '@angular/core';
import { AuthenticateRoutingModule } from './authenticate.routing.module';
import { SharedModule } from '../sharedModule/shared.module';
import { InviteAllComponent } from './register/invite-all/invite-all.component';
import { HeaderComponent } from './register/header/header.component';
import { FooterComponent } from './register/footer/footer.component';
import { SelectedInviteComponent } from './register/selected-invite/selected-invite.component';

@NgModule({
  imports: [
    SharedModule,
    AuthenticateRoutingModule
  ],
  declarations: [AuthenticateRoutingModule.components, InviteAllComponent, HeaderComponent, FooterComponent, SelectedInviteComponent ],
  providers: []
})
export class AuthenticateModule { }
