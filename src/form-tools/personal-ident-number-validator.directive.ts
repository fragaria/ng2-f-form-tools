import { Directive, Input, OnChanges, SimpleChanges }            from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, Validators } from '@angular/forms';

import { personalIdentNumberValidator } from './validators';

@Directive({
  selector: '[ng2fPersonalIdentNumber]',
  providers: [{provide: NG_VALIDATORS, useExisting: PersonalIdentNumberValidatorDirective, multi: true}]
})
export class PersonalIdentNumberValidatorDirective implements Validator, OnChanges {
  @Input() personalIdentNumber: string;
  private valFn = Validators.nullValidator;

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['personalIdentNumber'];
    if (change) {
      this.valFn = personalIdentNumberValidator();
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }
}
