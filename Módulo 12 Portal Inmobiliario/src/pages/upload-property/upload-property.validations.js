import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator'; 

const validationSchema = {
    field: {
        title: [{
            validator: Validators.required,
            message: 'Campo obligatorio',
        }, {
            validator: Validators.minLength,
            customArgs: { length: 20 },
            message: 'Introduzca al menos 20 caracteres por favor',
        }],
        notes: [{
            validator: Validators.required,
            message: 'Campo obligatorio',
        }, {
            validator: Validators.minLength,
            customArgs: { length: 120 },
            message: 'Introduzca al menos 120 caracteres por favor',
        }],
        email: [{
            validator: Validators.required,
            message: 'Campo obligatorio',
        }, {
            validator: Validators.email,
            message: 'Introduzca un email válido por favor',
        }],
        phone: [{
            validator: Validators.required,
            message: 'Campo obligatorio',
        },{
            validator: Validators.pattern,
            customArgs: { pattern: /^(6|7|8|9)\d{8}$/ },
            message: 'Introduzca un número de teléfono válido por favor',
        }],
        price: [{
            validator: positiveNumber.validator,
            message: 'Introduzca un precio válido por favor',
        },{
            validator: Validators.required,
            message: 'Campo obligatorio',
        }],
        saleTypes: [{
            validator: arrayRequired.validator,
            customArgs: { minLength: 1, maxLength: 4 },
            message: 'Eliga al menos una opción por favor',
        }],
        address: [{
            validator: Validators.required,
            message: 'Campo obligatorio',
        },{
            validator: Validators.minLength,
            customArgs: { length: 7 },
            message: 'Introduzca una dirección válida por favor',
        }],
        city: [{
            validator: Validators.required,
            message: 'Campo obligatorio',
        },{
            validator: Validators.minLength,
            customArgs: { length: 3 },
            message: 'Introduzca una ciudad válida por favor',
        }],
        province: [{
            validator: Validators.required,
            message: 'Eliga una provincia por favor',
        }],
        squareMeter: [{
            validator: positiveNumber.validator,
            message: 'Introduzca un número válido por favor'
        },{
            validator: Validators.required,
            message: 'Campo obligatorio',
        }],
        rooms: [{
            validator: positiveNumber.validator,
            message: 'Introduzca un número válido por favor'
        },{
            validator: Validators.required,
            message: 'Campo obligatorio',
        }],
        bathrooms: [{
            validator: positiveNumber.validator,
            message: 'Introduzca un número válido por favor'
        },{
            validator: Validators.required,
            message: 'Campo obligatorio',
        }],
        mainFeatures: [{
            validator: arrayRequired.validator,
            customArgs: { minLength: 1, maxLength: 20 },
            message: 'Introduza al menos una caraterística básica por favor',
        }],
        locationUrl: [{
            validator: Validators.required,
            message: 'Campo obligatorio',
        },{
            validator: Validators.pattern,
            customArgs: { pattern: /^(http|https)\:\/\/www\.google\.(com|de)\/maps/ },
        }],
        equipments: [{
            validator: arrayRequired.validator,
            customArgs: { minLength: 1, maxLength: 6 },
            message: 'Eliga al menos un tipo de equipamiento por favor',
        }]
    },
};

export const formValidation = createFormValidation(validationSchema);