import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextMaskConfig } from 'angular2-text-mask';

export interface OobjTextInputComponentConfig {
  id?: string;
  label?: string;
  placeholder?: string;
  mask?: Array<string | RegExp> | ((raw: string) => Array<string | RegExp>) | false;
  errorMessage?: string | { [key: string]: string };
  helpMessage?: string;
  disabled?: boolean;
  readonly?: boolean;
  inputType?: 'text' | 'password' | 'email' | 'number';
}

let nextUniqueId = 0;
 /**
  * Example of usage:
  * <example-url>/oobj-angular/examples-text-input</example-url>
  */
@Component({
  selector: 'oobj-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class OobjTextInputComponent implements OnInit {
  constructor() {}

  private _uid = `oobj-text-input-${nextUniqueId++}`;

  @Input()
  get config(): OobjTextInputComponentConfig {
    return {
      ...{
        id: this._uid,
        disabled: false,
        placeholder: 'Preencha o campo',
        mask: false,
        readonly: false,
        inputType: 'text'
      },
      ...(this._config || {})
    };
  }
  set config(input: OobjTextInputComponentConfig) {
    this._config = input;
  }
  private _config: OobjTextInputComponentConfig;

  @Input()
  formControl: FormControl;

  /**
   * Retorna objeto de configuração de TextMaskConfig,
   * com guide false e keepCharPositions true.
   */
  maskConfig(): TextMaskConfig {
    return {
      mask: this.config.mask,
      guide: false,
      keepCharPositions: true
    };
  }

  /**
   * Retorna objeto
   */
  hasErrors() {
    return this.formControl ? this.formControl.errors && this.formControl.touched : false;
  }

  get errorMessage(): string {
    return typeof this.config.errorMessage === 'string'
      ? this.config.errorMessage
      : this.errorMessage[this.formControl.errors[0]];
  }

  ngOnInit() {
    this.setFormControlOnChange();
  }

  private setFormControlOnChange() {
    if (this.formControl && this.config.mask) {
      this.formControl.valueChanges.subscribe((value: string) => value.replace(/[^\w\d]/gi, ''));
    }
  }
}
