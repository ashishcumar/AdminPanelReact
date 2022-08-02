import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import FooterCss from './Footer.module.css'


export const Footer = () => {
  return (
    <>
    <div className={FooterCss.footDiv}>
        Copyright < AiOutlineCopyrightCircle/> <b> 2022 </b>  All rights reserved.
    </div>
    </>
  )
}
