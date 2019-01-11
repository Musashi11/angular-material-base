import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbContactRoutingModule } from './amb-contact-routing.module';
import { AmbContactComponent } from './amb-contact.component';
import { MaterialModule } from '../shared/material/material.module';
import { AmbDashboardComponent } from '../shared/components/amb-dashboard/amb-dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AmbContactRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [AmbContactComponent, AmbDashboardComponent]
})
export class AmbContactModule { }
