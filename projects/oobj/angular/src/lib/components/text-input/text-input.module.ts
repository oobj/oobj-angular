import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { OobjTextInputComponent } from './text-input.component';

@NgModule({
  imports: [CommonModule, TextMaskModule, ReactiveFormsModule, FormsModule],
  declarations: [OobjTextInputComponent],
  exports: [OobjTextInputComponent]
})
export class OobjTextInputModule {}
