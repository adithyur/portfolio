import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    function decrement() {
        if(count>0){
            setCount(count-1);
        }
    }

    function increment() {
        setCount(count+1);
    }


  return (
    <div>
        <div>
            <button onClick={decrement}>
                decrement
            </button>
            <p>
                {count}
            </p>
            <button onClick={increment}>
                increment
            </button>
        </div>

    </div>
  )
}

export default Counter