import { useState } from "react"

function App() {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  return (
    <div>
      <h1>Expense Tracker</h1>
    </div>
  )
}

export default App