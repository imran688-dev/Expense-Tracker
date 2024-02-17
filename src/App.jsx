import { useState } from 'react'
import './App.css'
import Expense from './Components/Expense'
import Header from './Components/Header'
import Filter from './Components/Filter';
import ExpenseForm from './Components/ExpenseForm';

function App() {
  const [expense, setExpense] = useState([
    {
      id: 1,
      category: "Utility",
      description: "Movie hold expense",
      amount: 50,
    },
    {
      id: 2,
      category: "Mango Bar",
      description: "Movie hold expense",
      amount: 100,
    },
    {
      id: 3,
      category: "Jusika Bazar",
      description: "Movie hold expense",
      amount: 150,
    },
    {
      id: 4,
      category: "Lut taraj",
      description: "Movie hold expense",
      amount: 200,
    },
    {
      id: 5,
      category: "Hatijil",
      description: "Movie hold expense",
      amount: 350,
    }
  ]);

  const deleteItem = (id) => {
    setExpense(expense.filter((e) => e.id != id));
  }

  // filter using category
  const [selectedCategory, setSelectedCategory] = useState("");

  const filterCategory = selectedCategory ? expense.filter((e) => e.category === selectedCategory) : expense;

  const addExpense = (newExpense) => {
    setExpense([...expense, { ...newExpense, id: expense.length + 1 }]);
  }


  return (
    <>
      <Header />
      <div className='max-w-[700px] mx-auto  p-4 mt-8'>
        <ExpenseForm addExpenses={addExpense} />
        <div className='max-w-[700px] mx-auto border-lime-400 border-2 p-4 rounded-xl mt-8'>
          <Filter onSelectCategory={(category) => setSelectedCategory(category)} />
          <Expense expenses={filterCategory} onDelete={deleteItem} />
        </div>
      </div>

    </>
  )
}



export default App
