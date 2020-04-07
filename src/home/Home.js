import React, {useState} from "react";
import {ThemeProvider} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Typography from "@material-ui/core/Typography";

import InputDate from "./InputDate";
import InputText from "./InputText";
import InputRange from "./InputRange";
import InputWeek from "./InputWeek";
import InputCheck from "./input-check/InputCheck";
import InputRadio from "./InputRadio";

function Home() {

  const [value, setValue] = useState("");

  const title = (titleText)=>{
    const theme = createMuiTheme();
    theme.typography.h6 = {
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2rem',
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: '2.5rem',
      },
    };

    return (
      <ThemeProvider theme={theme}>
        <Typography variant="h6">
          {titleText}
        </Typography>
      </ThemeProvider>
    )
  };

  function handleValueSend(receivedValue){
    setValue(receivedValue);
  }

  return (
    <div className="container">
      <div className="container col-xl-5 col-lg-6 col-md-8 col-sm-10 col-10">
        {title(`Input Type: ${value}`)}
        <InputCheck sendValue={handleValueSend}/>
        <InputRadio sendValue={handleValueSend}/>
        <InputRange sendValue={handleValueSend}/>
        <InputText sendValue={handleValueSend}/>
        <InputDate sendValue={handleValueSend}/>
        <InputWeek sendValue={handleValueSend}/>

      </div>
    </div>
  )
}

export default Home;