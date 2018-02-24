import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ScreenRoutingModule} from './screen-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ScreenCreateComponent } from './screen-create/screen-create.component';
import { ScreenListComponent } from './screen-list/screen-list.component';

@NgModule({
  imports: [
    CommonModule,
    ScreenRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ScreenCreateComponent, ScreenListComponent]
})
export class ScreenModule { }
