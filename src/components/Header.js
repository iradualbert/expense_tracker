import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const total = transactions.reduce((currentTotal, trans) => {
        return trans.amount + currentTotal
    }, 0)
    const sign = total < 0 ? "-" : "+"

    return (
        <>
            <h4>Your Balance</h4>
            <h1>{sign}${Math.abs(total).toFixed(2)}</h1>
        </>
    )
}

export default Balance;