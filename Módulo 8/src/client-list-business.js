
import * as GetClient from "./data-business";
import * as ClientElement from "./client-business";

function printClientsAccounts() {
    const clients = GetClient.getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
      const element = ClientElement.getClientElement(client);
      ul.appendChild(element);
    }
  
    document.getElementById("root").appendChild(ul);
}
export { printClientsAccounts };