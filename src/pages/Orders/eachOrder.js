import React from 'react';
import { Container,Row,Col,Card,Button,Modal } from 'react-bootstrap';
import '../../style/order.scss'
import { Url } from '../../GLOBAL/global';
import axios from 'axios';
import { useHistory,Link} from "react-router-dom";
import dateFormat from 'dateformat';

var sessionstorage = require('sessionstorage');

export default function EachOrder(props) {
    let history = useHistory();
    const order = props.order;
    console.log("type",props.type);
    
    const _type = props.type;
    // console.log("type",type);
    //  console.log("order",order);
    const [photo,setPhoto] = React.useState();
    const [pkgPic , setpkgPic] = React.useState();

    if((_type === "camp") || (_type === "event")) 
    {
        console.log("type",_type)
        // setPhoto("http://connect.gitdr.com/"+order.plan.photo)
    }
       
    
    const [modelmsg,setmodelmsg] = React.useState(false);

  
   
    

  return (
  
    <div>
<Container >
        <Row >
            <Col sm={12} md={2} xl={2} xxl={2}>
               
            </Col>

            <Col sm={12} md={8} xl={8} xxl={8}>
                
                    <div className='view-msg '>
                      
                      

                        <Card className='text'>


                            { _type === "camp" || _type === "event"  ? (
                                

                                <Card.Body>

                                        {console.log("if ",order)}

                                    <p>{order.order.order_item} {order.plan[0].camp_type?" -" +order.plan[0].camp_type:""}</p>
                                    <p>Order Id : {order.order.order_id}</p>
                                  
                                    <hr></hr>
                                
                                   <p>Item : {order.plan[0].camp_type === "MPOST"?"Million Posts":"Static Posts"}</p>
                                    
                                    <p> Tittle : {order.plan[0].camp_title?order.plan[0].camp_title:order.plan[0].event_title }</p>
                                    
                                    <p>Description : {order.plan[0].camp_desc?order.plan[0].camp_desc:dateFormat(order.plan[0].event_from, "mmmm dS, yyyy")+"  -  "+dateFormat(order.plan[0].event_to, "mmmm dS, yyyy")}</p>

                                    <p>Cost : {order.order.order_amt}{''}</p>

                                    {/* <img src={photo} alt={order.order.order_id} width={400} height={400}/> */}
                                    
                                    <Button variant="dark" onClick={()=>sent()}>sent</Button>
                                 
                                   
                                </Card.Body> )
                                    : 
                                    (
                                        
                                        <Card.Body>
                                           {console.log("else ",order)}
                                          
                                        <p>{order.order.order_item} {' - '} {order.PACKAGE.packages_type === "STD" ? "STANDRAD PACKAGE":"CUSTOMIZED PACKAGE"}</p>
                                        <p>Order Id : {order.order.order_id}</p>
                                    
                                        <hr></hr>
                                        {order.PACKAGE.packages_type === "STD" ? 
                                        <div className='list-pkg'>
                                            <p className='list-pkg-heading'>Question</p>
                                            <p className='list-pkg-heading'>Answer</p>
                                        </div>:''}

                                        {order.PACKAGE_details.map((d,id) =>

                                            <div className='list-pkg'>
                                                <p>{d.pspec_text}</p>
                                                <p>{d.pspec_ans}</p>

                                            </div>
                                            
                                        
                                        )}

                                        <p>Package Cost : {order.PACKAGE.packages_cost}</p>
                                        <p>Selected Months : {order.PACKAGE.months}</p>
                                        <p>Order Status : {order.PACKAGE.packages_status}</p>

                                        <Button variant="dark" onClick={()=>sent()}>sent</Button>
                                           
                                        </Card.Body>
                                    )
                              
                            }



                           
                        </Card>


                        {
                        modelmsg &&

                        <Modal.Dialog className='modal-msg'>
                            <Modal.Header >
                                <Modal.Title style={{color:'black'}}>Sent </Modal.Title>
                               <p style={{color:'black'}}>title : {order.plan.camp_title}</p>
                                {/* {title==="replay"?"Replay To Messages" :" Sent Message"} */}
                            </Modal.Header>

                            <Modal.Body>
                                <input type="text" placeholder='type here ..' id="message" className='msg-text' />
                            </Modal.Body>

                            <Modal.Footer>

                                
                                <Button variant="secondary" onClick={closebtn}>Close</Button>
                                
                                   <Button variant="dark" onClick={()=>sentmessage()}>sent</Button>
                                
                                
                            </Modal.Footer>
                        </Modal.Dialog>
                    }
                    </div>
             





                
            </Col>
        </Row>

    </Container>
</div>
  );

    function sent()
    {
        setmodelmsg(!modelmsg);
    }

    function closebtn()
    {
        setmodelmsg(false)
    }

    function sentmessage()
    {
        var msg = document.getElementById('message').value;
        console.log(msg)

        const token = sessionstorage.getItem("token");
        const customer_id = sessionstorage.getItem("customerId");

        var formdata = new FormData();



        formdata.append("customer_id",customer_id);
        formdata.append("order_id",order.order.order_id);
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
            history.push( { pathname: '/orders'});
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    }
    
}
