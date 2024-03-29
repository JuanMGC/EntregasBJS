import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';
import { isNumber } from '@lemoncode/fonk-is-number-validator';

const validationSchema = {
  field: {
    'select-account': [
      { validator: Validators.required, message: 'Campo requerido' },
    ],

    iban: [
      { validator: iban.validator, message: 'El formato IBAN no es valido' },
      { validator: Validators.required, message: 'Campo requerido' },
    ],

    name: [{ validator: Validators.required, message: 'Campo requerido' }],

    amount: [
      { validator: Validators.required, message: 'Campo requerido' },
      { validator: isNumber.validator,message: 'Numero no valido, importe mayor que 0' },
    ],

    concept: [{ validator: Validators.required, message: 'Campo requerido' }],

    email: [{ validator: Validators.email, message: 'Email no valido' }],

    date: [
      {
        validator: laterDate.validator,
        message: 'La fecha debe ser posterior a la fecha actual',
        customArgs: { date: new Date() },
      },
    ],
  },
};

export const formularyValidation = createFormValidation(validationSchema);