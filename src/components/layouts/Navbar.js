import React from "react";
import { Link } from "react-router-dom";
import  SignedInLinks  from "./SignedInLinks";
import SignedOutLinks from "./SingedOutLinks";
import mario from '../../img/mario-logo.png'


const Navbar = () => {

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    <img className="m1" style={{margin:5}} src={mario} width="45" alt="" srcset=""/>
                </Link>
              <SignedInLinks/>
              <SignedOutLinks/>
            </div>
        </nav>
    );
}

export default Navbar;