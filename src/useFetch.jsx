
import { useState,useEffect } from "react";


const useFetch=(url)=>{

    const [data,setdata]=useState(null);
    const [dummy,setDummy]=useState(true);
    const [error,setError]=useState(null);


  useEffect(()=>{

            setTimeout(()=>{
             fetch(url)
            .then((response)=>{
                if(!response.ok){
                    throw Error("Could not retrive data");
                }
                console.log(response);
                return response.json();
            }).then(data=>setdata(data))
              .catch((error)=>{
                console.log(error.message);
                setError(error.message)
              })
            },1000)
         
        },[])

        return[data,dummy,error];

}

export default useFetch;