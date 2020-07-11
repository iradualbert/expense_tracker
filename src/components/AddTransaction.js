import React, { useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalState'
function  generateId () {
    return `${new Date()}-${Math.random()}`
}

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext)
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)
    const handleSubmit = (event) => {
        event.preventDefault()
        if(!text || !amount){
            alert('Text and Amount are all required!')
            return 
        }
        else{
            // add the new transaction to the list
            addTransaction({ id: generateId(), text: text, amount: parseFloat(amount) })
            // console.log({ id: generateId(), text: text, amount: parseFloat(amount) })
            setText("")
            setAmount(0)
            return 
        }
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={handleSubmit}><div className="form-control">
                <label htmlFor="text">Text</label>
                <input
                    type="text"
                    placeholder="Enter name of the transaction"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    />
                </div>
                <button className="btn" type="submit">Add Transaction</button></form>
        </>
    )
}


export default AddTransaction