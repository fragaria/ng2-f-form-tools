import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ng2-f-personal-ident-number-field',
  templateUrl: 'personal-ident-number-field.component.html'
})
export class PersonalIdentNumberFieldComponent {
  @Input() form: FormGroup;
  @Input() fieldLabel: string;
  @Input() controlName: string;
  @Input() errors: {[key: string]: string[]} = {};
  @Input() showErrors: boolean = true;

}
