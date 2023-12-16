const mapMovementFromApiToViewModel = (movement) => ({
    ...movement,
    balance: `${movement.balance} €`,
    amount: `${movement.amount} €`,
    transaction: new Date(movement.transaction).toLocaleDateString(),
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
  });
  
  export const mapMovementListFromApiToViewModel = (movements) =>
    movements.map(mapMovementFromApiToViewModel);
  