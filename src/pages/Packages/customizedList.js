import React,{useState} from 'react';
import { Container,Row,Col, Form } from 'react-bootstrap';
import Service from '../../components/Packages/servicelist';
import axios from 'axios'
import { Url } from '../../GLOBAL/global';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import Parallax from 'react-rellax'
import '../../style/package.scss'
var sessionstorage = require('sessionstorage');

export default function CustomizedList() {
  let history = useHistory();
     const [months,setMonths] = React.useState();
     
   
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
            },
            {
              id:4,
              value:"Youtube Ads"
            },
            {
              id:5,
              value:"Twitter Ads"
            },
            {
              id:6,
              value:"Facebook live-stream handling"
            },
            {
              id:7,
              value:"Youtube live-stream handling"
            },
            {
              id:8,
              value:"Done-for-you personalized pictures on Instagram"
            },
            {
              id:9,
              value:"Done-for-you personalized pictures on Facebook"
            },
            {
              id:10,
              value:"Done-for-you personalized pictures on Youtube"
            },
            {
              id:11,
              value:"Short videos and reels with custom graphics"
            },
            {
              id:12,
              value:"Tech Support"
            },
            {
              id:13,
              value:"Share Performance"
            },
            {
              id:14,
              value:"Advertising your upcoming events on Facebook"
            },
            {
              id:15,
              value:"Advertising your upcoming events on Instagram"
            },
            {
              id:16,
              value:"Advertising your upcoming events on Youtube"
            }
     ]

  return (
    <div>
      
     <Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>
        <Container className='' >

   
  
            {/* <Service id="Google Ads" name="Google Ads" selected="false"/>
            <Service id="Facebook Ads" name="Facebook Ads" />
            <Service id="Instagram Ads" name="Instagram Ads" />
            <Service id="Youtube Ads" name="Youtube Ads" />
            <Service id="Twitter Ads" name="Twitter Ads" />
            <Service id="Facebook live-stream handling" name="Facebook live-stream handling" />
            <Service id="Youtube live-stream handling" name="Youtube live-stream handling" />
            <Service id="" name="Done-for-you personalized pictures on Instagram" />
            <Service id="Done-for-you personalized pictures on Facebook" name="Done-for-you personalized pictures on Facebook" />
            <Service id="Done-for-you personalized videos on Instagram" name="Done-for-you personalized videos on Instagram" />
            <Service id="Done-for-you personalized videos on Facebook" name="Done-for-you personalized videos on Facebook" />

            <Service id="Short videos and reels with custom graphics" name="Short videos and reels with custom graphics" />

            <Service id="Tech Support" name="Tech Support" />
            <Service id="Share Performance" name="Share Performance" />
            <Service id="Advertising your upcoming events on Facebook" name="Advertising your upcoming events on Facebook" />

            <Service id="Advertising your upcoming events on Instagram" name="Advertising your upcoming events on Instagram" />

            <Service id="Advertising your upcoming events on Youtube" name="Advertising your upcoming events on Youtube" /> 
            */}

<Form className='mt-5'>

<Row className=' mx-5'>
      <Col sm={3} md={3} xl={3} xxl={3}></Col>
  
      {
      lists.map((item,id) => (
      <>
          <Col sm={6} md={6} xl={6} xxl={6}>
          <label className='checkbox-label' key={id}>
            <input
              type="checkbox"
              key={item.id}
              value={item.id}
              className='checkbox'
              onChange={(e)=> handleChange(e,item.value)}
            /> &nbsp;{item.value}
          </label> <br></br>
          </Col>
          </>
      ))
    }

    <Col sm={3} md={3} xl={3} xxl={3}></Col>
 
</Row>



<br></br>

<div className='mx-5' >
<label>Number of Months : </label>&nbsp; &nbsp;

<select id="months" required={true} className="select-months" >
<option value="1" >1 month</option>
<option value="2" >2 month</option>
<option value="3">3 month</option>
<option value="4">4 month</option>
<option value="5">5 month</option>
<option value="6">6 month</option>
<option value="7">7 month</option>
<option value="8">8 month</option>
<option value="9">9 month</option>
<option value="10">10 month</option>
<option value="11">11 month</option>
<option value="12">12 month</option>
</select>


</div>

<div className='my-5 mx-5'>
<button type='button' onClick={handleSubmit} className='button-text px-5' >Submit</button>
</div>
  
</Form>

       <ToastContainer/>
        </Container> 
    </div>
    );



    function handleChange(event,item1) 
    {
      var id = event.target.value;
      var value = item1;
      
      var temp = {
        "name":value
      }

      Items.push(temp);

    }


    function handleSubmit()
    {
        console.log("Items,",JSON.stringify(Items));
        JSON.stringify(Items);
        var months = document.getElementById("months").value;
        // console.log("months",months);
        const member_id =  sessionstorage.getItem("customerId");
        const token = sessionstorage.getItem("token");
        console.log("mid",member_id);
    
        var data = new FormData();

        data.append("member_id",member_id);
        data.append("package_type",'CUST');
        data.append("package_cost",1);
        data.append("months",months);
        data.append('package_services',JSON.stringify(Items));
      
      
        
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
                console.log(response.data.message);
                if(response.data.message === "package stored Successfully")
                {
                  toast.success('Order Request has been send !!',{
                    autoClose:3000
                  });
                  setTimeout(() => history.push('/home'), 3000);
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    
   
    
}
