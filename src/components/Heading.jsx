import React, { useContext } from 'react'
import CountersContext from '../context/CounterContext'

const Heading = () => {
    const {counters} = useContext(CountersContext);
    const getTotalCount = () => {
        return counters.reduce((total, counter) => total + counter.count, 0)
    }

  return (
    <div>
       <h1>Productivity Points: {getTotalCount()}</h1> 
        </div>
  )
}

export default Heading