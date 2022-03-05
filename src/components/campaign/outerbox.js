import React from 'react'
import { Card } from 'react-bootstrap'
import '../../style/campaign.scss'
import Button from '../Button'
import  Parallax from 'react-rellax';


export default function outerbox(props) {

    const height = Number(props.height);
    const width = Number(props.width);
    const marginTop = (props.marginTop);
    const speed = parseFloat(props.speed);
    
    
    return (
<>
<Parallax speed={speed}>
    
        <Card className='box '>


            <img src={(props.image)} alt={props.alt} className='cam_img' width={width} height={height} style={{marginTop:marginTop}}/>

            <div className='vertical_text'>
                <p>{props.text}</p>
            </div>

            <div className='content '>
                <p>{props.content}</p>
            </div>

            {/* <div className='go-button'>
                <button className='button-text px-3'>Go</button>
            </div> */}

            <Button slug={props.slug}/>

           

        </Card> 
        </Parallax>
        </>
        
    )
}
