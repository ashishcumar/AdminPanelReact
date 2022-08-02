import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import ProductCss from "./Products.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import {Link, useNavigate} from 'react-router-dom'



export const Products = () => {
  const [singleDelete, setSingledelete] = useState();
  const [selectedDelete,setSelectedDelete] = useState([])
  const [catPopup,setCatPopUp] = useState(false)
  const [newcat, setNewCat] = useState('')
  const [deleteCat,setDeleteCat] = useState('')
  const [rerender,setRendered] = useState(false)
  const navigate = useNavigate()
  
  const dash = {
    dashb:{
      backgroundColor:"",
      color:"" 
    },
    prod:{
      backgroundColor:" #F5A623",
      color:"white"  
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
     let UpdatedProduct = JSON.parse(localStorage.getItem("productData"));
      UpdatedProduct.products.map((item, i) => {
      if (item.name == singleDelete) {
      UpdatedProduct.products.splice(i, 1);
      localStorage.setItem("productData", JSON.stringify(UpdatedProduct));
        }
      });
      setRendered(!rerender)
  }, [singleDelete]);  

  useEffect(()=>{
    let UpdatedProduct = JSON.parse(localStorage.getItem("productData"));
    UpdatedProduct.categories.map((item, i) => {
    if (item === deleteCat ) {
    UpdatedProduct.categories.splice(i, 1);
    localStorage.setItem("productData", JSON.stringify(UpdatedProduct));
      }
    });
    setRendered(!rerender)
  },[deleteCat])


  const DeletedSelected = () => {
    let UpdatedProduct = JSON.parse(localStorage.getItem("productData"));
    selectedDelete.map(checkIt => {
    UpdatedProduct.products.map((item, i) => {
        if (item.name === checkIt) {
          UpdatedProduct.products.splice(i, 1);
          localStorage.setItem("productData", JSON.stringify(UpdatedProduct));
         console.log(JSON.parse(localStorage.getItem('productData')))
        }
      })
    });
  }

  const AddCategory = () => {
    let UpdatedProduct = (JSON.parse(localStorage.getItem('productData')))
    let newPush = newcat
    UpdatedProduct.categories.push(newPush)
    localStorage.setItem('productData',JSON.stringify(UpdatedProduct))
    console.log(JSON.parse(localStorage.getItem('productData')))
  }

 
  


  useEffect(()=>{
    return undefined
    },[rerender])
  


  let productData = JSON.parse(localStorage.getItem("productData")).products;
  let categoriesData = JSON.parse( localStorage.getItem("productData")).categories;

  
  return (
    <>
      <Navbar  porps={dash}/>
      <div className={ProductCss.Container}>
        <div className={ProductCss.addNewProduct}>
          <div className={ProductCss.tableContainer}>
            <table>
              <tbody>
                <tr>
                  <th className={ProductCss.tableTh}></th>
                  <th className={ProductCss.tableTh}>PRODUCT NAME</th>
                  <th className={ProductCss.tableTh}>UNIT SOLD</th>
                  <th className={ProductCss.tableTh}>IN STOCK</th>
                  <th className={ProductCss.tableTh}>EXPIRE DATE</th>
                  <th className={ProductCss.tableTh}></th>
                </tr>
              </tbody>

              <tbody className={ProductCss.tBody}>
                { 
                 productData.map((item, i) => {
                  return (
                    <tr key={i} className={ProductCss.tableTr}>
                      <td
                        className={ProductCss.tableTh}
                        id={ProductCss.sideIcon}
                      >
                        <label htmlFor="checkbox">
                          <input
                            type="checkbox"
                            id={ProductCss.inputBox}
                            onClick={(e)=> e.target.checked ? setSelectedDelete(oldArr => [...oldArr,item.name]): ""}
                          />
                        </label>
                      </td>
                      <td className={ProductCss.tableTh}>{item.name}</td>
                      <td className={ProductCss.tableTh}>{item.unitSold}</td>
                      <td className={ProductCss.tableTh}>{item.stock}</td>
                      <td className={ProductCss.tableTh}>{item.expireDate}</td>
                      <td
                        className={ProductCss.tableTh}
                        id={ProductCss.sideIcon}
                      >
                        <span onClick={() => setSingledelete(item.name) }>
                          <MdOutlineDeleteForever />
                        </span>
                      </td>
                    </tr>
                  );
                })
              
              }
              </tbody>
            </table>
          </div>
          <Link to='/AddProduct' className={ProductCss.link} > <button> ADD NEW PRODUCT </button> </Link> <br />
          <button onClick={DeletedSelected}> DELETE SELECTED PRODUCTS </button>
         
        </div>

        <div className={ProductCss.productCategories}>
          <h2> Products Categories </h2>
          <div className={ProductCss.productCategoriesList}>
            {categoriesData.map((item, i) => {
              return (
                <p key={i}>
                  {item}
                  <span>
                    <MdOutlineDeleteForever
                      className={ProductCss.CategListDelete}
                      onClick={(e) => setDeleteCat(item)}
                    />
                  </span>
                </p>
              );
            })}
          </div>

{
  catPopup ? 
<div className={ProductCss.categPopup}> 
            <h2 > Category Name </h2> 
            <input type="text" defaultValue={newcat} onChange={(e)=> setNewCat(e.target.value)}/>
           < MdOutlineCancel className={ProductCss.addCatBtn} onClick={()=> setCatPopUp(false)} />
            < IoIosAddCircleOutline className={ProductCss.addCatBtn}  onClick={AddCategory}  />
          </div> 
          : ""
}


          <button onClick={()=> setCatPopUp(!rerender)}> ADD NEW CATEGORY </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
