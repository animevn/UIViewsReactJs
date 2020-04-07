import React, {useState} from "react";
import Box from "@material-ui/core/Box";

function InputWeek(props) {

  const [value, setValue] = useState();

  function handleChange(event) {
    event.preventDefault();
    const newValue = event.target.value;
    setValue(newValue);
    props.sendValue(newValue);
  }

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" p={3}
         border={1} borderColor="orange" borderRadius={5} mt={2}>

      <input className="form-control mb-3 text-success" placeholder="Enter some text"
             type="week" value={value} onChange={handleChange}/>

    </Box>

  )
}

export default InputWeek;