import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { OobjCodeTextModule } from '../code-text';
import { OobjExampleWrapperComponent } from './example-wrapper.component';

@NgModule({
  imports: [CommonModule, OobjCodeTextModule, NgbTabsetModule],
  declarations: [OobjExampleWrapperComponent],
  exports: [OobjExampleWrapperComponent]
})
export class OobjExampleWrapperModule {}
