import React, {useState} from "react";

function InputRange(props) {

  const [value, setValue] = useState(50);

  function handleChange(event) {
    event.preventDefault();
    const newValue = event.target.value;
    setValue(newValue);
    props.sendValue(newValue);
  }

  return (
    <input className="custom-range text-success my-3" type="range" min="0" max="100"
           value={value} onChange={handleChange}/>
  )
}

export default InputRange;