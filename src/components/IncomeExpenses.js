import React, {useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)
    const income = transactions.filter( trans => trans.amount > 0)
    const incomeTotal = income.reduce((currentTotal, income) => {
        return currentTotal + income.amount}, 0)

    const expense = transactions.filter( trans => trans.amount < 0)
    const expenseTotal = expense.reduce((currentTotal, expense) => {
        return currentTotal + expense.amount
    }, 0)
    return (
        <div className="income-expenses-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${incomeTotal.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">-${Math.abs(expenseTotal).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses;