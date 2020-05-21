
import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
    return (
     <ul className="right">
         <li>
             <NavLink to="/">Signup</NavLink>
         </li>
         <li>
             <NavLink to="/">Login</NavLink>
         </li>
         {/* <li>
             <NavLink to="/" className="btn btn-floating pink lighten-1" >ES</NavLink>
         </li> */}
     </ul>
    );
}

export default SignedOutLinks;