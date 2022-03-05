import React from 'react'
import '../../style/button.scss'
import { useHistory,Link} from "react-router-dom";


export default function Buttons(props) {

    let history = useHistory();
    // console.log("props",props)
    return (

        <div className='pkg-button'>
            <button style={{borderColor:props.color}} className='button-text px-5' onClick={()=>click()
            } >
                {props.text}
            </button>
        </div>

        
    )
    function click(){
        history.push(props.click)
    }
}
