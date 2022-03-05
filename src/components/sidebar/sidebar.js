import React,{useState} from 'react'
import '../../style/sidebar.scss'
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import Pillars from '../../pages/About/pillars';
import { HashLink as Link} from 'react-router-hash-link';

export default function Sidebar() {

  let history = useHistory();

  const [isOpen, setIsopen] = useState(false);

  const sidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }


  return (
    <>
    <div>
      <div className="container-fluid">
                
              
                {/* <div className="btn btn-primary" onClick={sidebar} ></div> */}
                <FiMenu style={{cursor: "pointer"}} size={40} onClick={sidebar}/>
                <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <h4 className="mb-0"></h4>
                        <AiOutlineClose size={40} onClick={sidebar}/>
                        {/* <div className="btn btn-primary" onClick={sidebar} ><i className="fa fa-close"></i></div> */}
                    </div>
                    <div className="sd-body">
                        <ul>
                            {/* <li>
                                <Link smooth className="sd-link" to="#Home1">Home</Link>
                            </li> */}
                            <li>
                                <Link smooth className="sd-link" to="#About1">About Us</Link>
                            </li>
                            {/* <li>
                                <Link smooth className="sd-link" to="#faq1">FAQ</Link>
                            </li> */}
                            <li>
                              <Link smooth className="sd-link" to="#whyconnect1">Why Connect</Link>
                            </li>
                            <li>
                              <Link smooth className="sd-link" to="#statistics1">Statistics</Link>
                            </li>
                            <li>
                              <Link smooth className="sd-link" to="#service1">Services</Link>
                            </li>
                            <li>
                              <Link smooth className="sd-link" to="#package1">Packages</Link>
                            </li>
                            <li>
                              <Link smooth className="sd-link" to="#contact1">Contact</Link>
                            </li>
                            {/* <li><a className="sd-link">Contact</a></li> */}
                            <li><a className="sd-link">Admin</a></li>
                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={sidebar} ></div>
       </div>
       
    </div></>

  )
  function gotoabout(){
    <Pillars />
  }
}
