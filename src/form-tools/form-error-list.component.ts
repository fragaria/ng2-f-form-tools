import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ng2-f-form-error-list',
  templateUrl: 'form-error-list.component.html'
})
export class FormErrorListComponent {
  @Input() form: FormGroup;
  @Input() title: string;
  _errors: {[key: string]: string[]} = {};
  errorSections: string[] = [];


  @Input()
  set errors(errors: {[key: string]: string[]}) {
    this._errors = errors;
    if (errors) {
      this.errorSections = [];
      for (let errorSection in errors) {
        this.errorSections.push(errorSection);
      }
    }
  }

  get errors() {
    return this._errors
  }

  anyError(errors: {[key: string]: string[]}):boolean {
    for (let errorSection in errors) {
      if (errors[errorSection].length) {
        return true
      }
    }
    return false
  }
}
