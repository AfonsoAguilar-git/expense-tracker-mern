import { useEffect, useState } from "react"


function useExpenses(){
    const [expenses, setExpenses] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [total, setTotal] = useState()

    useEffect(()=>{
    async function fetchExpense(){
      try{
        let response = await fetch("http://localhost:3000/expenses")
        const data = await response.json();
        let response_total = await fetch("http://localhost:3000/expenses/total")
        const data_total = await response_total.json();
        setExpenses(data);
        setTotal(data_total)
        setLoading(false);
      }catch(err){
        setError(err);
        setLoading(false);
      }
    }
    fetchExpense();
  },[])


    async function handleDelete(id){
      try{
        let response = await fetch(`http://localhost:3000/expenses/${id}`,{method:"DELETE"})
        const data = expenses.filter(expense =>{
          return id != expense._id;
        });
        
        setExpenses(data);
        setLoading(false);

      } catch(err){
        setError(err);
        setLoading(false);
      }
  }
  
    async function addExpense(amount,description,category){
        try {
        const response = await fetch("http://localhost:3000/expenses",
            {
                headers:{
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({amount: Number(amount),description,category})
            })
            const data = await response.json();
            setExpenses(prev => [...prev,data]);
            let response_total = await fetch("http://localhost:3000/expenses/total")
            const data_total = await response_total.json();
            setTotal(data_total)
        }catch(err){
            setError(err);
            
        }
  
    }

    async function updateExpense(id,amount,description,category){
      try{
       await fetch(`http://localhost:3000/expenses/${id}`,{
                headers:{
                    "Content-Type": "application/json"
                },
                method: "PATCH",
                body: JSON.stringify({amount: Number(amount),description,category})
            })
        
        const refreshResponse = await fetch("http://localhost:3000/expenses")
        const refreshData = await refreshResponse.json()
        setExpenses(refreshData)
        let response_total = await fetch("http://localhost:3000/expenses/total")
        const data_total = await response_total.json();
        setTotal(data_total)
       
      }catch(err){
        setError(err)
      }

    }

    return{expenses,loading,error,total,updateExpense,handleDelete, addExpense}



}





export default useExpenses