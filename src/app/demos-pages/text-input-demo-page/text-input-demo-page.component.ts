import { Component, OnInit } from '@angular/core';
import { DemoSourceSection } from '@oobj/angular';

@Component({
  selector: 'demo-text-input-demo-page',
  templateUrl: './text-input-demo-page.component.html',
  styleUrls: ['./text-input-demo-page.component.scss']
})
export class TextInputDemoPageComponent implements OnInit {

  demoSection: DemoSourceSection = {
    typescript: {
      filename: 'text-input.component.ts',
      source: require('!!raw-loader!../../examples/text-input/text-input.component.ts'),
      language: 'ts'
    },
    template: {
      filename: 'text-input.component.html',
      source: require('raw-loader!../../examples/text-input/text-input.component.html'),
      language: 'html'
    },
    style: {
      filename: 'text-input.component.scss',
      source: require('raw-loader!../../examples/text-input/text-input.component.scss'),
      language: 'scss'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
