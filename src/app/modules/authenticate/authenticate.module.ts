import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateRoutingModule } from './authenticate.routing.module';

import { MaterialModule } from '../../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    MaterialModule
  ],
  declarations: [AuthenticateRoutingModule.components ],
  providers: []
})
export class AuthenticateModule { }
