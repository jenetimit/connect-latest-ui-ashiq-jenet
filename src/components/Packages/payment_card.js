import React ,{useState}from 'react';
import { Card } from 'react-bootstrap'
import { Row,Col, Container } from 'react-bootstrap'
import '../../style/package.scss'

export default function Payment_card() {

    const [isChecked, setIsChecked] = useState(false);

  return (
  
  <div>
      <Card className='payment_card'>
        <Container className='space-align'>
            <p>Standard</p>
            <p>₹ 1740</p>
            
        </Container>
        <hr style={{textAlign:'center'}} className='mx-5'></hr>

        <Container className='space-align'>
            <p>Total</p>
            <p>₹ 1740</p>
            
        </Container>

        
        <Container style={{marginTop:'1rem'}}>

            <p style={{fontWeight:'600'}}>Credit Card/Debit Card/Netbanking</p>

            <input type="checkbox" id="razorpay" name="razorpay" value={isChecked} checked={isChecked} onChange={handleChange} /> &nbsp;   Pay Securely by Credit or Debit card or Internet <br></br> &nbsp; Banking through Razorpay
        </Container> 

      </Card>
  </div>
  
  );


  function handleChange()
  {
    console.log("checkbox",isChecked);
    setIsChecked(!isChecked);
      
  }
}
