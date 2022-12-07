import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from '../Features/ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
    
    return (
        <Card className='expenses'>
            {
                props.items.map((expense,key) => {
                    return <ExpenseItem
                        key={expense.id}
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