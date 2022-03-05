import React from 'react'
import '../style/button.scss'
import { useHistory,Link} from "react-router-dom";

export default function Button(props) {
    let history = new useHistory();
    const slug = props.slug;
    return (
        <div className='go-button'>
            <button className='button-text px-5' onClick={buttonHandler}>GO</button>
        </div>
    )

    function buttonHandler()
    {
        history.push(slug);
    }
}
