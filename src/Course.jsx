import CRS from "./assets/CRS.png"

function Course(props){

    return(

        <div className="cart">
                <img src={props.image} alt=""/>
                <h3>name : {props.name}</h3>
                <p> price : {props.price} </p>
                
        </div>
    );
}

Course.defaultProps={
    name:"HTML",
    price: "200 $",
    image: CRS
    
}



export default Course;