import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SimpleFormComponent } from './components/simple-form/simple-form.component'

@NgModule({
  declarations: [
    SimpleFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    SimpleFormComponent,
  ]
})
export class AppFormsModule { }
