import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ToDoList from "./Pages/ToDoList/ToDoList.jsx"
import HomePage from './Pages/HomePage/HomePage.jsx'
import ShoppingList from "./Pages/ShoppingList/ShoppingList.jsx"
import BMICalculator from "./Pages/BMICalculator/BMICalculator.jsx"
import ColorPicker from "./Pages/ColorPicker/ColorPicker.jsx"
import Counter from "./Pages/Counter/Counter.jsx"
import Notes from "./Pages/Notes/Notes.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/todolist' element={<ToDoList/>}/>
            <Route path='/shoppinglist' element={<ShoppingList/>}/>
            <Route path='/bmicalculator' element={<BMICalculator/>}/>
            <Route path='/colorpicker' element={<ColorPicker/>} />
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/notes' element={<Notes/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
