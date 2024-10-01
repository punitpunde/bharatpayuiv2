import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <Navbar title="Ship-Shop"></Navbar>
      <div className="container-fluid mt-5 py-5 px-3 px-md-5">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
