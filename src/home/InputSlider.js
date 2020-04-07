import React, {useState} from "react";
import Slider from "@material-ui/core/Slider";
import Box from "@material-ui/core/Box";

function InputSlider(props) {

  const [value, setValue] = useState(30);

  function handleChange(event, newValue) {
    setValue(newValue);
    props.sendValue(newValue);
  }

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" p={3}
         border={1} borderColor="orange" borderRadius={5} mt={2}>

      <Slider value={value} onChange={handleChange} min={1} max={50}
              aria-labelledby="continuous-slider"/>

    </Box>
  )
}

export default InputSlider;