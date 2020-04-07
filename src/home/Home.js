import React, {useState} from "react";
import {ThemeProvider} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import InputDate from "./InputDate";
import InputText from "./InputText";
import InputRange from "./InputRange";
import InputWeek from "./InputWeek";
import InputCheck from "./input-check/InputCheck";
import InputRadio from "./InputRadio";


function Home() {

  const [value, setValue] = useState("");
  const width = {xs:10, sm:8, md:6, lg:3.5, xl:3};

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

    const paddingTop = {xs:2, sm:3, md:3.5, lg:4, xl:4};

    return (
      <ThemeProvider theme={theme}>
        <Box my={{...paddingTop}}>
          <Typography variant="h6" align="center">
            {titleText}
          </Typography>
        </Box>
      </ThemeProvider>
    )
  };

  function handleValueSend(receivedValue){
    setValue(receivedValue);
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid {...width}>
        {title(`Input Type: ${value}`)}
        <InputCheck sendValue={handleValueSend}/>
        <InputRadio sendValue={handleValueSend}/>
        <InputRange sendValue={handleValueSend}/>
        <InputText sendValue={handleValueSend}/>
        <InputDate sendValue={handleValueSend}/>
        <InputWeek sendValue={handleValueSend}/>
      </Grid>
    </Grid>
  )
}

export default Home;