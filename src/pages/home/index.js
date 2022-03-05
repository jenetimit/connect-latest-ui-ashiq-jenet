import React from 'react'
import { FaArrowDown } from "react-icons/fa"
import '../../style/home.scss'
import { Container,Row,Col } from 'react-bootstrap'
import  Parallax from 'react-rellax';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index() {
    return (
        <>
    
    {/* <section id='home1'>
        <div class="main-banner">
            <div class="left-div">
                <img src={require('../../assets/images/OBJECTS.png')} alt="" />
            </div>
            <div class="right-div">
                <h1>Connecting Your <span>Church</span><br></br> to the world</h1>
            </div>
        </div>
    </section> */}



    <section>
        <div className="main-banner">
            <div className="left-div">
                <img src={require('../../assets/images/OBJECTS.png')} alt="" />
            </div>
            <div className="right-div">
                    <h1 className="Connecting_Your">
                        <span>Connecting Your</span>
                    </h1>
                <h1><span id="church">Church</span> <span id="ministry">Ministry</span></h1>
                {/* <svg id="logo" style={{marginRight: "-15vw"}} width="50vw" height="10vw" viewBox="0 0 1796 295"> */}
                    <h1 id="Connecting_Your">
                        <span>to the World</span>
                    </h1>
                {/* </svg> */}
            </div>
        </div>
    </section>

        
        </>
      
    )
}
