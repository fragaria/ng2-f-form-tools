import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmailValidatorDirective }               from './email-validator.directive';
import { PersonalIdentNumberValidatorDirective } from './personal-ident-number-validator.directive';
import { FormManagerBuilderService }             from './form-manager-builder.service';
import { FormErrorListComponent }                from './form-error-list.component';
import {
  EmailFieldComponent,
  InputFieldComponent,
  NameFieldComponent,
  PersonalIdentNumberFieldComponent
} from './fields';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  declarations: [
    EmailFieldComponent,
    EmailValidatorDirective,
    FormErrorListComponent,
    InputFieldComponent,
    NameFieldComponent,
    PersonalIdentNumberFieldComponent,
    PersonalIdentNumberValidatorDirective
  ],
  exports: [
    EmailFieldComponent,
    EmailValidatorDirective,
    FormErrorListComponent,
    InputFieldComponent,
    NameFieldComponent,
    PersonalIdentNumberFieldComponent,
    PersonalIdentNumberValidatorDirective
  ],
  providers: [ FormManagerBuilderService ]
})
export class FormToolsModule { }
