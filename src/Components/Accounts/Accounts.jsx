import React,{useEffect, useState} from "react";
import AccountsCss from "./Accounts.module.css";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { DetailsCard } from "./DetailsCard";
import { DetailsCard4Select } from "./DetailsCard4Select";
import { useNavigate } from "react-router-dom";

export const Accounts = () => {

    let accountData = JSON.parse(localStorage.getItem("accountData"))
    const [AccountName,setAccountName] = useState('Select Account')
    const navigate = useNavigate()


   useEffect(()=>{
    if(!localStorage.getItem('loginStatus')){
      navigate('/loginPage')
    } 
   })

   
   
    const dash = {
      dashb:{
        backgroundColor:"",
        color:"" 
      },
      prod:{
        backgroundColor:"",
        color:"" 
      },
      acc:{
        backgroundColor:" #F5A623",
        color:"white"
      }
     }
   

   useEffect(()=>{
    console.log(AccountName)
   },[AccountName])
   


  return (
    <>
      <Navbar porps={dash} />
      <div className={AccountsCss.AccountPagecontainer}>
        <div className={AccountsCss.AccountListDiv}>
          <h2> List of Accounts </h2>
          <p> Accounts </p>
          <select onClick={(e) => setAccountName(e.target.value)}>
            <option key={"Select Account"}> Select Account </option>
            <option key={"Editor"}>Editor</option>
            <option key={"Merchant"}>Merchant</option>
            <option key={"Customer"}>Customer</option>
            <option key={"Admin"}>Admin</option>
          </select>
        </div>


{
  AccountName === "Select Account" ? <DetailsCard4Select /> 
  : Object.keys(accountData).map((item) =>{  
      if(item === AccountName){
        return (
               <DetailsCard props={accountData[item]} name={AccountName}  />
        )
      }
})
}
      </div>
      <Footer />
    </>
  );
};
