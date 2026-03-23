'use client'

type HelloProps={
    message:string,
    color:string
}
//to make it optional add '?'
export default function Hello(props:HelloProps){
    console.log("rendering Hello...",props);
    return (
        <div>
            <h4 style={{color:props.color}}>{props.message} </h4>
            <p>This is a simple component function</p>
            <p>Generate at:{new Date().toLocaleString()}</p>
        </div>
    )
}