import React from 'react'
import Navbar from '../components/header/navbar'
import MainScreen from '../pages/MainScreen/index'
import Footer from '../components/Footer/index'
import Registration from '../pages/Registration/index'
import PackageDetails from './Packages/package_details'
import Login from './Login/Index'
import Profile from './Profile/index'
import ResetPassword from './ResetPassword/index'
import {useLocation} from "react-router-dom"
import CustomizedList from './Packages/customizedList'
import StandardList from './Packages/standardList'
import Questionnaire from './Packages/Questionnaire'
import EventsCreation from '../pages/campaign/Events/createForm'
import MillionPosts from '../pages/campaign/millionPosts/index'
import StaticPosts from '../pages/campaign/Static-Campaign/index'
import Messages from '../pages/Messages/Index'
import Orders from '../pages/Orders/index'
import EachOrder from './Orders/eachOrder'
import Relatedmsgs from './Messages/Relatedmsgs'
import Enquiry from '../pages/Enquiry/Index'
import '../style/main.scss'
import Mainscreen from '../../src/pages/MainScreen/index'
import Sidebar from '../components/sidebar/sidebar'
import Abouts from '../../src/pages/About/index'
import Homescreen from '../../src/pages/home/index'
import Pillarscreen from '../../src/pages/About/pillars'
// import Service from '../../src/pages/services/index'
import Home from '../../src/pages/home/index'
import About from '../../src/pages/About/index'
// import Features from '../../pages/About/features'
import Service from '../../src/pages/services/index'
import Campaign from '../../src/pages/campaign/index'
import Package from '../../src/pages/Packages/index'
import Contact from '../../src/pages/contact/contact'
import Whyconnect from '../../src/pages/About/whyconnect'
import Pillars from '../../src/pages/About/pillars'
import Statistics from '../../src/pages/statistics/index';
import Requets from '../pages/pendingRequest/Index'
import Faq from '../../src/pages/faq/index'

import {
    BrowserRouter as Router,
  
    Route,

    Switch
  } from 'react-router-dom';

export default function Index() {
    let data = useLocation();

    return (
            <>
            <div>

            <Switch>
                <Route exact path="/">
                    
                <MainScreen />

                </Route>

                <Route exact path='/registration' >
                    
                    <Registration name={data.name}/>

                </Route>

                <Route path='/faq'>
                    <Faq />
                </Route>

                    <Route exact path='/pkg-details'>

                <PackageDetails />

                </Route>

                <Route exact path='/login'>

                    <Login />

                </Route>

                <Route exact path='/login/:standard-list'>

                <Login  />

                </Route>


                <Route exact path='/login/:customized-list'>

                <Login  />

                </Route>

                <Route exact path='/profile'>

                   <Profile />

                </Route>

                <Route exact path='/reset_password'>

                    <ResetPassword />

                    </Route>

                <Route exact path='/home'>

                    <MainScreen />

                </Route>

                <Route exact path='/order-view'>

                    <EachOrder order={data.order} type={data.type} />
                
                </Route>

                <Route exact path='/customized-list'>

                    <CustomizedList />

                </Route>


                <Route exact path='/standard-list'>

                    <StandardList />

                </Route>


                <Route exact path='/Questionnaire/:id'>

                   
                    <Questionnaire />
                </Route>

                <Route exact path='/events-creation'>

                    <EventsCreation />

                </Route>

                <Route exact path='/million-posts'>

                    <MillionPosts />

                </Route>

                <Route exact path='/staticPosts'>

                    <StaticPosts />

                </Route>
                
                <Route exact path='/messages'>

                    <Messages />

                </Route>

                <Route exact path='/orders'>

                    <Orders  />

                </Route>

                
                <Route exact path='/request/:type/:id'>

                    <Requets/>
                    
                </Route>

                {/* <Route exact path='/order-view'>
                    <EachOrder order={data.order} />
                </Route> */}

                <Route exact path='/related-msgs'>
                    <Relatedmsgs data={data.data}/>
                </Route>

                <Route exact path='/gene-enquiry'>
                    <Enquiry/>
                </Route>

                <Route exact path='/sidebar'>
                    <Sidebar />
                </Route>
                
                <Route exact path="/Home1" component={Home}/>
                <Route exact path="/About1" component={About}/>
                <Route exact path="/whyconnect1" component={Whyconnect}/>
                <Route exact path="/service1" component={Service}/>
                <Route exact path="/package1" component={Package}/>
                <Route exact path="/statistics1" component={Statistics}/>
                <Route exact path="/contact1" component={Contact}/>
                <Route exact path="/faq1" component={Faq}/>


            </Switch>
            <Footer />
        </div>
        </>

    )
}
