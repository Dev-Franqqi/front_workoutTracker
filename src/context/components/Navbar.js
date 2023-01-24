import { Link } from "react-router-dom";
import {useLogout} from "./customHook/useLogout";
import useAuthContext from "./customHook/useAuthContext"
const Navbar = () => {

    const {user} = useAuthContext();
    
    const {logout} = useLogout();


    const handleClick = ()=>{
        logout();
        console.log("logged out")



    }


    
    return ( 
        <header>
        <div className="container">
          <Link to="/">
            <h1>Workout Buddy</h1>
          </Link>
          <nav>
            {user && <span> {user.email}<button onClick={handleClick}>
                Logout
            </button>
            </span>
}
          

        {!user &&  <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>}

           
          </nav>
        </div>
      </header>
    )
  }
 
export default Navbar;