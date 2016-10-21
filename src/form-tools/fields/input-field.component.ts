import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ng2-f-input-field',
  template: require('./input-field.component.html')
})
export class InputFieldComponent {
  @Input() form: FormGroup;
  @Input() fieldLabel: string;
  @Input() controlName: string;
  @Input() errors: {[key: string]: string[]} = {};
  @Input() inputId: string;
  @Input() inputType: string = 'text';
  @Input() showErrors: boolean = true;

}
