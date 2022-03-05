import React,{useEffect, useState} from 'react'
import { Container ,Row ,Col} from 'react-bootstrap'
import '../../style/home.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsList } from "react-icons/bs";
// import { FiUser,FiMenu } from "react-icons/fi";
import { useHistory} from "react-router-dom";
import { fadeInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite';
import { Dropdown } from 'react-bootstrap';
import Sidebar from '../sidebar/sidebar';
import Buttons from '../Packages/Buttons';
import '../../style/button.scss'
import { animateScroll as scroll } from "react-scroll";
import { HashLink as Link} from 'react-router-hash-link';
import { FaUserTie }  from "react-icons/fa";

var sessionstorage = require('sessionstorage');

console.log('token is',sessionstorage.getItem('token'));



const styles = StyleSheet.create({
    bounce: {
      animationName: fadeInUp,
      animationDuration: '10s'
    }
})

export default function Navbar(props,id) {

    let history = useHistory();

    return (
        <>
      
            <Container className='navbar'>
                    <img src={require('../../assets/images/logo.png')}  alt='header-logo-img' onClick={()=>home()}/>
                    
                    <div className='center-align'>

                    {/* {sessionStorage.getItem('token')} */}
                    {sessionStorage.getItem('token') !== null ? (
                            <>
                                 
                            {/* <BsList className='menu-nav' onClick={sidebar}/> */}
                               <Dropdown>
                                <Dropdown.Toggle variant="Secondary" id="dropdown-basic" className='menu-btn pointer'>
                                <FaUserTie size={40} className='menu-nav'/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{border: 'none'}}>
                                    <Dropdown.Item onClick={profileInfo}>Modify Profile</Dropdown.Item>
                                    <Dropdown.Item href="/faq">FAQ</Dropdown.Item>
                                    <Dropdown.Item href="/orders">My Orders</Dropdown.Item>
                                    <Dropdown.Item href="/messages">Messages</Dropdown.Item>
                                    <Dropdown.Item href="/gene-enquiry">General Enquiry</Dropdown.Item>
                                    <Dropdown.Item onClick={signout}>Signout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            
                            <Sidebar />
                              

                            {/* <a href='/sidebar' style={{padding: 10,color: '#fff',backgroundColor: '#000914',borderWidth: 1,borderColor: "#000914",borderRadius: 5}}>MENUBAR</a> */}

                            </>
                    ):(
                        <> 
                        
                        <Buttons text='login' click="/login"  style={{borderColor:props.color}} className='button-text px-5'>{props.text}</Buttons>
                       
                        <Buttons text='Register'  click="/registration"   style={{borderColor:props.color}} className='button-text px-5'>{props.text}</Buttons>

                        <Sidebar />
                        
                        </>
                    )
                            }
                    </div>

                    
                
            </Container>

            {/* <Container className='profile_div'>
                {console.log("hello")}
            </Container> */}
        </>
      
    )

    

    function profileInfo()
    {
        history.push('/profile');
    }

    function signout()
    {
        sessionstorage.clear();
        history.push('/login');
        history.go(0)
    }

    function home()
    {
        history.push('/home');
        // scroll.scrollToTop();
    }

}
