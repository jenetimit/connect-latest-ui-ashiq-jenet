import React from 'react'
import Form from 'react-bootstrap/Form'
import '../style/main.scss'

export default function TextBox(props) {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            className='textbox my-3'
        />
    )
}





