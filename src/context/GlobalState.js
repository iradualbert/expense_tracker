import React, { createContext, useReducer } from 'react';

// initial state

const initialState = {

    transactions: []
}

// create context
export const GlobalContext = createContext(initialState)


// App reducer
const AppReducer = (state, action) => {
    switch (action.type) {   
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            } 
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default:
            return state
    }
}

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    } 
    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction: deleteTransaction,
            addTransaction: addTransaction,

        }}>
            {children}
        </GlobalContext.Provider>
    )
}


