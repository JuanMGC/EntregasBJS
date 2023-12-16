import {onUpdateField,onSubmitForm,onSetError,onSetFormErrors} from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';
import {history, routes} from '../../core/router';

//modelo de la vista
let login = {
    user: '',
    password: '',
};

//Recuperamos los valores del input del usuario para asignarlo al objeto "login"
onUpdateField('user', (event) => {
    const value = event.target.value;
    login = {
        ...login,
        user: value
    };
    formValidation.validateField('user', login.user).then(result => {
      onSetError('user',result);  
});
});
//Recuperamos los valores del input del usuario para asignarlo al objeto "login"
onUpdateField('password', (event) => {
    const value = event.target.value;
    login = {
        ...login,
        password: value
    };
    formValidation.validateField('password', login.password).then(result => {
        onSetError('password',result);  

});
});

const onNavigate = (isValid) => {
    if (isValid) {
        history.push(routes.accountList);
    } else {
        alert('Usuario y/o contraseña no son válidos');
    }
};
//Cuando el usuario pulsa el boton de login manda al backend los valores que se han recabado en el objeto "login"
onSubmitForm('login-button', () => {
    formValidation.validateForm(login).then(result => {
       onSetFormErrors(result);
       if(result.succeeded){
        isValidLogin(login).then(isValid => {
        onNavigate(isValid);
    });
    }
    });
});