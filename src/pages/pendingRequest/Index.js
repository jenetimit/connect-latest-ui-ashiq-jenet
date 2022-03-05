import React from 'react'
import { useParams } from "react-router-dom";
import { Container,Row,Col,Card,Button,Modal } from 'react-bootstrap';
import '../../style/order.scss'
import { Url,imgUrl } from '../../GLOBAL/global';
import axios from 'axios';
import { useHistory,Link} from "react-router-dom";
import dateFormat from 'dateformat';

var sessionstorage = require('sessionstorage');

export default function Index() {

    let history = useHistory();
    const {id,type} = useParams();
    const [modelmsg,setmodelmsg] = React.useState(false);
    const [eventList,setEventList] = React.useState({});
    const [campList,setCampList] = React.useState({});
    const [pkgList,setpkgList] = React.useState({});
    const [pkgData,setPkgData] = React.useState({});
    const [c_id,setc_id] = React.useState();
    const [ststus,setStatus] = React.useState();


    const [image,setImage] = React.useState(); 


    React.useEffect(() => {
        console.log("type",type);
        const token = sessionstorage.getItem("token");
        const customer_id =  sessionstorage.getItem("customerId");
        setc_id(customer_id);

        console.log("token",token)
        console.log('url',window.location.pathname);

        sessionstorage.setItem('request',window.location.pathname);

        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }

        if(customer_id === null)
        {
            history.push('/login');
        }

        else
        {
            if(type==="event")
            {
                    var events = new FormData();
                    events.append("event_id",id);
                    console.log("id",id);
    
                    axios({
                        method: 'post',
                        url: Url+'geteventlist',
                        data: events,
                        headers: headers
                        })
                        .then(function (response) {
                            //handle success
                            console.log("events",response.data[0]); 
                            setEventList(response.data[0]);       
                        })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });
    
            }
    
            if(type === "campaign")
            {
                
                var camps = new FormData();
                    camps.append("campaign_id",id);
                    console.log("id",id);
    
                    axios({
                        method: 'post',
                        url: Url+'getCampaignInfo',
                        data: camps,
                        headers: headers
                        })
                        .then(function (response) {
                            //handle success
                            // console.log("camps",response.data); 
                            setCampList(response.data[0]);  
                            setImage("http://connectmedia.gitdr.com/public/"+campList.photo)  
                            // console.log("camps 1",campList);  
                            // console.log("camps 2",campList[0].photo);  
                        })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });
    
            }


            if(type === "package")
            {
                var pkg = new FormData();
                    pkg.append("package_id",id);
                    pkg.append("customer_id",customer_id);
                    console.log("id",id);
    
                    axios({
                        method: 'post',
                        url: Url+'getPackage',
                        data: pkg,
                        headers: headers
                        })
                        .then(function (response) {
                            //handle success
                            console.log("pkg",response.data.package); 
                           setpkgList(response.data.data);
                           setPkgData(response.data.package);
                        })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });
            }
    
    


        }

        
      },[]);
    
  return (
    <div>
    <Container >
        <Row >
            <Col sm={12} md={2} xl={2} xxl={2}>
               
            </Col>

            <Col sm={12} md={8} xl={8} xxl={8}>
                
                    <div className='view-msg '>
                      
                      

                        <Card className='text'>


                            { type === "campaign" || type === "event"  ? (
                                

                                <Card.Body >
                                     <p className='type-pkg'>{campList.camp_type==='MPOST'?"million posts":"static posts"}</p>
                                       
                                    
                                    <p className='heading text-center'>  {eventList.event_title?eventList.event_title:campList.camp_title}</p>
                                  
                                   
                                   
                                
                                  
                                    {type === "event" ? (<>
                                    <p>From Date : {dateFormat(eventList.event_from, "mmmm dS, yyyy") }</p>
                                    <p> To Date : {dateFormat(eventList.event_to, "mmmm dS, yyyy")}</p>
                                    <hr></hr>
                                    </>
                                    )
                                        :
                                        (<>
                                            
                                            <p className='text-center'>  {campList.camp_desc}</p>
                                            <hr></hr>
                                            <img src={image} alt={campList.camp_title} width='100%' height={400} style={{objectFit:'contain'}}/>
                                        </>)
                                    }

                                   <p className='text-center py-3 bold-text'> Cost : {eventList.event_cost?eventList.event_cost:campList.camp_cost}</p> 

                                   

                                    <div className='space-between'>
                                        <Button variant="dark" onClick={()=>sent()}>Enquiry</Button> 

                                        <Button variant="dark" onClick={()=>accept(eventList.event_cost?eventList.event_cost:campList.camp_cost,type)}>Accept</Button>

                                        <Button variant="dark" onClick={()=>reject()}>Reject</Button>
                                    </div>
                                    
                                    
                                 
                                   
                                </Card.Body> )
                                    : 
                                    (
                                        
                                        <Card.Body>

                                          

                                         <p className='type-pkg '>{pkgData.packages_type === "CUST" ?"Customized Package":"Standard Package"}</p>

                                            {pkgList.length === 0?'' : (<div className='space-between bold-text'>
                                                <p>Question</p>
                                                <p>Answer</p>
                                               
                                            </div>)}
                                         
                                         {pkgList.length === 0 ? '' : 
                                        (
                                            
                                            pkgList.map((d ,id)=>(
                                          <>
                                           
                                           <div className='space-between'>
                                            <p>{d.pspec_text}</p>
                                            <p>{d.pspec_ans}</p>
                                           </div>
                                              
                                            
                                        </>
                                        )))}

                                        <p className='bold-text'>Status : {pkgData.packages_status}</p>

                                    <div className='space-between'>
                                        <Button variant="dark" onClick={()=>sent()}>Enquiry</Button> &nbsp;&nbsp;
                                        <Button variant="dark" onClick={()=>accept()}>Accept</Button>&nbsp; &nbsp;
                                        <Button variant="dark" onClick={()=>reject()}>Reject</Button>
                                    </div>

                                        </Card.Body>
                                    )
                              
                            }



                           
                        </Card>

                        {
                        modelmsg &&

                        <Modal.Dialog className='modal-msg'>
                            <Modal.Header >
                                <Modal.Title style={{color:'black'}}>Sent </Modal.Title>
                              
                                {/* {title==="replay"?"Replay To Messages" :" Sent Message"} */}
                            </Modal.Header>

                            <Modal.Body>
                                <input type="text" placeholder='type here ..' id="message" className='msg-text' />
                            </Modal.Body>

                            <Modal.Footer>

                                
                                <Button variant="secondary" onClick={closebtn}>Close</Button>
                                
                                   {/* <Button variant="dark" onClick={()=>sentmessage()}>sent</Button> */}
                                
                                
                            </Modal.Footer>
                        </Modal.Dialog>
                    }
                        
                    </div>
             





                
            </Col>
        </Row>

    </Container>
    </div>
  )

  function sent()
    {
        setmodelmsg(!modelmsg);
    }

    function closebtn()
    {
        setmodelmsg(false)
    }

    function accept(cost,value)
    {
        

        const token = sessionstorage.getItem("token");

        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }

        // var data = new FormData();

        // if(value==="event")
        // {

        // }
       

        // axios({
        //     method: 'post',
        //     url: Url+'getCampaignInfo',
        //     data: data,
        //     headers: headers
        //     })
        //     .then(function (response) {
        //         //handle success
        //         // console.log("camps",response.data); 
        //         setCampList(response.data[0]);  
        //         setImage("http://connectmedia.gitdr.com/public/"+campList.photo)  
        //         // console.log("camps 1",campList);  
        //         // console.log("camps 2",campList[0].photo);  
        //     })
        //     .catch(function (response) {
        //         //handle error
        //         console.log(response);
        //     });


    }

    function reject()
    {
        
    }
}
