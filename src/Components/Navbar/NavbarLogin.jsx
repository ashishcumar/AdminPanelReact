import React, { useState } from "react";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import { FaRegUser, FaBars } from "react-icons/fa";
import NavCss from "./Navbar.module.css";
import {Link} from 'react-router-dom'

export const NavbarLogin = () => {
  const [miniMenu, setMiniMenu] = useState(false);


  return (
    <>
      <header>
        <nav>
          <div className={NavCss.nav_Left}>
           PRODUCT ADMIN
            </div>
          <div className={NavCss.nav_Right}>
           <div className={NavCss.nav_RightDiv} >
              <BsSpeedometer2 className={NavCss.nav_CenterIcon} />
                <p> DashBoard </p> 
            </div>

            <div className={NavCss.nav_RightDiv} >
              <IoMdCart className={NavCss.nav_CenterIcon} />
             <p> Products </p> 
            </div> 

             <div className={NavCss.nav_RightDiv}  >
              <FaRegUser className={NavCss.nav_CenterIcon} />
              <p> Accounts </p> 
            </div>


          </div>

          
          <div className={NavCss.nav_cornerDiv}>
              <Link to='/LoginPage' className={NavCss.link}> Admin,Logout </Link> 
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
                  <BsSpeedometer2 className={NavCss.nav_toggelMenuIcon} />{" "}
                  Dashboard
                </p>
                <p>
                  <FaRegUser className={NavCss.nav_toggelMenuIcon} /> 
                    Products
                </p>
                <p>
                  <IoMdCart className={NavCss.nav_toggelMenuIcon} /> Accounts
                </p>
                   <p>Admin,Logout</p> 
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
