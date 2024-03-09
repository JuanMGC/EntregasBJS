import { getPropertyDetail, getEquipmentDetail, insertMessage } from './property-detail.api';
import { mapPropertyDetailApiToVm, mapContactVmToApi } from './property-detail.mappers';
import { formValidation } from './property-detail.validations';
import { setPropertyValues } from './property-detail.helpers';
import { history } from '../../core/router';
import { onUpdateField, onSetError, onSetFormErrors, onSubmitForm } from '../../common/helpers';

//Inicializamos objeto
let contact = {
    email: '',
    message: '',
};

//Obtenemos parámetros
const params = history.getParams();

// LLamadas a la API y carga de detalles de la propiedad y equipamientos
Promise.all([
    getPropertyDetail(params.id), 
    getEquipmentDetail(),
]).then(([propertyDetail, equipmentList]) => {
    loadPropertyDetail(propertyDetail, equipmentList);
});

// Función para manejar la carga y visualización de los detalles de la propiedad.
const loadPropertyDetail = (propertyList, equipmentList) => {
    console.log(propertyList);
    const vmPropertyDetailList = mapPropertyDetailApiToVm(propertyList, equipmentList);
    setPropertyValues(vmPropertyDetailList);
};

// Función que escucha cambios en el campo de email y actualiza el objeto de contacto.
onUpdateField('email', event => {
    const value = event.target.value;
    contact = {
        ...contact,
        email: value,
    };

    formValidation.validateField('email', contact.email).then(result => {
        onSetError('email', result);
    });
});

// Función que escucha cambios en el campo de mensaje y actualiza el objeto de contacto.
onUpdateField('message', event => {
    const value = event.target.value;
    contact = {
        ...contact,
        message: value,
    };

    formValidation.validateField('message', contact.message).then(result => {
        onSetError('message', result);
    });
});

// Función que maneja el evento de envío del formulario de contacto.
onSubmitForm('contact-button', () => {
    formValidation.validateForm(contact).then(result => {
        onSetFormErrors(result);
        const apiContact = mapContactVmToApi(contact);
        
        if(result.succeeded) {
            insertMessage(apiContact).then(() => {
                history.back();
            });
        }
    });
});