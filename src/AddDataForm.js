import {
  FormControl,
  FormControlLabel,
  Radio,
  FormLabel,
  RadioGroup,
  FormGroup,
  InputLabel,
  Input,
  Button,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const initialValue = {
  name: "",
  phone: "",
  email: "",
  gender: "",
  address: "",
};

const AddDatForm = () => {
  const [user, setUser] = useState(initialValue);
  const { name, phone, email, gender, address } = user;

  const inputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/users", user);
      alert("data inserted");
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <>
      <FormGroup style={{ width: "40%", margin: "auto" }}>
        <Typography align="center" color="secondary" component="h1">
          Add Data
        </Typography>
        <FormControl>
          <InputLabel>name</InputLabel>
          <Input
            type="text"
            onChange={(e) => {
              inputChange(e);
            }}
            name="name"
            value={name}
          />
        </FormControl>
        <FormControl>
          <InputLabel>phone</InputLabel>
          <Input
            type="text"
            onChange={(e) => {
              inputChange(e);
            }}
            name="phone"
            value={phone}
          />
        </FormControl>
        <FormControl>
          <InputLabel>email</InputLabel>
          <Input
            type="text"
            onChange={(e) => {
              inputChange(e);
            }}
            name="email"
            value={email}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="gender"
            value={user.gender}
            onChange={inputChange}
            row
          >
            <FormControlLabel
              key="male"
              value="male"
              control={<Radio size="small" />}
              label="Male"
              required="required"
            />
            <FormControlLabel
              key="female"
              value="female"
              control={<Radio size="small" />}
              label="Female"
            />
            <FormControlLabel
              key="other"
              value="other"
              control={<Radio size="small" />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <InputLabel>address</InputLabel>
          <Input
            type="text"
            onChange={(e) => {
              inputChange(e);
            }}
            name="address"
            value={address}
          />
        </FormControl>
        <Button onClick={addUserDetails} color="primary">
          add
        </Button>
      </FormGroup>
    </>
  );
};

export default AddDatForm;
