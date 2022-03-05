import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Service from '../../components/Packages/servicelist';
import { Form } from 'react-bootstrap';
import axios from 'axios'
import { Url } from '../../GLOBAL/global';
import { Link,useHistory } from 'react-router-dom';
import Questionnaire from './Questionnaire';
import '../../style/package.scss'
import '../../style/button.scss'
import Button from '../../components/Packages/Buttons'
import Parallax from 'react-rellax'
var sessionstorage = require('sessionstorage');


export default function StandardList() {

    let history = new useHistory();
    
    const [Items,setItems] =  React.useState([]);
  
    const lists = [
        {
          id:1,
          value:"Google Ads"
        },
        {
          id:2,
          value:"Facebook Ads"
        },
        {
          id:3,
          value:"Instagram Ads"
        }
    ]

  return (
    <div className='  my-5'>
       <Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>
      
        <Container className=' center-align py-5'>

{/*     
            <Service id="Google Ads" name="Google Ads" />
            <Service id="Facebook Ads" name="Facebook Ads" />
            <Service id="Instagram Ads" name="Instagram Ads" />
            <Service id="Youtube Ads" name="Youtube Ads" />
            <Service id="Twitter Ads" name="Twitter Ads" /> */}

          
        <Form >

            <Row className='center-align'>
              <Col >

              <h2 style={{whiteSpace: "nowrap",margin: '5%'}}>These are the Services We Provide ....</h2>
                    {
                    lists.map((item,i) => (
                    <>
                      <label className='checkbox-label' key={i}>
                        {/* <input
                          type="checkbox"
                          key={item.id}
                          value={item.id}
                          className='checkbox'
                          onChange={(e)=> handleChange(e,item.value)}
                        />&nbsp;  */}
                        
                       {i+1} {'.'} {item.value}

                  
                      </label> <br></br>
                      </>
                  ))
                  }
              
              </Col>



              <Col >
              
              <label>Number of Months : </label>&nbsp; &nbsp;

                

                  <select name="months" id="months" className='select-months' >

                      <option value="1">1 </option>
                      <option value="2" >2 </option>
                      <option value="3">3 </option>
                      <option value="4">4 </option>
                      <option value="5">5 </option>
                      <option value="6">6 </option>
                      <option value="7">7 </option>
                      <option value="8">8 </option>
                      <option value="9">9 </option>
                      <option value="10">10 </option>
                      <option value="11">11 </option>
                      <option value="12">12 </option>

                  </select>
              
              </Col>


            </Row>
         

        
            
            <div className='my-5 text-center'>
              <button type='button' onClick={handleSubmit} className='button-text px-5'>Submit</button>
            </div>

        </Form> 


           
        </Container> 
    </div>
    );


    // function handleChange(event,item1) 
    // {
    //   var id = event.target.value;
    //   var value = item1;

    //   var temp = {
    //     "name":value
    //   }

    //   Items.push(temp);
      

    // }


     function handleSubmit()
    {
        
      
        
        lists.map((d,id) => {
          Items.push(d.value)
        })
        console.log("Items,",JSON.stringify(Items));
        JSON.stringify(Items);
        var months = document.getElementById("months").value;
        // console.log("months",months);
        const member_id =  sessionstorage.getItem("customerId");
        const token = sessionstorage.getItem("token");
        
    
        var data = new FormData();

        data.append("member_id",member_id);
        data.append("package_type",'STD');
        data.append("package_cost",0);
        data.append("months",months);
        data.append('package_services',JSON.stringify(Items))
      
        // for (var value of data.values()) {
        //     console.log(value); 
        // }  
        
        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
    
        
        axios({
            method: 'post',
            url: Url+'Package',
            data: data,
            headers: headers
            })
            .then(function (response) {
                //handle success
                console.log(response.data);
                showQues(response.data.id);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

        
       
    }



    function showQues(id)
    {
      console.log("pkg id : ", id)
      history.push(`/Questionnaire/${id}`);
    }

    
}
