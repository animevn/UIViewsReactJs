import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

function InputRadio(props) {

  const c = {option1:"Asia/Ho_Chi_Minh", option2: "Europe/Berlin", option3: "America/New_York"};
  const [value, setValue] = useState(c.option1);
  const [time, setTime] = useState();

  useEffect(()=>{
    const interval = setInterval(()=> {
      setTime(new Date().toLocaleTimeString("en-US", {timeZone: value}))
    }, 1000);
    return ()=>clearInterval(interval)
    // eslint-disable-next-line
  }, [value]);

  function handleChange(event) {
    const eventValue = event.target.value;
    setValue(eventValue);
    props.sendValue(eventValue);
  }

  const radio = (rName, rValue)=>{
    return (
      <RadioGroup>
        <FormControlLabel control={
          <Radio id={rValue} value={rValue} checked={value === rValue} onChange={handleChange}/>
        } label={rName} />
      </RadioGroup>
    )
  };

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" p={1}
         border={1} borderColor="orange" borderRadius={5} mt={2}>
      <Box width={0.6} p={1}>
        {radio("Saigon", c.option1)}
        {radio("Berlin", c.option2)}
        {radio("New York", c.option3)}
      </Box>
      <Box width={0.4} display="flex" flexDirection="column"
           justifyContent="center" alignItems="center">
        {time}
      </Box>
    </Box>
  )
}

export default InputRadio;

