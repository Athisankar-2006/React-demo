import CRS from "./assets/CRS.png"

function Course(props){

    return(

       props.name && <div className="cart">
                <img src={props.image} alt=""/>
                <h3>name : {props.name}</h3>
                <p> price : {props.price} </p>
                <p> rating : {props.rating} </p>
                
        </div>
    );
}

// Course.defaultProps={
//     name:"HTML",
//     price: "200 $",
//     image: CRS  
// }



export default Course;