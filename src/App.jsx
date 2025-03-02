import { BrowserRouter, Routes, Route } from "react-router";

import './App.css'
import Todo from './pages/todo-list'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
