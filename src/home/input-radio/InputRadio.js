import React, {useEffect, useState} from "react";

function InputRadio(props) {

  const c = {option1:"Asia/Ho_Chi_Minh", option2: "Europe/Berlin", option3: "America/New_York"};
  const [value, setValue] = useState(c.option1);
  const [time, setTime] = useState();

  useEffect(()=>{
    const interval = setInterval(()=> {
      setTime(new Date().toLocaleTimeString("en-US", {timeZone: value}))
    }, 1000);
    return ()=>{
      clearInterval(interval)
    };
    // eslint-disable-next-line
  },[value]);

  function handleChange(event) {
    const eventValue = event.target.value;
    setValue(eventValue);
    props.sendValue(eventValue);
  }

  const radio = (rName, rValue)=>{
    return (
      <div className="custom-control custom-radio">
        <input type="radio" className="custom-control-input" id={rValue} value={rValue}
               checked={value === rValue} onChange={handleChange}/>
        <label className="custom-control-label" htmlFor={rValue}>{rName}</label>
      </div>
    )
  };

  return (
    <div className="container border border-success rounded py-1 mt-3
                    d-flex flex-row justify-content-around align-items-center">
      <div className='w-50 align-items-start'>
        {radio("Saigon", c.option1)}
        {radio("Berlin", c.option2)}
        {radio("New York", c.option3)}
      </div>
      <div className="w-50 align-items-end d-flex justify-content-center">
        {time}
      </div>
    </div>
  )
}

export default InputRadio;

