import React, { useEffect, useState } from "react";
import AddProductCss from "./AddProduct.module.css";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { MdOutlineCloudUpload } from "react-icons/md";
import {Link, useNavigate} from 'react-router-dom'

export const AddProduct = () => {

  const [productname,setProductName] = useState('')
  const [description,setDescription] = useState('')
  const [category,setCategory] = useState('')
  const [expiry,setExpiry] = useState('')
  const [stock,setStock] = useState('')
  const navigate = useNavigate()


  const AddProduct = () =>{
    let UpdatedProduct = (JSON.parse(localStorage.getItem('productData')))
    let newProduct = {
      category:category,
      description:description,
      expireDate:expiry,
      name:productname,
      stock:stock,
      unitSold:Math.floor(Math.random()*500)
     }
    UpdatedProduct.products.unshift(newProduct)
    localStorage.setItem('productData',JSON.stringify(UpdatedProduct))
  }
  
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
     backgroundColor:"",
     color:"" 
    }
   }
   

  return (
    <>
      <Navbar porps={dash} />

      <div className={AddProductCss.AddCardContainer}> 
        <div className={AddProductCss.AddCardBox}>
          <div className={AddProductCss.AddCardLeft}>
            <h2> Add Product </h2>

            <p> Product Name </p>
            <input type="text" className={AddProductCss.productName} defaultValue={productname} onChange={(e)=> setProductName(e.target.value)} />

            <p> Description </p>
            <textarea className={AddProductCss.description}  defaultValue={description} onChange={(e)=> setDescription(e.target.value)} />

            <p> Category </p>
            <select defaultValue={category} onClick={(e) => setCategory(e.target.value)}>
              <option >Select Category</option>
              <option key={"New Arrival"}>New Arrival</option>
              <option key={"Most Popular"}>Most Popular</option>
              <option key={"Trending"}>Trending</option>
            </select>

            <div className={AddProductCss.stock_Expire}>
              <div>
                <p> Expire Date </p>
                <input type="date" defaultValue={expiry} onChange={(e)=> setExpiry(e.target.value)} />
              </div>

              <div>
                <p> Units In Stock </p>
                <input type="text" defaultValue={stock} onChange={(e)=> setStock(e.target.value)} />
              </div>
            </div>
          </div>

          <div className={AddProductCss.AddCardRight}>
            <div className={AddProductCss.AddCardRight_uploadDiv}>
              <span>
                <MdOutlineCloudUpload className={AddProductCss.uploadIcon} />
              </span>
            </div>

            <button> UPLOAD PRODUCT IMAGE </button>
          </div>
       
        </div>   
       <Link to='/Products' className={AddProductCss.link}>  <div className={AddProductCss.addBtnDiv}>
         <button className={AddProductCss.addBtn} onClick={AddProduct} > Add Product Now </button>
        </div> </Link>
        
      </div>

      <Footer />
    </>
  );
};
