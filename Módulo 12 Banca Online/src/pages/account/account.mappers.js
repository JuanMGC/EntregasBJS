export const mapAccountFromApiToViewModel = account => {
    return {
      ...account,
      alias: account.name,
    };
  };
  
  export const mapAccountFromViewModeltoApi = account => {
    return {
      ...account,
      name: account.alias,
    };
  };