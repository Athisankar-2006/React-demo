import { useState } from "react";
import CRS from "./assets/CRS.png"

function Course(props){
    // let purchased=false;
    const [purchased,setPurchased] =useState(false);
    const [amount,setamount]=useState(props.price);

    function check(discount){
        console.log( props.name +"clicked ," +discount +"% discount");
        setPurchased(true);
        setamount(amount-discount);
    }

    return(

       props.name && <div className="cart">
                <img src={props.image} alt=""/>
                <h3>name : {props.name}</h3>
                <p> {amount} </p>
                <button onClick={()=>check(20)}>discount</button>
                <button onClick={()=>props.delete(props.id)}>Delete</button>
                <p>{purchased ? "Already purchased" :"get it now"}</p>
                
        </div>
    );
}

// Course.defaultProps={
//     name:"HTML",
//     price: "200 $",
//     image: CRS  
// }



export default Course;