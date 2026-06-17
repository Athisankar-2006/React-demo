import Course from "./Course";
import Student from "./student";
import CRS from "./assets/CRS.png"
function App(){
  return(

    <>
    
    <Course image={CRS} name="python " price="500 $"/>
    <Course  name="Java " price="200 $"/>
    <Course image={CRS}  />
   
    </>
  );
}

export default App;