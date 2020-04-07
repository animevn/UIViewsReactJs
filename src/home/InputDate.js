import "date-fns"
import React, {useState} from "react";
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider, KeyboardTimePicker,
  KeyboardDatePicker} from "@material-ui/pickers";
import Box from "@material-ui/core/Box";


function InputDate(props) {

  // const currentDate = new Date();
  // currentDate.setDate(currentDate.getDate());
  // const initialDate = currentDate.toISOString().substr(0,10);

  const [value, setValue] = useState(new Date());

  function handleChange(date) {
    setValue(date);

    props.sendValue(date.toLocaleString());
  }

  return (

    <Box display="flex" flexDirection="column" justifyContent="center" p={3}
         border={1} borderColor="orange" borderRadius={5} mt={2}>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker margin="normal" format="MM/dd/yyyy" value={value} onChange={handleChange}
                            id="date-picker-dialog"
                            KeyboardButtonProps={{'aria-label': 'change date'}}/>

        <KeyboardTimePicker margin="normal" value={value} onChange={handleChange}
                            id="date-picker-dialog"
                            KeyboardButtonProps={{'aria-label': 'change time'}}/>
      </MuiPickersUtilsProvider>

    </Box>
  )
}

export default InputDate;