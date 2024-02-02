import Role from  "./Role"
import Hero from "./Hero";
import Services from "./Services";
import CreateCourse from "./CreateCourse";
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
const userTypeFromStorage = localStorage.getItem('userType');
const Home =()=>{
  
    return(
        <>
        <div>
                {/* <Hero></Hero> */}
                {/* {(isLoggedIn && userTypeFromStorage==='user') ? <Services></Services> :<></>} */}
                {/* <Role></Role> */}
                <CreateCourse/>
        </div>

        </>
    )
}

export default Home;