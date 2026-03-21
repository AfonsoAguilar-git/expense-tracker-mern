import { useState } from "react"




function Form({addExpense}){
    const [amount ,setAmount] = useState("");
    const [description ,setDescription] = useState("");
    const [category ,setCategory] = useState("Food");
    async function handleSubmit(e){
        try{
        e.preventDefault();
        addExpense(amount,description,category)
        }catch(err){
            console.log(err);    
        }
        
    }

    return (
        <div>
            <h1>Add Expense</h1>
            <form onSubmit={handleSubmit}>
                <label>Amount</label>
                <input type="number" value={amount}  onChange={(e) => setAmount(e.target.value)} placeholder="insert amount"/>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="insert description"/>
                <label>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>Food</option>
                    <option>House</option>
                    <option>Work</option>
                </select>
                <input type="submit"/>
                
            </form>
        </div>
    )
}

export default Form