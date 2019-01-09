import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Slide,
  TextField
} from "@material-ui/core/";
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

  transition = () => {
    return <Slide direction="up" />;
  };

  render() {
    console.log(this.state.text);

    return (
      <div className="App">
        <Grid container justify="center">
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
              color="primary"
              onClick={this.handleClick}
            >
              Create
            </Button>
          </Grid>
        </Grid>

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Caption Copied!
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default App;
