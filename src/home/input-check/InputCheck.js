import React, {useState} from "react";
import "./InputCheck.css"

function InputCheck(props) {
  const c = {transparent:"Transparent", filter: "Filter", resize: "Resize"};
  const initial = {transparent:false, filter: false, resize: false};
  const [value, setValue] = useState(initial);

  function handleChange(event) {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (value === c.transparent) setValue(old=>{return {...old, transparent:isChecked}});
    if (value === c.filter) setValue(old=>{return {...old, filter:isChecked}});
    if (value === c.resize) setValue(old=>{return {...old, resize:isChecked}});
    props.sendValue(`${value} - ${isChecked}`);
  }

  const checkBox = (cbName, cbValue)=>{
    return (
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id={cbName} value={cbName}
               onChange={handleChange} checked={cbValue}/>
        <label className="form-check-label ml-1" htmlFor={cbName}>{cbName}</label>
      </div>
    )
  };

  return (
    <div className="container border border-success rounded py-1 mt-3
                    d-flex flex-row justify-content-around align-items-center">
      <div>
        {checkBox(c.transparent, value.transparent)}
        {checkBox(c.filter, value.filter)}
        {checkBox(c.resize, value.resize)}
      </div>

      <div className="w-50 align-items-end d-flex justify-content-center">
        <img className="profile_image" src="images/profile.png" alt="img"/>
      </div>
    </div>
  )
}

export default InputCheck;

