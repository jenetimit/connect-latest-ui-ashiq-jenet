import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Parallax from 'react-rellax';
import { Link} from "react-router-dom";
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form'
import Buttons from '../../../components/Packages/Buttons';
import { Url } from '../../../GLOBAL/global';
import axios from 'axios'
import Button from '../../../components/Button'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var sessionstorage = require('sessionstorage');

export default function CreateForm() {

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const [showForm,setShowForm] = useState(true);
    const [payButton,setPayButton] = useState(false);
    const [eventId,setEventId] = useState('');

  function onSubmit(data)
  {
    const customer_id =  sessionstorage.getItem("customerId");
    const token = sessionstorage.getItem("token");
    

    var formdata = new FormData();



    formdata.append("customer_id",customer_id);
    formdata.append("event_title",data.title);
    formdata.append("event_from",data.from);
    formdata.append("event_to",data.to);
    
   
    const headers ={
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }

    
    axios({
        method: 'post',
        url: Url+'Events',
        data: formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
            console.log(response.data);
            if(response.data.message === "event Created Successfully")
            {
                toast.success("Event Created Successfully !");
                setShowForm(false);
                setPayButton(true);
                setEventId(response.data.id);
            }
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
  }

 return(
     <div>
         <Container>
            <Row>
                <Col xl={4} sm={12} md={12} xxl={5} className='py-5 my-5'>

                    <Parallax speed={-3} >  
                    <p className='para-content'>A small description</p> 
                    </Parallax>
                </Col>

                <Col></Col>

                <Col xl={8} sm={12} md={12} xxl={5} className='py-5 my-5'>
    
                <Parallax speed={-3}>
                   {showForm && 
                    <h6 className='heading'>Create Event</h6>
                   }
        
                     {showForm && 
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col sm={12} md={12} xl={12} xxl={12}>  <input placeholder="Event Title" type="text"  {...register("title" , { required: true })} className='textbox login-box' /> </Col>
                           
                        </Row>

                        <Row>
                            <Col sm={12} md={12} xl={12} xxl={12}>  <input type="date" placeholder="From Date"  {...register("from" , { required: true })} className='textbox login-box'/> </Col>
                            
                        </Row>

            

                        <Row>
                            <Col sm={12} md={12} xl={12} xxl={12}>  <input type="date" placeholder="To Date" {...register("to" , { required: true })} className='textbox login-box'/> </Col>
                            
                        </Row>

                        <Row className='extraRowSpace'>
                          <Buttons text="Create" type="submit" />
                        {/* <input type="submit" /> */}
                        </Row>
                        

                    
                    </Form> 
                }

                    {payButton && 
                        <button onClick={paynow}>Pay Now</button>
                    }

                    </Parallax>
                    </Col>
             </Row>
             <ToastContainer />
         </Container>
     </div>
 )

 function paynow()
 {
    console.log("id",eventId);
    const customer_id =  sessionstorage.getItem("customerId");
    const token = sessionstorage.getItem("token");

    var formdata = new FormData();



    formdata.append("customer_id",customer_id);
    formdata.append("event_id",eventId);
    formdata.append("order_item","Event");
    formdata.append("order_amt",0);

    const headers ={
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }

    
    axios({
        method: 'post',
        url: Url+'Event_order',
        data: formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
            console.log(response.data);
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
        

 }

}
