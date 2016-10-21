import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ng2-f-email-field',
  template: require('./email-field.component.html')
})
export class EmailFieldComponent {
  @Input() form: FormGroup;
  @Input() fieldLabel: string;
  @Input() controlName: string;
  @Input() errors: {[key: string]: string[]} = {};
  @Input() showErrors: boolean = true;

}
