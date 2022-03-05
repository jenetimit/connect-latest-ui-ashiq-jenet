import React from 'react';
import { useForm } from 'react-hook-form';
import { Container,Row,Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Buttons from '../../components/Packages/Buttons';
import { Link } from 'react-router-dom';
import SelectButton from '../../components/Packages/SelectButton';
import Service from '../../components/Packages/servicelist'
import { useParams,useHistory } from 'react-router-dom';
import axios from 'axios'
import { Url } from '../../GLOBAL/global';
import Parallax from 'react-rellax'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var sessionstorage = require('sessionstorage');

export default function Questionnaire() {

    let history = useHistory();

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const [Items,setItems] =  React.useState([]);
    const [QueAns] = React.useState([]);
    const { id } = useParams();

    const Questions =["Name and address of your ministry/church","How many branches do you have?","Total active members on premises?","Active online regular viewers?","How often do you live stream in a week?","What are the challenges you face right now?","What are your goals using our services?","How serious are you to take your online presence to the next level?"];

    function onSubmit(data)
  {
      
      
    //   console.log(data);
      
      Questions.map(q => {
          
            if(q === "Name and address of your ministry/church")
            {
                var temp1 = {
                    "question" : q,
                    "answer": data.ministry
                }
                 QueAns.push(temp1)
            }

            if(q === "How many branches do you have?")
            {
                var temp2 = {
                    "question" : q,
                    "answer": data.branches
                }
                QueAns.push(temp2)
            }

            if(q === "Total active members on premises?")
            {
                var temp3 = {
                    "question" : q,
                    "answer": data.members
                }
                QueAns.push(temp3)
            }
        
            if(q === "Active online regular viewers?")
            {
                var temp4 = {
                    "question" : q,
                    "answer": data.viewers
                }
                QueAns.push(temp4)
            }

            if(q === "How often do you live stream in a week?")
            {
                var temp5 = {
                    "question" : q,
                    "answer": data.liveStream
                }
               QueAns.push(temp5)
            }

            if(q === "What are the challenges you face right now?")
            {
                var temp6 = {
                    "question" : q,
                    "answer": data.challenges
                }
                QueAns.push(temp6)
            }

            if(q === "What are your goals using our services?")
            {
                var temp7 = {
                    "question" : q,
                    "answer": Items
                }
                QueAns.push(temp7)
            }

            if(q === "How serious are you to take your online presence to the next level?")
            {
                var temp8 = {
                    "question" : q,
                    "answer": data.online_presence
                }
                 QueAns.push(temp8)
            }

      })

    //   console.log("QuesAns", JSON.stringify(QueAns));

        const token = sessionstorage.getItem("token");
       
        var formdata = new FormData();
        // console.log()

        formdata.append("package_id",id);
        formdata.append("package_services",JSON.stringify(QueAns));
        
      
      
        
        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
    
        
        axios({
            method: 'post',
            url: Url+'packagespec',
            data: formdata,
            headers: headers
            })
            .then(function (response) {
                //handle success
                console.log("response",response.status);
                if(response.status === 201)
                {
                    
                    // history.push('/home');
                    toast.success("Order Request has been send !!",{
                        position:'top-right',
                        autoClose:3000,
                        closeOnClick:true
                    });

                    setTimeout(() => history.push('/home'), 3000);
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

  }


  const lists = [
    {
      id:1,
      value:"In 1 year we want to expand our online reach"
    },
    {
      id:2,
      value:"We are a new church. We want to make our presence in the current location"
    },
    {
        id:3,
        value:"We are planting new churches in new locations. We want to attract new members in different areas"
    },
    {
        id:4,
        value:"All of the above"
    }
]

  return (
    <div>
             <Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>
        <Container>
        <Form onSubmit={handleSubmit(onSubmit)} className='mx-5 mt-5'>
                        <Row >

                            <Col sm={12} md={12} xl={6} xxl={6}> 
                                <div className='center-align'>
                                    <label>1.</label> &nbsp;&nbsp;&nbsp;<input placeholder="Name and address of your ministry/church" type="text" name="ministry" {...register("ministry" , { required: true })} className='textbox' />
                                </div>
                            </Col>

                            <Col sm={12} md={12} xl={6} xxl={6}> 
                                {/* <div className='center-align'> */}

                                    <label>2.&nbsp; How many branches do you have?</label> &nbsp;

                                    <select name="branches" {...register("branches" , { required: true })} className='select-months' >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                            
                                    </select>
                            
                            </Col>
                        </Row>

                        <Row className='extraRowSpace'>
                            <Col sm={12} md={12} xl={6} xxl={6}>  
                            
                                <label>3. &nbsp;&nbsp;Total active members on premises?</label>&nbsp;
                                
                                <select name="members" {...register("members" , { required: true })} className='select-months'>
                                    <option value="not sure">Not Sure</option>
                                    <option value="1-30">1-30</option>
                                    <option value="30-60">30-60</option>
                                    <option value="60-90">60-90</option>
                                    
                        
                                </select>

                            </Col>
                            <Col sm={12} md={12} xl={6} xxl={6}>  

                            <label>4. &nbsp;&nbsp;Active online regular viewers?</label> &nbsp;
                                
                                <select name="viewers" {...register("viewers" , { required: true })} className='select-months'>
                                    <option value="not sure">Not Sure</option>
                                    <option value="1-30">1-30</option>
                                    <option value="30-60">30-60</option>
                                    <option value="60-90">60-90</option>
                                    
                        
                                </select>
                            </Col>
                        </Row>

                        <Row className='extraRowSpace'>
                            <Col sm={12} md={12} xl={6} xxl={6}>
                            <label>5. &nbsp;&nbsp;How often do you live stream in a week?</label> &nbsp;
                                
                                <select name="liveStream" {...register("liveStream" , { required: true })}  className='select-months'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                        
                                </select>
                            </Col>

                            <Col sm={12} md={12} xl={6} xxl={6}> 
                            <div className='center-align'>
                                <label>6.</label> &nbsp;&nbsp; &nbsp;
                             <textarea name="challeges" placeholder="What are the challenges you face right now?" {...register("challenges" , { required: true })} className='textbox textArea' rows={3}></textarea>  
                             </div>
                             </Col>

                        </Row>
                       
                        <Row className='extraRowSpace'>
                            

                            <Col sm={12} md={12} xl={6} xxl={6}>
                                <label>7.  &nbsp;&nbsp;What are your goals using our services? </label><br></br><br></br>

                                {
                                    lists.map(item => (
                                    <>
                                        <label className='checkbox-label label-width'>
                                        <input
                                            type="checkbox"
                                            key={item.id}
                                            value={item.id}
                                            className='checkbox'
                                            onChange={(e)=> handleChange(e,item.value)}
                                        />&nbsp; {item.value}
                                        </label> <br></br>
                                        </>
                                    ))
                                }

                            </Col>


                            <Col sm={12} md={12} xl={6} xxl={6}>  
                            
                                <label>8. &nbsp;&nbsp;How serious are you to take your online presence to the next level?</label><br></br><br></br>
                            
                                
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select name="online_presence" {...register("online_presence" , { required: true })} className='select-months'>
                                    <option value="SURE">HIGH. We see great potential in this approach</option>
                                    <option value="MEDIUM">MEDIUM. Exploring the options</option>
                                    <option value="LOW">LOW. Testing the waters</option>
                                 
                                </select>

                            </Col>

                        
                            
                        </Row>

                        <Row className='extraRowSpace'>
                          <Buttons text="Submit" type="submit" />
                            {/* <input type="submit" /> */}
                        </Row>
                        
                      
                    
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
}
