import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import axios from 'axios';
import Parallax from 'react-rellax'
import { useForm } from 'react-hook-form';
import Buttons from '../../components/Packages/Buttons';
import { Form } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import { Url } from '../../GLOBAL/global';


export default function Index() {

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    
    let history = new useHistory();

    function onSubmit(data)
    {
      

     let formdata = new FormData();
     
     formdata.append('email',data.email);
     formdata.append('password',data.pass1);
     

     
          const headers ={
            'Content-Type': 'multipart/form-data'
          }

        axios({
        method: 'post',
        url: Url+'resetPassword',
        data: formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
            console.log(response.data);
            history.push('/login');
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    
    }
    
  return (
      <div>
          <Container>
          <Parallax speed={-3}>
                    <h6 className='heading'>Reset Password</h6>
                    
                    
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        

                        <Row>
                            <Col sm={12} md={12} xl={12} xxl={12}>  <input placeholder="Email" type="email" {...register("email" , { required: true })} className='textbox login-box'/> </Col>
                            
                        </Row>

            

                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Password" type="password" {...register("pass1" , { required: true })} className='textbox login-box'/> </Col>

                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Re-Password" type="password"  {...register("pass2" , { required: true })} className='textbox login-box'/> </Col>
                        </Row>

                        <Row className='extraRowSpace'>
                          <Buttons text="Reset " type="submit" />
                        {/* <input type="submit" /> */}
                        </Row>
                    
                    </Form>


                    </Parallax>
          </Container>
          
      </div>
  );
}
