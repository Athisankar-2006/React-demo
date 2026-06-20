import { useState,useEffect } from "react";
import Course from "./Course";
import useFetch from "./useFetch";

function CourseList(){
    
    const [courses,dummy,error]=useFetch('http://localhost:3000/courses')

      

        function deleteCourse(id){
        console.log(id);
        const newcourses=courses.filter(course =>course.id !==id);
        setcourses(newcourses);
    }


        // courses.sort((x,y)=> y.price-x.price);

    //    const filtercourse= courses.filter((course)=>course.price>300)

    if(!courses){
       return <>
       
       {!error && <img src="data/assets/loading.gif"></img>}
       {error && <p>{error}</p>}
       
       </>
    }

    const courselist=courses.map((course)=> 
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
//npx json-server --watch data/dummyData.json --port 3000 --static ./data