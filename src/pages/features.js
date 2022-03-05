import React from 'react'
import { FiPlusCircle } from "react-icons/fi"
import { FiArrowRight } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi"
import { FaQuestion } from "react-icons/fa"

export default function features() {
    return (
        <div className='feature-list'> 


            <div className='div1'>
                <img src={require('../assets/images/Rectangle 37.png')} alt='header section' width={350} height={350}/>
                <p id='vision'>Our Vision</p>
                {/* <backward>Our Vision</backward> */}
                <FiPlusCircle id='plusIcon1'/>
                <FiArrowRight id='rightIcon1' />
                <p id='descri_icon'>to be a tool for churches and ministries ,<br></br>to be a tool for churches and ministries</p>
            </div>



            <div className='div2'>
                <img src={require('../assets/images/Rectangle 38.png')} alt='header section' width={350} height={350}/>
                <p id='mission'>Our Mission</p>
                {/* <backward>Our Vision</backward> */}
                <FiPlusCircle id='plusIcon2'/>
                <FiArrowRight id='rightIcon2' />
                <p id='descri_icon2'>to be a tool for churches and ministries ,<br></br>to be a tool for churches and ministries</p>
            </div>




            <div className='div3'>
                <img src={require('../assets/images/Rectangle 39.png')} alt='header section' width={350} height={350}/>
                <p id='statement'>Faith Statement</p>
                {/* <backward>Our Vision</backward> */}
                <FiPlusCircle id='plusIcon3'/>
                <FiArrowLeft id='rightIcon3' />
                <p id='descri_icon3'>to be a tool for churches and ministries ,<br></br>to be a tool for churches and ministries</p>
            </div>



            <div className='div4'>
                <img src={require('../assets/images/Rectangle 40.png')} alt='header section' width={350} height={350}/>
                <p id='values'>Core Values</p>
                {/* <backward>Our Vision</backward> */}
                <FiPlusCircle id='plusIcon4'/>
                <FiArrowLeft id='rightIcon4' />
                <p id='descri_icon4'>to be a tool for churches and ministries ,<br></br>to be a tool for churches and ministries</p>
            </div>


            <div className='why-connect'>
                <p id='whyconnect-text'>Why Connect</p>

                    <FaQuestion id='questionIcon' />
                <ul class="bar">
                    <li></li>
                    <li> . If you make a typo or accidentally delete an important file, you will see a compilation error,like when you import a non-existent JavaScript module. </li>
                    <li> . If you make a typo or accidentally delete an important file, you will see a compilation error, like when you import a non-existent JavaScript module. </li>
                    <li> . If you make a typo or accidentally delete an important file, you will see a compilation error,  like when you import a non-existent JavaScript module. </li>
                    <li> . If you make a typo or accidentally delete an important file, you will see a compilation error,  like when you import a non-existent JavaScript module. If you make a typo or accidentally delete an important file, you will see a compilation error,  like when you import a non-existent JavaScript module.</li>
                    <li> . If you make a typo or accidentally delete an important file, you will see a compilation error,  like when you import a non-existent JavaScript module. </li>
                    <li> . If you make a typo or accidentally delete an important file, you will see a compilation error,  like when you import a non-existent JavaScript module. If you make a typo or accidentally delete an important file, you will see a compilation error,  like when you import a non-existent JavaScript module.</li>
                </ul>

            </div>
           
            
        </div>
    )
}
