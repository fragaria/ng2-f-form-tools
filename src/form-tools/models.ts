import { FormGroup, FormBuilder } from '@angular/forms';

import {
  DEFAULT_VALIDATOR_MESSAGE,
  VALIDATOR_MESSAGES
} from './validator-messages';

export class FormErrorsProcessor {
  errors = {};
  defaultValidationName: string = 'defaultValidation';
  validationMessages = {};

  constructor(private form: FormGroup,
              groupFormConfig: {[key: string]: any},
              validationMessagesConfig: {[key: string]: {[key: string]: string}} = null) {
    this.form = form;
    this.initFormErrors(groupFormConfig);
    if (validationMessagesConfig) this.updateValidationMessages(validationMessagesConfig);
  }

  initFormErrors(groupFormConfig: {[key: string]: any}) {
    for (const field in groupFormConfig) {
      this.errors[field] = []
      if (field in VALIDATOR_MESSAGES) this.validationMessages[field] = VALIDATOR_MESSAGES[field]
    }
  }

  updateValidationMessages(validationMessagesConfig: {[key: string]: {[key: string]: string}}) {
    for (const field in validationMessagesConfig) {
      this.validationMessages[field] = validationMessagesConfig[field];
    }
  }

  collectErrors(data?: any) {
    if (!this.form) { return; }

    for (const field in this.errors) {
      // clear previous error message (if any)
      this.errors[field] = [];
      const control = this.form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = field in this.validationMessages ? this.validationMessages[field] :
          this.validationMessages[this.defaultValidationName];

        for (const key in control.errors) {
          const message = key in messages ? messages[key] : DEFAULT_VALIDATOR_MESSAGE
          this.errors[field].push(message);
        }
      }
    }
  }
}

export class FormManager {

  constructor(public form: FormGroup,
              public errors: FormErrorsProcessor) {

    form.valueChanges.subscribe(data => errors.collectErrors(data));

    errors.collectErrors(); // (re)set validation messages now
  }

}
