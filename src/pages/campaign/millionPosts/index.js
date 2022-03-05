import React,{useEffect,useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import axios from 'axios'
import { Url } from '../../../GLOBAL/global';
import '../../../style/Mposts.scss'
var sessionstorage = require('sessionstorage');



export default function Index() {

    const[Mpost,setMpost] = useState([]);

    useEffect(() => {

        getMillionPosts();

      },[Mpost!== null]);


    async function getMillionPosts()
    {
        const token = sessionstorage.getItem("token");

        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }

        await axios({
        method: 'post',
        url: Url+'getMillionPosts',
        headers: headers
        })
        .then(function (response) {
            //handle success
            // console.log(response.data);
            setMpost(response.data);
            // console.log("mpost",Mpost)
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }

  return (
      <>
    <div>
        <Container>

        {Mpost.map((mpost,id) => (
           
            <Row>
                <Col sm={2} md={2} xl={2} xxl={2}></Col>

    
                <Col sm={8} md={8} xl={8} xxl={8} key={id}>
                    <div className='Mposts' style={{backgroundColor:'bisque'}}>
                        <img src={require('../../../assets/images/bg.jpg')} alt='million' width={500} height={500}/>
                        <p className='para-content'>{mpost.camp_title}</p>
                        <p className='paragrah '>₹ {mpost.camp_cost}</p>
                        
                        <div className='footer-div ' style={{backgroundColor:'bisque'}}>
                            <label>Number of Months : </label>

                            <select id="months" required={true} >
                                <option value="1">1 month</option>
                                <option value="2">2 month</option>
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

                            <button onClick={(e) => purchaseCamp(e,mpost)}>Purchase</button>

                        </div>
                        

                    </div>
                </Col>


                <Col sm={2} md={2} xl={2} xxl={2}></Col>
            </Row>
         
           
            ))}

        </Container>
    </div>
    </>

    );

    function purchaseCamp(e,mpost)
    {
        
        var months = document.getElementById("months").value;
        // console.log("months",months);

        const token = sessionstorage.getItem("token");
        const customer_id = sessionstorage.getItem("customerId");

        var formdata = new FormData();



        formdata.append("customer_id",customer_id);
        formdata.append("event_id",mpost.camp_id);
        formdata.append("order_item","CAMPAIGN");
        formdata.append("order_amt",mpost.camp_cost);


        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }

        axios({
        method: 'post',
        url: Url+'Event_order',
        data:formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
            console.log(response.data.id)
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    }

}
