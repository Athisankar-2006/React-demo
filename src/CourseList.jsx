import { useState } from "react";
import CRS from "./assets/CRS.png";
import Course from "./Course";

function CourseList(){



    
    const [courses,setcourses]=useState([
            {
                id:1,
                image:CRS,
                 name:"python ",
                  price:780,
                  rating:5
                
            },

             {
                id:2,
                image:CRS,
                 name:"react ",
                  price:350,
                  rating:3
                
            },

             {
                id:3,
                image:CRS,
                 name:"java ",
                  price:400,
                  rating:5
            },
              {
                id:4,
                image:CRS,
                 name:"ml ",
                  price:200,
                  rating:4

                
            }

        ]);


        function deleteCourse(id){
        console.log(id);
        const newcourses=courses.filter(course =>course.id !==id);
        setcourses(newcourses);
    }


        courses.sort((x,y)=> y.price-x.price);

       const filtercourse= courses.filter((course)=>course.price>300)

    const courselist=filtercourse.map((course)=> 
    <Course  key={course.id} 
    image={course.image} 
    name={course.name} 
    price={course.price}
   rating={course.rating} 
   delete={ deleteCourse}
   id={course.id}/> 
)

    return(

        <>
        {courselist}
        </>
    );
}


export default CourseList;