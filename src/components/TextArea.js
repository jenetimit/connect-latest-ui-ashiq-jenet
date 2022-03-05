import React from 'react'
import Form from 'react-bootstrap/Form'
import '../style/main.scss'

export default function TextArea(props) {
    return (
        <Form.Control as="textarea" rows={4} 
        placeholder={props.placeholder}
        className='textbox my-3'
        />
    )
}