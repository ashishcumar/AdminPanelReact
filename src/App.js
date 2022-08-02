import React from 'react';
import { LoginPage } from './Components/LoginPage/LoginPage';
import Appcss from './App.module.css'
import { Products } from './Components/Products/Products';
import { AddProduct } from './Components/AddProduct/AddProduct';
import { Accounts } from './Components/Accounts/Accounts';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
 {/* < Products /> */}
  {/* < AddProduct /> */}
   {/* < Dashboard /> */}
   {/* <StorageInfo /> */}
{/* < Performance /> */}
{/* < Accounts />  */}
  <BrowserRouter>
 <Routes >
  <Route path='/LoginPage' element={<LoginPage />} />
  <Route path='/' element={<Dashboard />} />
  <Route path='/Products' element={<Products />} />
  <Route path='/AddProduct' element={<AddProduct />} />
  <Route path='/Accounts' element={<Accounts />} />
  <Route path='/AddProduct' element={<AddProduct />} />
 </Routes>
 </ BrowserRouter >
    </>
  );
}

export default App;
