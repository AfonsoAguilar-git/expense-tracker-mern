import useExpenses from "./hooks/useExpenses"
import Form from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import { useState } from "react"


function App() {
  
  const { expenses, loading, error, handleDelete ,addExpense} = useExpenses()
  const [currentView, setCurrentView] = useState("expenses");

  if (loading) return (
    <div>
      <p>loading ....</p>
    </div>
  )
  if (error) return (
    <div>
      <h1>Error: {error} </h1>
    </div>
  )
  if (expenses) return (
    <div className="bg-neutral-900 h-screen text-neutral-200">
      <nav className="h-24 bg-neutral-800 border-b-1 border-yellow-100 text-yellow-300 flex" >
        <div className="flex items-center ml-5 mb-3">
          <h2 className="text-3xl" >Espense Tracker</h2>
        </div>
      </nav>
        <div className="flex h-full">
          <div className="bg-neutral-800 h-full w-70 border-r-1 border-yellow-100 text-center text-yellow-300">
            <h3 className="text-2xl mt-2 m-4" >Menu</h3>
            <div className="flex flex-col mt-20 text-xl">
              <button  onClick={() => setCurrentView("expenses")} className=" p-5 border-t-2 border-b-2 rounded-lg m-2 border-transparent focus:border-yellow-300 hover:bg-neutral-200 hover:text-yellow-900 hover:rounded-lg transition-all duration-300 ease-in-out" >View Expenses</button>
              <button  onClick={()=> setCurrentView("add")} className=" p-5 border-t-2 border-b-2 rounded-lg m-2 border-transparent focus:border-yellow-300 hover:bg-neutral-200  hover:text-yellow-900 hover:rounded-lg transition-all duration-300 ease-in-out">Add Expense</button>
            </div>
            <div className="mt-50">
              <h4>Total Money Spent</h4>
              <p>(money spent display)</p>
            </div>

          </div>
          <main className="bg-neutral-600 w-screen">
            {currentView === "expenses" && <ExpenseList expenses={expenses} handleDelete={handleDelete}/>}
            {currentView === "add" && <Form addExpense={addExpense} />}
          </main>
        </div>
    </div>
  )


  
}

export default App
