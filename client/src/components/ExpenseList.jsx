import ExpenseItem from "./ExpenseItem"


function ExpenseList({expenses,handleDelete}){

    return(
    <div>

        <h1 className="text-3xl font-bold text-blue-500">Expense Tracker</h1>
        {expenses.map(expense => (
            <ExpenseItem  key={expense._id} expense={expense} handleDelete={handleDelete}/>
        ))}

    </div>
      
    )
}


export default ExpenseList