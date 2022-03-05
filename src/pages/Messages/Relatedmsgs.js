import React,{useEffect} from 'react';
import { Url } from '../../GLOBAL/global';
import axios from 'axios';
import '../../style/messages.scss';
import { Container,Row,Col,Table,Button,Modal } from 'react-bootstrap';
import dateFormat from 'dateformat';
import { FcLeftDown,FcRightUp } from "react-icons/fc";
var sessionstorage = require('sessionstorage');

export default function Relatedmsgs(props) {

    const[relatedMsg,setRelatedMsg] = React.useState([]);
    const msg = props.data;
    
    const [modelmsg,setmodelmsg] = React.useState(false);
    const [length,setLength] = React.useState(0);

    useEffect(() => {

        getDatas();

      },[relatedMsg!== null]);



        async function getDatas()
        {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");

            // get all messages where msg_type = "I"

            await axios.get(Url+'getfullmessages', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id,parent_msg:msg.msg_id} })
            .then(response => {
                // If request is good...
                console.log("related",response.data);
                setRelatedMsg(response.data.data);
                setLength(relatedMsg.length);

            })
            .catch((error) => {
                console.log('error ' + error);
            });

        }


  return (
  <div>
        <Container>
            <Row >
                <Col sm={12} md={2} xl={2} xxl={2}>
                   
                </Col>

                <Col sm={12} md={8} xl={8} xxl={8}>
                 
                 
                        <div className='view-msg'>
                            {/* <p>Purchased Items</p> */}
                            
                            <Table striped bordered hover style={{backgroundColor:'aqua'}} className="text-center">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>sent/recieve</th>
                                        <th>Message</th>
                                       
                                        {/* <th>Selected Months</th> */}
                                    </tr>
                                </thead>

                                <tbody>
                                  

                                  {length > 0 ? 
                                    relatedMsg.map((data, idx) => (
                                    // console.log(data)
                               
                                    <tr key={idx}>

                                        <td>{data.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</td>
                                      
                                      {/* msg_type =="S" from admin side */}
                                      
                                        <td>{data.msg_type===("R"||"I")?<FcRightUp/>:<FcLeftDown/>}</td>

                                        <td>{data.msg_user}</td>
                                        
                                        <td>
                                        <Button variant="dark" type='button' onClick={() => viewall(data)}>view all</Button><br></br>
                                    
                                        </td>
                                    </tr>  
                                   
                                  
                                       
                                    )) : <p className='text-center'>No messages</p>}
        
                                    
                                </tbody>
                                
                            </Table>
                        </div>
                 


                    {
                        modelmsg &&

                        <Modal.Dialog className='modal-msg'>
                            <Modal.Header >
                                <Modal.Title style={{color:'black'}}>Replay  </Modal.Title>
                                {/* <p style={{color:'black'}}>message : {Pmsg.msg_user} </p> */}
                              
                            </Modal.Header>

                            <Modal.Body>
                                <input type="text" placeholder='type here ..' id="message" className='msg-text' />
                            </Modal.Body>

                            <Modal.Footer>

                                
                                <Button variant="secondary" onClick={closebtn}>Close</Button>
                            
                                <Button variant="dark" onClick={()=>ReplayToMsg()}>sent</Button>
                              
                                
                            </Modal.Footer>
                        </Modal.Dialog>
                    }
                    
                </Col>
            </Row>

        </Container>
    </div>
  );

  function closebtn()
    {
        setmodelmsg(false)
    }
    

    

    function viewall(data)
    {
        // setPmsg(data);
        // setmodelmsg(true);
        
        console.log("pmsg",data);
        
    }

    function ReplayToMsg()
    {
        
        var msg = document.getElementById('message').value;
        const token = sessionstorage.getItem("token");
        const customer_id = sessionstorage.getItem("customerId");

        var formdata = new FormData();



        // formdata.append("customer_id",customer_id);
        // formdata.append("order_id",Pmsg.msg_order);
        // formdata.append("message",msg);
        // formdata.append("msg_parentmsg",Pmsg.msg_parentmsg===0?Pmsg.msg_id:Pmsg.msg_parentmsg);
        // formdata.append("msg_type",'R');


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
          
            setmodelmsg(false);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
   

                
    }
}
