import React from 'react'
import { Row } from 'react-bootstrap'

import { FaArrowDown } from "react-icons/fa"
import '../../style/about.scss'
import  Parallax from 'react-rellax';

export default function pillars() {
    return (
        <>
     {/* <section> */}

       {/* <div class="piller-main-div">
            <div class="piller-top-div">               
                <div class="div-one">
                    <img src={require('../../assets/images/images.png')} alt="" id="p-icon" />
                    <p>to be a tool for  churches and ministries <br></br> to accomplish greate commission given to us</p>
                </div>
                <div class="div-two">
                    <img src={require('../../assets/images/images.png')} alt="" id="h1-icon" />
                <h1>Pillars</h1>
                </div>
            </div>

            <div class="piller-row-one">
                <div class="row-one-img">
                     <img src={require('../../assets/images/about.png')} alt="" />
                     <h1>Our Vision</h1>
                </div>
            </div>
            
            <div class="piller-row-two">
                <div class="row-two-img">
                    <img src={require('../../assets/images/about.png')} alt="" />
                </div>
                <div>
                    <h1>Our Mission</h1>
                    <div class="div-one">
                        <img src={require('../../assets/images/images.png')} alt="" id="p-icon" />
                        <p>to be a tool for  churches and ministries <br></br> to accomplish greate commission given to us</p>
                    </div>
                </div>
            </div>

            <div class="piller-row-three">
                <div>
                    <h1>Faith Statement</h1>
                    <div class="div-one">
                        <p>to be a tool for  churches and ministries <br></br> to accomplish greate commission given to us</p>
                        <img src={require('../../assets/images/images.png')} alt="" id="p-icon" />
                    </div>
                </div>
                <div class="row-three-img">
                    <img src={require('../../assets/images/about.png')} alt="" /> 
                </div>
            </div>

            <div class="piller-Colum-four">
                <div class="row-four-img">
                    <img src="./images/about.png" alt="" />
                    <h1>Core Values</h1>
                </div>
                <div class="div-one">
                    <p>to be a tool for  churches and ministries <br></br> to accomplish greate commission given to us</p>
                    <img src={require('../../assets/images/images.png')} alt="" id="p-icon" />
                </div>
            </div>
        </div>
        
    </section> */}




<section>
        {/* <!-- start main div --> */}
        <div class="piller-main-div">
            <div class="piller-top-div">
                <div class="div-one">
                    <img src={require('../../assets/images/images.png')} alt="" id="p-icon" />
                    <p>to be a tool for churches and ministries <br></br> to accomplish greate commission given to us</p>
                </div>
                <div class="div-two">
                    <img  src={require('../../assets/images/images.png')} alt="" id="h1-icon" />
                    <h1>Pillars</h1>
                </div>
            </div>

            <div class="piller-row-one">
                <div class="row-one-img">
                    <img  src={require('../../assets/images/Rectangle 37.png')} alt="" />
                    <h1>Our Vision</h1>
                </div>
            </div>

            <div class="piller-row-two">
                <div class="row-two-img">
                    <img src={require('../../assets/images/Rectangle 38.png')} alt="" />
                </div>
              <div class="our-mission-div">
                    <h1>Our Mission</h1>
                    <div class="div-one">
                        <img src={require('../../assets/images/images.png')} alt="" id="p-icon" />
                        <p>to be a tool for churches and ministries <br></br> to accomplish greate commission given to us</p>
                    </div>
                </div>
            </div>
            <div class="piller-row-three">
                <div class="faith-statement">
                    <h1>Faith Statement</h1>
                    <div class="div-one">
                        <p>to be a tool for churches and ministries <br></br> to accomplish greate commission given to us</p>
                        <img src={require('../../assets/images/images.png')} alt="" id="p-icon" />
                    </div>
                </div>
                <div class="row-three-img">
                    <img src={require('../../assets/images/Rectangle 39.png')} alt="" />
                </div>
            </div>

            <div class="piller-Colum-four">
                <div class="row-four-img">
                    <img  src={require('../../assets/images/Rectangle 40.png')} alt="" />
                    <h1>Core Values</h1>
                </div>
                <div class="div-one">
                    <p>to be a tool for churches and ministries <br></br> to accomplish greate commission given to us</p>
                    <img src={require('../../assets/images/images.png')} alt="" id="p-icon" />
                </div>
              </div>
            </div>
        {/* <!-- end main div --> */}
</section>

        </>
    )
}
