import React, { Component } from "react";
import Header from "./layout/Header";
import CardGrid from "./layout/CardGrid";
import Footer from "./layout/Footer";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Sidebar from "./layout/Sidebar";

const mbTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#723b9a",
      main: "#430d6b",
      dark: "#1a003f",
      contrastText: "#fff"
    },
    secondary: {
      light: "#403482",
      main: "#090e55",
      dark: "#00002d",
      contrastText: "#fff"
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={mbTheme}>
        <Sidebar>
          <CardGrid />
        </Sidebar>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;
