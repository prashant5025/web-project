import React from 'react'
import Card from './Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
    
    return (
        <Card className='expenses'>
            {
                props.items.map((expense) => {
                    return <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                })
            }
        </Card>
    )
}

export default Expenses