import { useEffect,useState } from "react";
const Counter =() => {
    const[count,setCount] =useState(0);

    useEffect(()=>{
        if (count!==0 && count %3===0){
            alert(`The current number {count} is divisble by 3`);
         }
        },[count]);
        return(
            <div  style={{color:"purple", padding:"20px",fontSize:"15px"}}>
                <h1> Counter Application</h1>
                <p> Count:--{count}</p>
                <button onClick={() => setCount(count +1)}>
                    Increase
                </button>
            </div>
        );
};
export default Counter;

