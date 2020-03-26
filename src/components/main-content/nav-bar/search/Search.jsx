import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./search.css";
const Search = props => {
  return (
    <div className="container">
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        className="text-field"
      />
    </div>
  );
};

export default Search;
