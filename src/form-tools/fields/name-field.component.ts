import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ng2-f-name-field',
  template: require('./name-field.component.html')
})
export class NameFieldComponent {
  @Input() form: FormGroup;
  @Input() fieldLabel: string;
  @Input() controlName: string;
  @Input() errors: {[key: string]: string[]} = {};
  @Input() showErrors: boolean = true;

}
