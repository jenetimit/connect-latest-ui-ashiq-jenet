import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './pages/index'
import Navbar from './components/header/navbar';
import Home from './pages/home/index'
import About from './pages/About/index'
// import Features from '../../pages/About/features'
import Service from './pages/services/index'
import Campaign from './pages/campaign/index'
import Package from './pages/Packages/index'
import Contact from './pages/contact/contact'
import Whyconnect from './pages/About/whyconnect'
import Pillars from './pages/About/pillars'
import Statistics from './pages/statistics/index';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Index />
      </div>
    
      </Router>  
    </>
  );
}

export default App;
