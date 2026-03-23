'use client'

type CounterProps = {
    count: number;
}

export default function Counter(props: CounterProps) {
    let count=props.count;
    function inc(){
        console.log("incrementing counter...")
        count++;
    }
    
    return (
    <div>
        <h4>Count:{props.count}</h4>
        <div>
            <button onClick={inc}>++</button> &nbsp;
            <button>--</button>
        </div>
    </div>
    )
}