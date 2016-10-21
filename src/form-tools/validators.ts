import {
  AbstractControl,
  FormGroup,
  ValidatorFn } from '@angular/forms';

const EMAIL_RE: RegExp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const email = control.value;

    if (email == '') return null;

    const no = EMAIL_RE.test(email);
    return no ? null : {'email': {email}};
  };
}

const PIN_RE: RegExp = /^[0-9]{9,10}$/;

export function personalIdentNumberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const personalIdentNumber = control.value;

    if (personalIdentNumber == '') return null;

    const no = PIN_RE.test(personalIdentNumber);
    return no ? null : {'personalIdentNumber': {personalIdentNumber}};
  };
}

export function anyRequiredValidator(...fieldNames) {
  return (group: FormGroup): {[key: string]: any} => {
    let anyValid = false;

    for (let name of fieldNames) {
      let val = group.get(name).value
      if (val !== '') anyValid = true;
    }

    return anyValid ? null : { anyRequired: true }

  }
}
