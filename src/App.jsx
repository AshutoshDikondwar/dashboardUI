import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Product from './components/Product'
import Chart from './components/Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Sidebar />
        <div>
          <Navbar />
          <Card />
          <Chart/>
          <Product/>
        </div>
      </div>

    </>
  )
}

export default App
