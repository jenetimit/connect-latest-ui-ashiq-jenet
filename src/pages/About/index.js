import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import '../../style/about.scss'
import  Parallax from 'react-rellax';

export default function index() {
    return (
<>
<section id='About1'>   
          {/*   <section id="section1">
                <div class="second-container">
                    <div class="sc-div-one">
                        <img src={require('../../assets/images/banner-img.png')} alt="" />
                        <h1>About us</h1>
                    </div>
                    <h1>Play</h1>
                </div>
            </section> */}


    <section>
        <div class="second-container">
            <div class="sc-div-one">
                <img src={require('../../assets/images/banner-img.png')} alt="" />
            </div>
            <h1 id="play">Play</h1>
        </div>
    </section>


    {/* <section>
        <div class="about-container">
            <div class="about-row-one">
                <div class="left-div-one">
                    <img src={require('../../assets/images/about.png')} alt="" />
                    <h1>Who we are</h1>
                </div>
                <div class="right-div-one">
                    <p>
                    We are a faith based, passionate and creative team of Christian believers and engagement specialists carrying the ever-relevant gospel of the Lord Jesus Christ to the present generation using social media. We are tech professionals equipped with modern-day IT and marketing skills, fully committed to utilizing social media to its fullest extent in spreading the gospel of the Lord Jesus Christ.                    </p>
                </div>
            </div>

            <div class="about-row-two">
                <div class="left-div-two">
                    <p>
                    Driven by Matthew 28:19-20, we have an opportunity that no other previous generations had in spreading the gospel to the masses through the internet; specifically social media. With our army of tech soldiers and our love for Jesus, we help churches and ministries have a strong presence in a variety of global media platforms.
                    </p>
                    <h1>What we do</h1>
                </div>
                <div class="right-div-two">
                    <img src={require('../../assets/images/what-next.png')} alt="" />
                </div>
            </div>
        </div>
    </section> */}
      <section>
        <div class="about-container">
            <h1>About us</h1>
            <div class="about-row-one">
                <div class="left-div-one">
                <img src={require('../../assets/images/about.png')} alt="" />
                    <h1>Who we are</h1>
                </div>
                <div class="right-div-one">
                    <p>
                    We are a faith based, passionate and creative team of Christian believers and engagement specialists carrying the ever-relevant gospel of the Lord Jesus Christ to the present generation using social media. We are tech professionals equipped with modern-day IT and marketing skills, fully committed to utilizing social media to its fullest extent in spreading the gospel of the Lord Jesus Christ.  
                    </p>
                </div>
            </div>

            <div class="about-row-two">
                <div class="left-div-two">
                    <p>
                    Driven by Matthew 28:19-20, we have an opportunity that no other previous generations had in spreading the gospel to the masses through the internet; specifically social media. With our army of tech soldiers and our love for Jesus, we help churches and ministries have a strong presence in a variety of global media platforms.
                    </p>
                </div>
                <div class="right-div-two">
                    <h1>What we do</h1>
                    <img src={require('../../assets/images/what-next.png')} alt="" />
                </div>
            </div>
        </div>
    </section>


</section>  
</>

    )
}
