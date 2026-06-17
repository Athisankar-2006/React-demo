import CRS from "./assets/CRS.png"

function Course(props){

    function check(discount){
        console.log( props.name +"clicked ," +discount +"% discount")
    }

    return(

       props.name && <div className="cart">
                <img src={props.image} alt=""/>
                <h3>name : {props.name}</h3>
                <p> price : {props.price} </p>
                <button onClick={()=>check(20)}>click</button>
                
        </div>
    );
}

// Course.defaultProps={
//     name:"HTML",
//     price: "200 $",
//     image: CRS  
// }



export default Course;