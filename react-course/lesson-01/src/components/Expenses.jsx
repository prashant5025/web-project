import React from 'react'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
    
    return (
        <>
            {
                props.items.map((expense) => {
                    return <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                })
            }
        </>
    )
}

export default Expenses