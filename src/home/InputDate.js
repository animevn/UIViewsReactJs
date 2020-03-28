import React, {useState} from "react";

function InputDate(props) {

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate());
  const initialDate = currentDate.toISOString().substr(0,10);

  const [value, setValue] = useState(initialDate);

  function handleChange(event) {
    event.preventDefault();
    const newValue = event.target.value;
    setValue(newValue);
    props.sendValue(newValue);
  }

  return (
    <input className="form-control mb-3 text-success"
           type="date" value={value} onChange={handleChange}/>
  )
}

export default InputDate;