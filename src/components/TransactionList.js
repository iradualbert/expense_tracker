import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {

  const context = useContext(GlobalContext)
  const transactions = context.transactions;
  return (
    <>
      <h3>History</h3>
      {transactions.length ? 
        <ul id="list" className="list">
        {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
      </ul> : 
      <p>No Transaction Yet</p>}
      
    </>
    )
}

export default TransactionList;