import React, { useContext } from 'react'
import CountersContext from '../context/CounterContext';
import Counter from './Counter';

const CounterList = () => {
    const {counters} = useContext(CountersContext);
  return (
    <div className='counters-list'>
        {counters.map(counter=>(
                <Counter key={counter.id} counter={counter} />

        ))}
    </div>
  )
}

export default CounterList