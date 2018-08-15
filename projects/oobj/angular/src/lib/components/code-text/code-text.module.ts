import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeHighlightService } from './code-highlight.service';
import { OobjCodeTextComponent } from './code-text.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OobjCodeTextComponent],
  providers: [CodeHighlightService],
  exports: [OobjCodeTextComponent]
})
export class OobjCodeTextModule {}
