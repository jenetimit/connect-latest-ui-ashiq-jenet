import React,{useState} from 'react';
import '../../style/customizedlist.scss'

export default function Servicelist(props) {

    const [isChecked, setIsChecked] = useState(false);
    const service_list = [];

  return (
    <>    
      <div>
          <input type="checkbox" id={props.id} name="service_list = [{}];
" value={props.name} checked={isChecked} onClick={(e)=>handleChange(e)} /> {props.name}

      </div>

    
    </>

  );


  function handleChange(e)
  {
    console.log("checkbox",e.target.checked);
    service_list.push(1,e.target.value);
    setIsChecked(!isChecked);

    const doubled = service_list.map((number) => number);
    console.log("doubled",doubled);
      
  }


  

}
