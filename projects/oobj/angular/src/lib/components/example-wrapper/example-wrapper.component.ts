import { Component, Input, OnInit } from '@angular/core';

export interface DemoSourceInfo {
  source: string;
  filename: string;
  language: string;
}

export interface DemoSourceSection {
  typescript: DemoSourceInfo;
  template: DemoSourceInfo;
  style: DemoSourceInfo;
}

@Component({
  selector: 'oobj-example-wrapper',
  templateUrl: './example-wrapper.component.html',
  styleUrls: ['./example-wrapper.component.scss']
})
export class OobjExampleWrapperComponent implements OnInit {
  @Input()
  demoSection: DemoSourceSection;

  @Input()
  title: String;

  constructor() {}

  ngOnInit() {}
}
