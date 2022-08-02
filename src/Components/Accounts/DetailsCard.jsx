import React,{useEffect, useState} from "react";
import AccountsCss from "./Accounts.module.css";


export const DetailsCard = (item) => {

    const [name,setName] = useState(item.props.name)
    const [email,setEmail] = useState(item.props.email)
    const [profilePic,setprofilePic] = useState(item.props.profilePic)
    const [phone,setPhone] = useState(item.props.phone)
    const [password,setPassword] = useState(item.props.password)
   

  return (
  
    <div className={AccountsCss.Avatar_SettingsDiv}>
          <div className={AccountsCss.imgContainer}>
            <h2> Change Avatar </h2>
            <img
              className={AccountsCss.img}
              src={profilePic || "https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png"}
              alt="userImg"
            />
            <button className={AccountsCss.uploadBtn} >UPLOAD NEW PHOTO</button>
          </div>

          <div className={AccountsCss.settingContainer}>
            <h2> Account Settings </h2>

            <div className={AccountsCss.inputContainer}>
              <div className={AccountsCss.inputBox}>
                <p>Account Name</p>
                <input type="text" defaultValue={name}  onChange={(e)=> setName(e.target.value)}/>
              </div>
              <div className={AccountsCss.inputBox}>
                <p>Account Email</p>
                <input type="text" defaultValue={email} onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <div className={AccountsCss.inputBox}>
                <p>Password</p>
                <input type="text" defaultValue={password} onChange={(e)=> setPassword(e.target.value)}/>
              </div>
              <div className={AccountsCss.inputBox}>
                <p>Re-enter Password</p>
                <input type="password" defaultValue={password} onChange={(e)=> setPassword(e.target.value)}/>
              </div>
              <div className={AccountsCss.inputBox}>
                <p>Phone</p>
                <input type="text" defaultValue={phone} onChange={(e)=> setPhone(e.target.value)}/>
              </div>
              <div className={AccountsCss.inputBox} id={AccountsCss.updateBtn}>
                <button className={AccountsCss.updateProfileBtn} >
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
