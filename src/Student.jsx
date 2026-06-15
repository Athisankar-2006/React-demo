import { useState } from "react";

// import (useState)

function Student(props){
 

    const [count ,setcount]=useState(0);

      function sum(){
        setcount(count+1);
      }

    return(

        <>
          
           <h1>{props.car}</h1>
           <button>click</button>

           <p>count :{count}</p>
           <button onClick={sum}>click</button>
        </>

);
}

export default Student;