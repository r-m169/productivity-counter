import './App.css'
import { useState } from 'react'
import CounterContext from './context/CounterContext'
import Heading from './components/Heading'
import CounterList from './components/CounterList'
const productivityList = [
  {
      id: "123",
      title: "Pages studied this month",
      count: 0,
  },
  {
      id: "456",
      title: "Projects created this month",
      count: 0,
  },
  {
      id: "789",
      title: "TV shows skipped this month",
      count: 0,
  },
]
function App() {

  const [counters, setCounters] = useState(productivityList);
  return (
    <>
      <CounterContext.Provider value={{counters , setCounters}}>
        <Heading />
        <CounterList/>
      </CounterContext.Provider>
    </>
  )
}

export default App
