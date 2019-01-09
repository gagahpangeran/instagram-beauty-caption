import React, { Component } from "react";
import {
  Button,
  Grid,
  Slide,
  Snackbar,
  TextField,
  Typography
} from "@material-ui/core/";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import copy from "copy-to-clipboard";
import "./App.css";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class App extends Component {
  state = {
    text: "",
    open: false
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleClick = () => {
    const newText = this.state.text.split("\n");
    this.setState(
      {
        text: newText.join("\u2063\n")
      },
      () => {
        copy(this.state.text);
        this.handleClickOpen();
      }
    );
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  theme = createMuiTheme({
    palette: {
      primary: { main: "#17bebb" },
      secondary: { main: "#cd5334" }
    },
    typography: { useNextVariants: true }
  });

  render() {
    console.log(this.state.text);

    return (
      <div className="App">
        <MuiThemeProvider theme={this.theme}>
          <header>
            <Typography variant="h3">Instagram Beauty Caption</Typography>
          </header>

          <Grid container justify="center" className="main">
            <Grid item md={6} xs={12}>
              <TextField
                label="Instagram Beauty Caption"
                placeholder="Type Your Caption"
                multiline
                fullWidth
                margin="normal"
                variant="outlined"
                value={this.state.text}
                onChange={this.handleChange}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleClick}
              >
                Create
              </Button>
            </Grid>
          </Grid>

          <footer>
            <Typography variant="h6">
              There is a bug or you want to contribute? Create issues or submit
              your pull request{" "}
              <a
                href="https://github.com/gagahpangeran/instagram-beauty-caption"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </Typography>
          </footer>

          <Snackbar
            className="toast"
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={this.state.open}
            onClose={this.handleClose}
            autoHideDuration={1500}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={<span id="message-id">Caption Copied!</span>}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
