import Hello from "@/components/Hello";
import Counter from "@/components/Counter"
export default function Home() {
  return (
<div>
  <h2>React Next.js Applicaiton</h2>
  <Hello message="Hello React" color="blue"/>
    <Hello message="Hello Next js" color="green"/>
    
    <Counter count ={5}/>
    <Counter count ={12}/>

</div>
  );
}

//this is aso correct-
// import welcome from "@/components/Hello";

// export default function Home() {
//   return (
// <div>
//   <h2>React Next.js Applicaiton</h2>
//   <welcome/>
// </div>
//   );
// }

//type of component based of coding functional and class
//type od components {based on rendering} : client-side and server-side rendering 
  //IN Next js default rendering is Always SSR(server side rendering)
  //react component props:parameterize a component
//                        Passing data from parent to chide and child to parent