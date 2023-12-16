import { Validators, createFormValidation } from "@lemoncode/fonk";
// Comprobamos que la información que introduce el usuario es válida
const validationSchema = {
    field: { 
        user: [
           {
            validator: Validators.required,
            message: 'Campo requerido',
           }, 
           {
            validator: Validators.email,
            message: 'Email no válido',
           },
        ],

        password: [
          { 
            validator: Validators.required,
            message: 'Campo requerido',
          }, 
        ],
    },
};

export const formValidation  = createFormValidation(validationSchema);