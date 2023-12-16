import {getAccountList}   from './account-list.api';
import {addAccountRows} from './account-list.helpers';
import {mapAccountListFromApiToViewModel} from './account-list.mappers'
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';
/*{
  Account  {
        "id": "1", (string)
        "iban": "ES91 2100 0418 4502 0005 1332", (string)
        "name": "Gastos mes",   (string)
        "balance": 1490, (de number a string + simbolo de Euro)
        "lastTransaction": "2019-12-09T21:30:00" ( string formato -> DD/MM/YYYY)
      },
*/

getAccountList().then(accountList => {
    const viewModelAccountList = mapAccountListFromApiToViewModel (accountList);
    addAccountRows(viewModelAccountList);


    viewModelAccountList.forEach((account) => {
        onUpdateField(`select-${account.id}`, (event) => {
        const route = event.target.value;
        history.push(route);
    });
   });
});
