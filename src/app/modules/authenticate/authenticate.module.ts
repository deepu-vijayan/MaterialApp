import { NgModule } from '@angular/core';
import { AuthenticateRoutingModule } from './authenticate.routing.module';
import { SharedModule } from '../sharedModule/shared.module';
import { InviteAllComponent } from './register/invite-all/invite-all.component';
import { HeaderComponent } from './register/header/header.component';
import { FooterComponent } from './register/footer/footer.component';
import { SelectedInviteComponent } from './register/selected-invite/selected-invite.component';
import { ProfileCompleteComponent } from './register/profile-complete/profile-complete.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    AuthenticateRoutingModule,
    FormsModule
  ],
  declarations: [AuthenticateRoutingModule.components,
    InviteAllComponent,
    HeaderComponent,
    FooterComponent,
    SelectedInviteComponent,
    ProfileCompleteComponent ],
  providers: []
})
export class AuthenticateModule { }
