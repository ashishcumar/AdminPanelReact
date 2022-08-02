import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import Dashcss from "./Dashboard.module.css";
import { Performance } from "../Charts/Performance/Performance";
import StorageInfo from "../Charts/StorageInfo/StorageInfo";
import LastesHits from "../Charts/LatestHits/LatestHits";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Dashboard = () => {
  const navigate = useNavigate()
  const [notifData, setNotifData] = useState('');
  const dash = {
   dashb:{
    backgroundColor:" #F5A623",
    color:"white"
   },
   prod:{
    backgroundColor:"",
    color:""  
   },
   acc:{
    backgroundColor:"",
    color:"" 
   }
  }
  
  useEffect(()=>{
   if(!localStorage.getItem('loginStatus')){
     navigate('/loginPage')
   } 
  })

  useEffect(() => {
    axios
      .get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
      .then((res) => {
        let productPageData = res.data.productsPage;
        let accountPageData = res.data.accountsPage;
        let dashboardPageData = res.data.dasbhoardPage;
        if (localStorage.getItem("productData") == null) {
          localStorage.setItem("productData", JSON.stringify(productPageData));
        }
        if (localStorage.getItem("accountData") == null) {
          localStorage.setItem("accountData", JSON.stringify(accountPageData));
        }
        if (localStorage.getItem("dashboardData") == null) {
          localStorage.setItem(
            "dashboardData",
            JSON.stringify(dashboardPageData)
          );
        }
      });
  });



useEffect(()=>{
if(notifData === ""){
let notificationData = JSON.parse(localStorage.getItem("dashboardData"));
setNotifData(notificationData);
console.log(notificationData);
}
},[notifData])

  return (
    <>
      <Navbar porps={dash} />
      <>
      <h2 className={Dashcss.welcomAdmin}> Welcome Back, Admin. </h2>
        <div className={Dashcss.LasteshHit_Perf_Container}>
          
          <div className={Dashcss.latestHitChart}>
            <h2> Latest Hits </h2>
            <LastesHits className={Dashcss.Chart} />
          </div>
          <div className={Dashcss.perFormanceChart}>
            <h2> Performance </h2>
            <Performance className={Dashcss.Chart} />
          </div>
          <div className={Dashcss.storageChart}>
            <h2> Storage Information </h2>
            <StorageInfo className={Dashcss.Chart} />
          </div>
          <div className={Dashcss.notificationList}>
            <h2> Notification List </h2>
            <div className={Dashcss.notifContainer}>


                  <div  className={Dashcss.notifBox}>
                      <div className={Dashcss.imgContainer}>
                        <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMzc5OTEzOF5BMl5BanBnXkFtZTgwMDc5ODU3MTE@._V1_UX172_CR0,0,172,256_AL_.jpg" alt="userImg" />
                      </div>
                      <div>
                       <b> Jessica</b> and <b> 6 others </b> sent you new <span className={Dashcss.highlightNotif}> product updates. </span>  Check new orders.
                        <p className={Dashcss.timeSpan}> 6h ago. </p>
                      </div>
                    </div>

                    <div  className={Dashcss.notifBox}>
                      <div className={Dashcss.imgContainer}>
                        <img src="https://pbs.twimg.com/profile_images/952318165941477376/e-3MyGW3.jpg" alt="userImg" />
                      </div>
                      <div> <b>Oliver Too</b> and <b>6 others</b>  sent you exisiting <span className={Dashcss.highlightNotif}>product updates</span> . Read more reports.
                        <p className={Dashcss.timeSpan}> 2h ago. </p>
                      </div>
                    </div>

                    <div  className={Dashcss.notifBox}>
                      <div className={Dashcss.imgContainer}>
                        <img src="https://images.pexels.com/photos/459947/pexels-photo-459947.jpeg?h=350&auto=compress&cs=tinysrgb" alt="userImg" />
                      </div>
                      <div> <b>Victoria</b>  and <b>6 others</b> sent you <span className={Dashcss.highlightNotif}>order updates</span> . Read Order information.
                        <p className={Dashcss.timeSpan}> 1d ago.  </p>
                      </div>
                    </div>
            </div>
          </div>
        </div>

        <div className={Dashcss.orderListDiv}>
          <h2> Orders List </h2>
          <div className={Dashcss.tableContainer}>
            <table>
              <tbody>
                <tr>
                  <th>ORDER NO.</th>
                  <th>STATUS</th>
                  <th>OPERATORS</th>
                  <th>LOCATION</th>
                  <th>DISTANCE</th>
                  <th>START DATE</th>
                  <th>EST DELIVERY DUE</th>
                </tr>
              </tbody>
              <tbody>


{
  notifData ?

  notifData.orders.map((item,i)=>{
       return(    
        <tr key={i}>
        <td>{item.orderNo}</td>
        <td>
          {
            item.status === "Moving" ? <span className={Dashcss.statusDot} style={{color:"#9BE64D"}}> • </span> : "" 
          }
          {
            item.status === "Cancelled" ? <span className={Dashcss.statusDot} style={{color:"#D9534F"}}> • </span> : "" 
          }
          {
            item.status === "Pending" ? <span className={Dashcss.statusDot} style={{color:"#EFC54B"}}> • </span> : "" 
          }         
          {
            item.status === "Delivered" ? <span className={Dashcss.statusDot} style={{color:"#9BE64D"}}> • </span> : "" 
          }
          
           {item.status}
        </td>
        <td>{item.operators}</td>
        <td>{item.location}</td>
        <td>{item.distance}</td>
        <td>{item.startDate}</td>
        <td>{item.deliveryDate}</td>
      </tr>
       )
  }) : <p style={{margin:"auto"}}> Loading Order Data... </p>
}


              </tbody>
            </table>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
};
