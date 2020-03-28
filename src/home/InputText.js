import React, {useState} from "react";

function InputText(props) {

  const [value, setValue] = useState("");

  function handleChange(event) {
    event.preventDefault();
    const newValue = event.target.value;
    setValue(newValue);
    props.sendValue(newValue);
  }

  return (
    <input className="form-control mb-3 text-success" placeholder="Enter some text"
           type="text" value={value} onChange={handleChange}/>
  )
}

export default InputText;