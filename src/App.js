import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core/";
import copy from "copy-to-clipboard";
import "./App.css";

class App extends Component {
  state = {
    text: ""
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
      () => copy(this.state.text)
    );
  };

  render() {
    console.log(this.state.text);

    return (
      <div className="App">
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
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Create
        </Button>
      </div>
    );
  }
}

export default App;
