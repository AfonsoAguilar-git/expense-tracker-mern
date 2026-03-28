import useExpenses from "./hooks/useExpenses"
import Form from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import EditModal from "./components/EditModal"
import { useState } from "react"


function App() {
  
  const { expenses, loading, error, total, handleDelete, updateExpense ,addExpense} = useExpenses()
  const [currentView, setCurrentView] = useState("expenses");
  const [isModalOpen,setModal] = useState(false)
  const [selectedExpense, setSelectedExpense] = useState(null)

  function handleEdit(expense) {
    setSelectedExpense(expense)
    setModal(true)
  }

  function handleCloseModal() {
    setModal(false)
    setSelectedExpense(null)
}

  
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
          <h2 className="text-3xl font-bold" >Expense Tracker</h2>
        </div>
      </nav>
        <div className="flex h-full">
          <div className="bg-neutral-800 h-full w-70 border-r-1 border-yellow-100 text-center text-yellow-300">
            <h3 className="text-2xl mt-2 m-4" >Menu</h3>
            <div className="flex flex-col mt-20 text-xl">
              <button onClick={() => setCurrentView("expenses")} className={`p-5 border-t-2 border-b-2 rounded-lg m-2 transition-all duration-300 ease-in-out ${currentView === "expenses" 
                  ? "border-yellow-300" 
                  : "border-transparent hover:bg-neutral-200 hover:text-yellow-900"}`}>View Expenses</button>
              <button  onClick={()=> setCurrentView("add")} className={` p-5 border-t-2 border-b-2 rounded-lg m-2 transition-all duration-300 ease-in-out ${currentView === "add"
                  ? "border-yellow-300"
                  : "border-transparent hover:bg-neutral-200 hover:text-yellow-900"

              }`}>Add Expense</button>
            </div>
            <div className="mt-50">
              <h4 className="font-bold text-lg">Total Money Spent</h4>
              <p className="mt-3">{total[0]?.total}$</p>
            </div>

          </div>
          {isModalOpen && <EditModal selectedExpense={selectedExpense} handleCloseModal={handleCloseModal} updateExpense={updateExpense}/>}
          <main className="bg-neutral-800 w-screen overflow-y-auto pattern-bg">
            {currentView === "expenses" && <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} />}
            {currentView === "add" && <Form addExpense={addExpense} />}
          </main>
        </div>
    </div>
  )


  
}

export default App
