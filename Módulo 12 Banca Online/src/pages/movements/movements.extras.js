export const getAllBalance = (accountList) =>
  accountList.reduce((totalBalance, account) => totalBalance + account.balance, 0);

export const getAllAlias = (accountList) =>
  accountList.map(account => account.name).join(' / ');
