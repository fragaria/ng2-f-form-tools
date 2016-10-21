import { Injectable }             from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { FormManager, FormErrorsProcessor } from './models';

@Injectable()
export class FormManagerBuilderService {

  constructor(private fb: FormBuilder) { }

  buildFormManager(groupFormConfig: {[key: string]: any},
                   groupFormConfigExtra: {[key: string]: any} = null,
                   validationMessagesConfig: {[key: string]: {[key: string]: string}} = null): FormManager {

    let formGroup: FormGroup = this.fb.group(groupFormConfig, groupFormConfigExtra);
    let formErrors: FormErrorsProcessor = new FormErrorsProcessor(formGroup, groupFormConfig, validationMessagesConfig);
    let formManager: FormManager = new FormManager(formGroup, formErrors);

    return formManager
  }

}
