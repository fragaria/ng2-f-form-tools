export const DEFAULT_VALIDATOR_MESSAGE = 'Opravte chybu ve formuláři';

export const DEFAULT_VALIDATOR_MESSAGES = {
  'required':  'Pole je povinné.',
  'minlength': 'Vámi zadaná položka je příliš krátká.',
  'maxlength': 'Vámi zadaná položka je příliš dlouhá.',
};

export const NAME_VALIDATOR_MESSAGES = {
  'required':  'Jméno je povinné.',
  'minlength': 'Jméno musí mít alespoň 3 znaky.',
  'maxlength': 'Jméno nesmí mít více než 100 znaků.',
};

// messages for personal ident number
export const PIN_VALIDATOR_MESSAGES = {
  'required':            'Rodné číslo je povinné.',
  'personalIdentNumber': 'Zadejte skutečné rodné číslo.'
};

export const EMAIL_VALIDATOR_MESSAGES = {
  'required': 'Email je povinný.',
  'email':    'Vámi zadaný email neexistuje.'
};

export const VALIDATOR_MESSAGES = {
  'name': NAME_VALIDATOR_MESSAGES,
  'personalIdentNumber': PIN_VALIDATOR_MESSAGES,
  'email': EMAIL_VALIDATOR_MESSAGES,
  'defaultValidation': DEFAULT_VALIDATOR_MESSAGES
}
