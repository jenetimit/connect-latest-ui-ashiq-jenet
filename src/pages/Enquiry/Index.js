import React,{useEffect,useState} from 'react';
import { Container,Row,Col,Card,Button,Modal,Table } from 'react-bootstrap';
import '../../style/order.scss'
import { Url } from '../../GLOBAL/global';
import axios from 'axios';
import { useHistory,Link} from "react-router-dom";
import { FcLeftDown,FcRightUp } from "react-icons/fc";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax'

var sessionstorage = require('sessionstorage');


export default function Index() {

    let history = useHistory();

    const [allmessages,setAlmessages]= React.useState([]);
    const [adminGene,setAdminGene] = React.useState([]);
   
   

    useEffect(() => {

        getDatas();

      },[allmessages!== null]);


    async function getDatas()
    {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");

            // get all messages where msg_type = "I"

            await axios.get(Url+'getGeneral', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
              
                //console.log(response.data.data);
                setAlmessages(response.data.data);
            })
            .catch((error) => {
                console.log('error ' + error);
            });


            await axios.get(Url+'getGeneral', { headers: { Authorization: `Bearer ${token}` }})
            .then(response => {
                
                // console.log(response.data.data);
                setAdminGene(response.data.data);
            })
            .catch((error) => {
                console.log('error ' + error);
            });

    }

  return (
  
  <div>
<Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>
                        <Modal.Dialog className='modal-msg'>
                            <Modal.Header >
                                <Modal.Title style={{color:'black'}}>General Enquiry </Modal.Title>
                               
                            </Modal.Header>

                            <Modal.Body>
                                <input type="text" placeholder='type here ..' id="message" className='msg-text' />
                            </Modal.Body>

                            <Modal.Footer>

                                
                                
                                
                                   <Button variant="dark" onClick={()=>sentmessage()}>sent</Button>
                                
                                
                            </Modal.Footer>
                        </Modal.Dialog>

                        <Container>
            <Row >
                <Col sm={12} md={2} xl={2} xxl={2}>
                   
                </Col>

                <Col sm={12} md={8} xl={8} xxl={8}>
                 
                 
                        <div className='view-msg'>
                            {/* <p>Purchased Items</p> */}
                            
                            <Table striped bordered hover style={{backgroundColor:'azure'}} className="text-center">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>sent/recieve</th>
                                        <th>Message</th>
                                       
                                        {/* <th>Selected Months</th> */}
                                    </tr>
                                </thead>

                                <tbody>

                                    
                                  
                                {allmessages.length >0 ? allmessages.map((data, idx) => (
                                    // console.log(data)
                               
                                    <tr key={idx}>

                                        <td>{data.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</td>
                                      
                                        <td>{data.msg_type===("I"||"R")?<FcRightUp/>:<FcLeftDown/>}</td>

                                        <td>{data.msg_user}</td>
                                        
                                        
                                    </tr>  
                                   
                                  
                                       
                                    )) : "" }


                                {adminGene.length > 0 ? adminGene.map((data, idx) => (
                                    // console.log(data)
                               
                                    <tr key={idx}>

                                        <td>{data.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</td>
                                      
                                        <td>{data.msg_type===("I"||"R")?<FcRightUp/>:<FcLeftDown />}</td>

                                        <td>{data.msg_user}</td>
                                        
                                        
                                    </tr>  
                                   
                                  
                                       
                                    )) : ""}

                                    {allmessages.length === 0 && adminGene.length === 0 ? <p>no messages</p>: ''}
        
                                    
                                </tbody>
                                
                            </Table>
                        </div>
                 


                   
                </Col>
            </Row>

        </Container>

  </div>);


   
    function sentmessage()
    {
        var msg = document.getElementById('message').value;
        console.log(msg)

        const token = sessionstorage.getItem("token");
        const customer_id = sessionstorage.getItem("customerId");

        var formdata = new FormData();



        formdata.append("customer_id",customer_id);
        formdata.append("order_id",0);
        formdata.append("message",msg);
        formdata.append("msg_parentmsg",0);
        formdata.append("msg_type",'I');


        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }

        axios({
        method: 'post',
        url: Url+'Message',
        data:formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
            console.log(response.data);
            getDatas();
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    }
    
}
