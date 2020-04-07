import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Home from "./home/Home";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";

function App() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" minHeight="100vh">
      <Grid>
        <Header/>
        {/*app body goes down here*/}

        <Home/>

        {/*app body goes up here hahaha */}
      </Grid>
      <Footer/>
    </Box>
  );
}

export default App;
