import React from 'react'
import { Card } from 'react-bootstrap'
import '../../style/package.scss'
import StarRating from 'react-star-ratings';
import { BsCheckCircle } from "react-icons/bs";

import Button from './Buttons';
import Parallax from 'react-rellax'
import { Link } from "react-router-dom";


export default function Details_card(props) {

    const rating = parseFloat(props.rating);
    const color = props.ratingColor;
    const speed = parseFloat(props.speed);

    const package_details =[
        'For up To 2 Social Media Platforms','3 Posts Per Week','All Images Graphics And Copywriting included.Featured Videos Avilable','Messaging And Comment Moderation Included','Boosted Post Add-On Avilable']


    return (
        <>
        <Parallax speed={speed}>
            <Card className='card-details '>
            <div className='header_details py-3'>
            <div className='header_details'>
                    
                    <h4 className='zindex heading' >{props.heading }</h4>
                    <div className='rating'>
                        <StarRating
                            rating={rating}
                            starRatedColor={props.ratingColor}
                            numberOfStars={5}
                            name='stars'

                            starDimension={15}
                            // starSpacing={2}
                            ignoreInlineStyles={false}
                        />
                    </div>


                </div>

                <Card className='inner-box' style={{marginLeft:'3rem'}}>
                    {package_details.map(name => (  
                        <>
                             <BsCheckCircle className='checkIcon' color={props.ratingColor}/> 
                            <div className='pkg-content'>{name} </div>
                            <p></p>
                        </>
                    ))}  
                    
                </Card>

                
               
                
            </div>
            

        </Card>
        </Parallax>
</>
    )
}
