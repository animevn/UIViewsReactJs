import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import "./InputCheck.css"

function InputCheck(props) {
  const c = {transparent:"Transparent", filter: "Filter", resize: "Resize"};
  const initialValue = {transparent:false, filter: false, resize: false};
  const [value, setValue] = useState(initialValue);
  const initialStyle = {transparent:"", filter: "", resize: ""};
  const [style, setStyle] = useState(initialStyle);

  function handleChange(event) {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (value === c.transparent) {
      setValue(old=>{return {...old, transparent:isChecked}});
      setStyle(isChecked? {...style, transparent:"transparent"} : {...style, transparent:""});
    }
    if (value === c.filter) {
      setValue(old=>{return {...old, filter:isChecked}});
      setStyle(isChecked? {...style, filter:"filter"} : {...style, filter:""});
    }
    if (value === c.resize) {
      setValue(old=>{return {...old, resize:isChecked}});
      setStyle(isChecked? {...style, resize:"scale-half"} : {...style, resize:""});
    }
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
    <Box display="flex" flexDirection="row" justifyContent="center" p={2}
         border={1} borderColor="orange" borderRadius={5}>
      <Box width={0.6} display="flex" flexDirection="column" justifyContent="center" p={2}>
        {checkBox(c.transparent, value.transparent)}
        {checkBox(c.filter, value.filter)}
        {checkBox(c.resize, value.resize)}
      </Box>

      <Box width={0.4} display="flex" flexDirection="row"
           justifyContent="center" alignItems="center">
        <img className={"profile_image " + style.transparent + " "
                        + style.filter + " " + style.resize}
             src="images/profile.png" alt="img"/>
      </Box>
    </Box>
  )
}

export default InputCheck;

