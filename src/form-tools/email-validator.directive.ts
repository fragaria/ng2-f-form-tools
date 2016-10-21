import { Directive, Input, OnChanges, SimpleChanges }            from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, Validators } from '@angular/forms';

import { emailValidator } from './validators';

@Directive({
  selector: '[ng2fEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator, OnChanges {
  @Input() email: string;
  private valFn = Validators.nullValidator;

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['email'];
    if (change) {
      this.valFn = emailValidator();
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }
}
