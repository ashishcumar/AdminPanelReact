import React from "react";
import AccountsCss from "./Accounts.module.css";


export const DetailsCard4Select = () => {
  return (
  
    <div className={AccountsCss.Avatar_SettingsDiv}>
 <div className={AccountsCss.imgContainer}>
   <h2> Change Avatar </h2>
   <img 
     className={AccountsCss.img}
     src="https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png"
     alt="userImg"
   />
   <button className={AccountsCss.uploadBtn}>UPLOAD NEW PHOTO</button>
 </div>
 <div className={AccountsCss.settingContainer}>
   <h2> Account Settings </h2>
   <div className={AccountsCss.inputContainer}>
     <div className={AccountsCss.inputBox}>
       <p>Account Name</p>
       <input type="text" />
     </div>
     <div className={AccountsCss.inputBox}>
       <p>Account Email</p>
       <input type="text" />
     </div>
     <div className={AccountsCss.inputBox}>
       <p>Password</p>
       <input type="password" />
     </div>
     <div className={AccountsCss.inputBox}>
       <p>Re-enter Password</p>
       <input type="password" />
     </div>
     <div className={AccountsCss.inputBox}>
       <p>Phone</p>
       <input type="text" />
     </div>
     <div className={AccountsCss.inputBox} id={AccountsCss.updateBtn}>
       <button className={AccountsCss.updateProfileBtn}>
         UPDATE YOUR PROFILE
       </button>
     </div>
   </div>
   <button className={AccountsCss.deleteBtn}>
     DELETE YOUR ACCOUNT
   </button>
 </div>
 </div>
  )
}
