import { NgModule } from '@angular/core';
import { AuthenticateRoutingModule } from './authenticate.routing.module';
import { SharedModule } from '../sharedModule/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AuthenticateRoutingModule
  ],
  declarations: [AuthenticateRoutingModule.components ],
  providers: []
})
export class AuthenticateModule { }
