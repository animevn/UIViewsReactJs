import React, {useState} from "react";
import "./Home.css"
import InputDate from "./InputDate";
import InputText from "./InputText";
import InputRange from "./InputRange";
import InputWeek from "./InputWeek";
import InputCheck from "./input-check/InputCheck";
import InputRadio from "./input-radio/InputRadio";

function Home() {

  const [value, setValue] = useState("");

  const title = (titleText)=>{
    return (
      <p className="my-text text-center text-success font-weight-bold">{titleText}</p>
    )
  };

  function handleValueSend(receivedValue){
    setValue(receivedValue);
  }

  return (
    <div className="container">
      <div className="container col-xl-5 col-lg-6 col-md-8 col-sm-10 col-10">
        {title(`Input Type: ${value}`)}
        <InputCheck sendValue={handleValueSend}/>
        <InputRadio sendValue={handleValueSend}/>
        <InputRange sendValue={handleValueSend}/>
        <InputText sendValue={handleValueSend}/>
        <InputDate sendValue={handleValueSend}/>
        <InputWeek sendValue={handleValueSend}/>

      </div>
    </div>
  )
}

export default Home;