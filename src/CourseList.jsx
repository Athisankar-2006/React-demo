import CRS from "./assets/CRS.png";
import Course from "./Course";

function CourseList(){

    const courses=[
            {
                id:1,
                image:CRS,
                 name:"python ",
                  price:"500 $",
                  rating:5
                
            },

             {
                id:2,
                image:CRS,
                 name:"react ",
                  price:"500 $",
                  rating:3
                
            },

             {
                id:3,
                image:CRS,
                 name:"java ",
                  price:"500 $",
                  rating:5
            },
              {
                id:4,
                image:CRS,
                 name:"ml ",
                  price:"200$",
                  rating:4

                
            }

        ]

    const courselist=courses.map((course,index)=> 
    <Course  key={index} 
    image={course.image} 
    name={course.name} 
    price={course.price}
   rating={course.rating} /> )

    return(

        <>
        {courselist}
        </>
    );
}


export default CourseList;