import React from 'react'
import successimage from './../asset/success.png'
import "./SuccessComponent.css";

export const SuccessComponent = () =>{
  return (
    <div className='success_header_container'>
        <span className='label_header_h1'>
            <label>Fijoli...</label>
        </span>
        <br/>
        <h2 className='label_header_h2'>Hurray!!!</h2>
        <br/>
        <span className='label_header_h2'>
             You have successfully registered with Fijoli.
        </span>
        <span className='label_header_h2'>
            Click on the confirmation link shared in Whatsapp to complete the sign up
        </span>
        <br/>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img src={successimage}  width="450" height="350"/>
        </div>

    </div>
  )
}
