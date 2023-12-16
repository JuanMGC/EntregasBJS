import { history } from '../../core/router';
import { onSetValues } from '../../common/helpers';
import { addMovementRows } from './movements.helpers';
import { getAllMovements, getMovementsAccount } from './movements.api';
import { mapMovementListFromApiToViewModel } from './movements.mappers';
import { getAllAlias, getAllBalance } from './movements.extras';
import { mapAccountFromApiToViewModel } from '../account/account.mappers';
import { getAccount } from '../account/account.api';
import { getAccountList } from '../account-list/account-list.api';

// Obtener los parámetros de la historia de la aplicación 
const params = history.getParams();

// Determinar si el código está en modo de edición según la presencia del parámetro 'id' en los parámetros
const isEditMode = Boolean(params.id);

// Definir la función que se utilizará para obtener movimientos según el modo de edición
const getMovements = isEditMode ? getMovementsAccount : getAllMovements;

// Función para manejar el modo de edición
const handleEditMode = () => {
  // Obtener la cuenta según el 'id' proporcionado en los parámetros
  return getAccount(params.id)
    .then(apiAccount => {
      // Mapear la cuenta obtenida desde la API al formato de vista
      const account = mapAccountFromApiToViewModel(apiAccount);
      onSetValues(account);
      console.log(account);
    });
};

// Función para manejar el modo no edición
const handleNonEditMode = () => {
  return getAccountList()
    .then(accountList => {
      // Crear un objeto que representa todas las cuentas con información resumida
      const allAccounts = {
        iban: 'Todas las cuentas',
        alias: getAllAlias(accountList),
        balance: getAllBalance(accountList),
      };
      onSetValues(allAccounts);
    });
};

// Función para manejar la obtención y procesamiento de movimientos
const handleMovements = () => {
  // Obtener los movimientos según el modo de edición
  return getMovements(params.id)
    .then(movements => {
      // Mapear los movimientos obtenidos desde la API al formato de vista
      const viewModelMovements = mapMovementListFromApiToViewModel(movements);
      addMovementRows(viewModelMovements);
    });
};


if (isEditMode) {
  handleEditMode().then(handleMovements);
} else {
  handleNonEditMode().then(handleMovements);
}
