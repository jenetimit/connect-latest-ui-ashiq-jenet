import React, { useEffect,useState } from 'react'
import { Card } from 'react-bootstrap'
import '../../style/package.scss'
import StarRating from 'react-star-ratings';
import { BsCheckCircle } from "react-icons/bs";

import Parallax from 'react-rellax'
import { Link } from "react-router-dom";
var sessionstorage = require('sessionstorage');

export default function Cards(props) {

    const [token,setToken] = useState('');

    useEffect(()=>{
        getCustomerId();
    })


    async function getCustomerId()
    {
       var id =  await sessionstorage.getItem("token");
      
       setToken(id);
       console.log("token",token);
       
    }

    const rating = parseFloat(props.rating);
    const color = props.ratingColor;
    const speed = parseFloat(props.speed);
    const path = props.servicelist;

    const package_details =[
        'For up To 2 Social Media Platforms','3 Posts Per Week','All Images Graphics And Copywriting included.Featured Videos Avilable','Messaging And Comment Moderation Included','Boosted Post Add-On Avilable']
    return (
        <>
        <Parallax speed={speed}>
            <Card className='card-box'>
            <div className='header py-3'>
            <div className='header'>
                    <img src={props.img} alt="img1" width={200} className='bg-img'/>
                    <h4 className='zindex'>{props.heading }</h4>
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

                    <p className='py-1 zindex'>{props.month}</p>

                </div>

                <Card className='inner-box'>
                    {package_details.map(name => (  
                        <>
                             <BsCheckCircle className='checkIcon' color={props.ratingColor}/> 
                            <div className='pkg-content'>{name} </div>
                            <p></p>
                        </>
                    ))}  
                    
                </Card>


                        {
                            buttonText()
                        }
               
               
                
            </div>
            

        </Card>
        </Parallax>
</>
    )


    function buttonText()
    
        {
            if(props.servicelist === '/customized-list' && token !== null)
            {
               return <Link to={ { pathname: '/customized-list', name: props.servicelist} }> GO </Link>;
            }
            

            if(props.servicelist === '/standard-list' && token !== null)
            {
               return <Link to={ { pathname: '/standard-list', name: props.servicelist} }> GO </Link>;
            }

            if(token === null)
            {
               return <Link to={ { pathname: '/registration', name: props.servicelist} }> GO </Link>
            }
         }
    
}
