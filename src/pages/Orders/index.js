import React,{useEffect} from 'react';
import { Url } from '../../GLOBAL/global';
import { Container,Row,Col,Table,Button } from 'react-bootstrap';
import axios from 'axios';
import '../../style/messages.scss';
import { useHistory} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax'
var sessionstorage = require('sessionstorage');

export default function Index() {


    let history = useHistory();
    

    const[orders,setOrders] = React.useState([]);
    // const [length,setLength] = React.useState(0);
    const [plans,setPlans] = React.useState(false);
    const [camps ,setCamps] = React.useState(false)
    const [packages,setPackages] = React.useState(false);

    const [planData] = React.useState([]);
    const [pkgData] = React.useState([]);
    const [campData] = React.useState([]);
    const [p1pkg] = React.useState([]);
    const[pkg_type,setPkg_type] =React.useState('STD');

    useEffect(() => {

        getDatas();

      },[]);


      async function getDatas()
    {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");


            await axios.get(Url+'getorder', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                
                setOrders(response.data);
                console.log("order",response.data);
                response.data.map((data, idx) => {
                  
                  if(data.order.order_item ===  "EVENT")
                  {
                    // setPlandata(data);
                    planData.push(data);
                  }

                  if(data.order.order_item ===  "CAMPAIGN")
                  {
                    // setPlandata(data);
                    campData.push(data);
                  }


                  if(data.order.order_item === "PACKAGE")
                  {
                    // setPkgData(data);
                    pkgData.push(data);
                    // console.log("1",data);

                      data.PACKAGE_details.map(d=>{
                        // console.log("p1pkg : ",d)
                        return p1pkg.push(d);
                      })

                  }

                  // return data.order.order_item === "CAMPAIGN"  ? planData.push(data) : pkgData.push(data);

                })
                  
                  
                  
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });



    }

  return (
    <div >
     
     <Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>

    <Container className='py-5 '>
        <Row className='py-5'>
            

            <Col sm={12} md={12} xl={12} xxl={12}>

              <div className='table-title'>
                <div className='table-icons'>
                  <img src={require('../../assets/images/Group 338.png')} alt="events" width={150} height={150} id="icon1"  style={{objectFit:'contain'}} />
                  <p onClick={()=>events()} id="event">EVENTS</p>
                </div>

                <div className='table-icons'>
                  <img src={require('../../assets/images/OBJECTS.png')} alt="events" width={150} height={150} id="icon2" style={{objectFit:'contain'}} />
                  <p id='campaign' onClick={()=>camp()}>CAMPAIGNS</p>
                </div>
               

                <div className='table-icons'>
                  <img src={require('../../assets/images/Group 338.png')} alt="events" width={150} height={150} id="icon3" />
                  <p id='pkg' onClick={()=>pkg()}>PACKAGES</p>
                </div>
               
                
              </div>
                
                    <div className='view-msg'>
                      
                       {plans &&
                        <Table striped bordered hover style={{backgroundColor:'azure'}} className="text-center">
                            <thead>
                                <tr>
                                    <th>Ordered Date</th>
                                    <th>Title</th>
                                    <th>From - To Date</th>
                                    <th>Drive Id</th>
                                    <th>Cost</th>
                                    <th>Status</th>
                                   
                                   
                                </tr>
                            </thead>

                            <tbody>

                           
                              {/* {console.log(orders.splice(0,1))} */}
                                {/* {console.log(orders.length)} */}
                              
                              { planData.length === 0 ? <p className='text-center'>no orders</p> :
                                planData.map((data, idx) => (
                             
                                // console.log()
                            
                                <tr key={idx}>
                                    <td>{data.order.created_at !== null? dateFormat(data.order.created_at, "mmmm dS, yyyy"):""}</td>
                                    <td>{data.plan[0].event_title}</td>
                                 
                                    <td>{ dateFormat(data.plan[0].event_from , "mmmm dS, yyyy")}{' - '} {dateFormat(data.plan[0].event_to , "mmmm dS, yyyy")} </td>

                                    <td><a href={data.order.drive_id}>{data.order.drive_id}</a></td>

                                    <td>{data.order.order_amt}</td>
                                    <td>{data.order.order_status}</td>
                                   
                                    <td>
                                        
                                        <Button variant="dark" onClick={()=>{view(data,"event")}}>view</Button><br></br>
                                    
                                    
                                    </td>
                                </tr>  
                               
                              
                                   
                                )) }
                     
    
                                
                            </tbody>
                            
                        </Table>
                      }



                    {camps &&
                        <Table striped bordered hover style={{backgroundColor:'azure'}} className="text-center">
                            <thead>
                                <tr>
                                    <th>Ordered Date</th>
                                    <th>Title</th>
                                    <th>Type of Item</th>
                                    <th>Drive Id</th>
                                    <th>Cost</th>
                                    <th>Status</th>
                                   
                                   
                                </tr>
                            </thead>

                            <tbody>

                           
                              {/* {console.log(orders.splice(0,1))} */}
                                {/* {console.log(orders.length)} */}
                              
                              { campData.length === 0 ? <p className='text-center'>no orders</p> :
                                campData.map((data, idx) => (
                             
                                // console.log(data.plan[0].camp_type)
                            
                                <tr key={idx}>
                                    <td>{data.order.created_at !== null? dateFormat(data.order.created_at, "mmmm dS, yyyy"):""}</td>
                                    <td>{data.plan[0].camp_title}</td>
                                 
                                    <td>{data.order.order_item}  { data.plan[0].camp_type } </td>

                                    <td><a href={data.order.drive_id}>{data.order.drive_id}</a></td>

                                    <td>{data.order.order_amt}</td>
                                    <td>{data.order.order_status}</td>
                                   
                                    <td>
                                        
                                        <Button variant="dark" onClick={()=>{view(data,"camp")}}>view</Button><br></br>
                                    
                                    
                                    </td>
                                </tr>  
                               
                              
                                   
                                )) }
                     
    
                                
                            </tbody>
                            
                        </Table>
                      }



                  {packages &&
                        <Table striped bordered hover style={{backgroundColor:'azure'}} className="text-center col-gap">
                            <thead>
                                <tr >
                                    <th >Ordered Date</th>
                                    <th>Package Details
                                      
                                    <tr className='p1pkg p1pkg-heading'>
                                      <th className='mr-left'>No:</th>
                                      <th className='mr-left'>Type</th>
                                      <th className='mr-left'>Months</th>
                                     
                                    
                                  </tr>
                                    </th>
                                    <th >Type of PKG</th>
                                    <th >Drive Id</th>
                                    <th >Cost</th>
                                    <th >Status</th>
                                   
                                   
                                </tr>
                                
                            </thead>

                            <tbody>

                        
                              { pkgData.length === 0 ? <p className='text-center'>no orders</p> :
                                pkgData.map((data, idx) => (
                              
                                  // console.log("pkgdata inside",pkgData)
                                
                                <tr key={idx}>
                                    <td>{data.order.created_at !== null? dateFormat(data.order.created_at, "mmmm dS, yyyy"):""}</td>
                                    <td>
                                      {/* {console.log('type',data.PACKAGE.packages_type)} */}
                                      {data.PACKAGE_details.length === 0 ? '' : 
                                        data.PACKAGE_details.map((d ,id)=>(
                                          <>
                                           
                                              <tr className='p1pkg' key={id}>
                                                <td className='mr-left' colSpan={2}>{id+1}</td>
                                                <td  className='mr-left' colSpan={2}>{d.pspec_text}</td>
                                            
                                                <td className='mr-left' colSpan={2}>{d.pspec_ans}</td>
                                                
                                                
                                            </tr>
                                            <hr></hr>
                                        </>
                                        ))}
                                    </td>
                                   
                                      <td>{data.PACKAGE.packages_type !== null?data.PACKAGE.packages_type:''}</td>
                                    <td><a href={data.order.drive_id}>{data.order.drive_id}</a></td>

                                    <td>{data.PACKAGE.packages_cost}</td>
                                    <td>{data.PACKAGE.packages_status}</td>
                                   
                                    <td>
                                        
                                        <Button variant="dark" onClick={()=>{view(data,"pkg")}}>view</Button><br></br>
                                    
                                    
                                    </td>
                                </tr>  
                              
                                )) }
                     
    
                                
                            </tbody>
                            
                        </Table>
                      }
                    </div>
             





                
            </Col>
        </Row>

    </Container>
</div>
  );


  function view(data,value)
  {
      
    
    //   setOrderId(orderId)
    history.push( { pathname: '/order-view',order:data,type:value})
      
  }

  function events()
  {
    setPlans(!plans);
    document.getElementById('icon1').style.display="none";
    document.getElementById('icon2').style.display="none";
    document.getElementById('icon3').style.display="none";
    setCamps(false);
    setPackages(false);
    document.getElementById('event').style.color="#F1C40F";
    document.getElementById('campaign').style.color="white";
    document.getElementById('pkg').style.color="white"
  }

  function pkg()
  {
    setPackages(!packages);
    document.getElementById('icon1').style.display="none";
    document.getElementById('icon2').style.display="none";
    document.getElementById('icon3').style.display="none";
    setPlans(false);
    setCamps(false);
    document.getElementById('pkg').style.color="#F1C40F";
    document.getElementById('event').style.color="white";
    document.getElementById('campaign').style.color="white";
  }


  function camp()
  {
    setCamps(!camps);
    document.getElementById('icon1').style.display="none";
    document.getElementById('icon2').style.display="none";
    document.getElementById('icon3').style.display="none";
    setPlans(false);
    setPackages(false);
    document.getElementById('campaign').style.color="#F1C40F";
    document.getElementById('pkg').style.color="white";
    document.getElementById('event').style.color="white";
  }

}
