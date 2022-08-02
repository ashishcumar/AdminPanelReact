import React, { useEffect, useState } from "react";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import { FaRegUser, FaBars } from "react-icons/fa";
import NavCss from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = (prop) => {
  const [miniMenu, setMiniMenu] = useState(false);
  const navigate = useNavigate();
  
  const logoutFunction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/loginPage");
  };


  return (
    <>
      <header>
        <nav>
          <div className={NavCss.nav_Left}>PRODUCT ADMIN</div>
          <div className={NavCss.nav_Right}>
            
            <Link to="/" className={NavCss.link} >
              <div className={NavCss.nav_RightDiv} style={prop.porps.dashb} >
                <BsSpeedometer2 className={NavCss.nav_CenterIcon} />
                <p > DashBoard </p>
              </div>
            </Link>

            <Link to="/Products" className={NavCss.link} >              
              <div className={NavCss.nav_RightDiv} style={prop.porps.prod}>
                <IoMdCart className={NavCss.nav_CenterIcon} />
                <p> Products </p>
              </div>
            </Link>

            <Link to="/Accounts" className={NavCss.link}>              
              <div className={NavCss.nav_RightDiv} style={prop.porps.acc}>
                <FaRegUser className={NavCss.nav_CenterIcon} />
                <p> Accounts </p>
              </div>
            </Link>
          </div>

          <div className={NavCss.nav_cornerDiv}>
            <Link
              to="/LoginPage"
              className={NavCss.link}
              onClick={logoutFunction}
            >
              
              Admin,Logout
            </Link>
          </div>
          <div
            className={NavCss.nav_RightDivSc}
            onClick={() => {
              setMiniMenu(!miniMenu);
              console.log(miniMenu);
            }}
          >
            <FaBars />
            {miniMenu ? (
              <div className={NavCss.nav_RightDivtoggelMenu}>
                <p>
                  <BsSpeedometer2 className={NavCss.nav_toggelMenuIcon} />
                  <Link to="/" className={NavCss.link}>
                    
                    Dashboard
                  </Link>
                </p>
                <p>
                  <FaRegUser className={NavCss.nav_toggelMenuIcon} />
                  <Link to="/Products" className={NavCss.link}>
                    
                    Products
                  </Link>
                </p>
                <p>
                  <IoMdCart className={NavCss.nav_toggelMenuIcon} />
                  <Link to="/Accounts" className={NavCss.link}>
                    
                    Accounts
                  </Link>
                </p>
                <Link
                  to="/LoginPage"
                  className={NavCss.link}
                  onClick={logoutFunction}
                >
                  
                  <p>Admin,Logout</p>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
