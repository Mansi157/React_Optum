'use client'
import {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react'
type CounterProps = {
    count: number;
}

export default function Counter(props: CounterProps) {
    ///let count=props.count;
    const [count,setCount]=useState(props.count);
    const inputRef=useRef<HTMLInputElement>(null);
    function inc(){
        console.log("incrementing counter...")
        setCount(count+1);
    }
    
    function handleChange(evt:ChangeEvent<HTMLInputElement>){
     setCount(evt.target.valueAsNumber);
    }
    return (
    <div>
        <h4>Count:{props.count}</h4>
        <div>
            <button onClick={inc}>++</button> &nbsp;
            <button onClick={()=> setCount(count-1)}>--</button>
        </div>
<br />
        <div>
            <input type="number" value={count} onChange={handleChange}/>
        </div>

        <div>
          <input ref={inputRef} type="number" placeholder="Enter the number"/> &nbsp;
          <button onClick={()=>(inputRef.current?.valueAsNumber || 0)}>updatecount </button>

        </div>
    </div>
    );
}
