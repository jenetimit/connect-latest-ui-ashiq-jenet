import React from 'react'
import '../style/style.css'
import { FaArrowDown } from "react-icons/fa"



export default function header() {
    return (
        <div>

            <div className='header-logo-menu'> 
                <img src={require('../assets/images/logo.png')}  id='header-logo-img' alt='header-logo-img'/>
                <h5 id='header-logo-img' style={{right:'20px',color:'#fff'}}>menu</h5>
            </div>


            <div className='' style={{ height: '300px'}}>
                <h4 className='header-title'>Connecting your <br></br> church <br></br>to the world</h4>
            </div>

            <div className='headerSection'>
                <img src={require('../assets/images/Group 148.png')} alt='header section' width='100%' height='100%'/>
                <h5 className='header-aboutus'>About Us</h5>
                <FaArrowDown className='aboutIcon'/>
            </div>  

        </div>
    )
}
