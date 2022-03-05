import React,{useEffect,useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Buttons from '../../components/Packages/Buttons';
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';
import  Parallax  from 'react-rellax';
import axios from 'axios'
import { Url } from '../../GLOBAL/global';
import { useHistory,Link} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var sessionstorage = require('sessionstorage');


export default function Index() {

    const [customerInfo,setCustomerInfo] = useState({});
    let history = useHistory();

    useEffect(()=>{
        getUserInfo();
    },[])


    async function getUserInfo()
    {
        const token = sessionstorage.getItem("token");
        
        let formdata = new FormData();
        const customer_id = sessionstorage.getItem("customerId");

        formdata.append("customer_id",customer_id);
        
        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }

        await axios({
            method: 'post',
            url: Url+'getProfile',
            data: formdata,
            headers: headers
            })
            .then(function (response) {
                //handle success
               
                // console.log("getprofile",response.data.data[0]);
                setCustomerInfo(response.data.data[0]);
               
                
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    
    }
    

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });


    function onSubmit(data)
    {
        

        const customer_id = sessionstorage.getItem("customerId");
        console.log("id",customer_id);
     let formdata = new FormData();
     formdata.append('name',data.name);
     formdata.append('email',customerInfo.cust_email);
     formdata.append('phone',data.phone);
     formdata.append('ministry',data.ministry);
     formdata.append('address',data.add);
     formdata.append('customer_id',customer_id);   

     console.log(formdata);
    
     const token = sessionstorage.getItem("token");

     const headers ={
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }

        axios({
        method: 'post',
        url: Url+'ProfileUpdate',
        data: formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
            // console.log("success");
            console.log(response.data);
            if(response.data === "profile Updated Successfully")
            {
              toast.success("Profile Updated Successfully");
              history.push('/home')
            }
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    }

  return (
      <>
     <Parallax speed={5}>
     <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
           objectFit:'cover'
       }}/>

    </Parallax>

    <div className='margintop-27 mx-5 my-5'>
       
        <Container >
            <Parallax speed={-3}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Name" type="text"  {...register("name" , { required: true })} className='textbox' defaultValue={customerInfo.cust_name} /> </Col>

                            <Col sm={12} md={12} xl={6} xxl={6}> <input placeholder="Ministry" type="text" {...register('ministry' , { required: true })} className='textbox' defaultValue={customerInfo.cust_ministry} /> </Col>

                        </Row>

                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Email" type="email"  className='textbox' defaultValue={customerInfo.cust_email} disabled={true} style={{color:'#000',backgroundColor:'#fff'}}/> </Col>

                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Phone" type="tel-in" {...register("phone" , { required: true })} className='textbox' defaultValue={customerInfo.cust_phone}/> </Col>

                        </Row>

                        <Row>
                            
                            <Col sm={12} md={12} xl={12} xxl={12}><textarea placeholder="Full Address" {...register("add" , { required: true })} className='textbox textArea' rows={3} defaultValue={customerInfo.cust_address}></textarea></Col>

                        </Row>

                        {/* <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Password" type="password" {...register("pass1" , { required: true })} className='textbox'/> </Col>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Re-Password" type="password"  {...register("pass2" , { required: true })} className='textbox'/> </Col>
                        </Row> */}

                        <Row className='extraRowSpace'>
                          <Buttons text="Update" type="submit" />
                        {/* <input type="submit" /> */}
                        </Row>
                        

                        
                      
                    
                    </Form>    

                    {/* <button onClick={signout}>Signout</button> */}
                </Parallax>
        </Container>
        <ToastContainer />
    </div>
    </>
  );

    // function signout()
    // {
    //     sessionstorage.clear();
    //     history.push('/login');
    // }
}
