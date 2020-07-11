import React from 'react';
import './App.css';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from  "./components/TransactionList";
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
