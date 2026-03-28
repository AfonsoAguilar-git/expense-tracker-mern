import ExpenseItem from "./ExpenseItem"
import { CircleX } from "lucide-react"


function ExpenseList({expenses,handleDelete,handleEdit}){

    if(expenses.length === 0){
        return(
            <div className="h-screen text-neutral-400">
                <div className=" flex flex-col items-center justify-center h-full pb-40">
                    <CircleX size={100}/>
                    <p className="pt-10 text-xl">Looks like there is nothing here .... Try adding expenses</p>
                </div>
            </div>
        )
    }
    console.log(expenses)
    return(
    <div className="flex flex-col pb-30">
        <h1 className="text-3xl  text-yellow-300 text-center">Expenses</h1>
        <div className="grid grid-cols-4  mx-auto pl-5 pr-5">
        {expenses.map(expense => (
            <ExpenseItem   key={expense._id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit} />
        ))}
        </div>
    </div>
      
    )
}


export default ExpenseList