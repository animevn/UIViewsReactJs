import React, {useState} from "react";

function InputWeek(props) {

  const [value, setValue] = useState("");

  function handleChange(event) {
    event.preventDefault();
    const newValue = event.target.value;
    setValue(newValue);
    props.sendValue(newValue);
  }

  return (
    <input className="form-control mb-3 text-success" placeholder="Enter some text"
           type="week" value={value} onChange={handleChange}/>
  )
}

export default InputWeek;