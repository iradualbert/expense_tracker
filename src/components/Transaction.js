import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction: { text, amount, id } }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const handleClick = (event) => {
    event.preventDefault();
    deleteTransaction(id);
  }
  return (
    <>
      <li className={amount >= 0 ? "plus" : "minus"}>
        {text} <span>{amount < 0 ? "-" : "+"}${Math.abs(amount)}</span>
        <button className="delete-btn" onClick={handleClick}>X</button>
      </li>
    </>
  )
}

export default Transaction;