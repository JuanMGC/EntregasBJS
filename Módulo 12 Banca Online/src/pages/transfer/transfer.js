import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { history } from '../../core/router';
import { setAccountOptions } from './transfer.helpers';
import { formularyValidation } from './transfer.validators';
import {mapTransferFromDateNumToDate, mapTransferFromViewModelToApi} from './transfer.mappers';
import { insertTransfer } from './transfer.api';
import { getAccountList } from '../account-list/account-list.api';

const params = history.getParams();

let transferFormObject = {
  'select-account': '',
  iban: '',
  name: '',
  amount: undefined,
  concept: '',
  notes: '',
  date: { day: '', month: '', year: '', date: new Date() },
  email: '',
};

// Obtenemos la lista de cuentas y configuramos las opciones del campo de selección de cuenta
getAccountList().then((accountList) => {
  transferFormObject['select-account'] = params.id;
  setAccountOptions(accountList, params.id);
});

// Función genérica para actualizar campos y manejar la validación
const updateField = (fieldName, value) => {
  transferFormObject = { ...transferFormObject, [fieldName]: value };

  formularyValidation.validateField(fieldName, transferFormObject[fieldName]).then((result) => {
      onSetError(fieldName, result);
  });
};

// Función específica para manejar la actualización de campos de fecha
const updateDateField = (field, value) => {
  transferFormObject = {
      ...transferFormObject,
      date: {
          ...transferFormObject.date,
          [field]: value,
          date: mapTransferFromDateNumToDate(transferFormObject),
      },
  };

  // Validamos el campo de fecha
  formularyValidation.validateField('date', transferFormObject.date.date).then((result) => {
      onSetError('date', result);
  });
};

// Asociamos las funciones de actualización a los eventos correspondientes recorriendo un array para cada tipo de campo, los que tienen fecha y los que no
const fieldNames = ['select-account', 'iban', 'name', 'amount', 'concept', 'notes', 'email'];

fieldNames.forEach(fieldName => {
  onUpdateField(fieldName, event => updateField(fieldName, event.target.value));
});

['day', 'month', 'year'].forEach(fieldName => {
  onUpdateField(fieldName, event => updateDateField(fieldName, event.target.value));
});


// Manejador del evento de envío del formulario
onSubmitForm('transfer-button', () => {
  const apiTransfer = mapTransferFromViewModelToApi(transferFormObject);

  // Validamos el formulario completo
  formularyValidation.validateForm(apiTransfer).then((result) => {
      // Mostramos los errores en el formulario
      onSetFormErrors(result);
      console.log('transfer', apiTransfer);
      
      // Si la validación está ok, realizamos la transferencia
      if (result.succeeded) {
          insertTransfer(apiTransfer)
              .then(() => history.back())
              .catch((response) => console.log(response.data));
      }
  });
});
