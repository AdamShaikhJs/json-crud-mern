import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";

const UpdateData = () => {
  const [user, setUser] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await axios.get(`http://localhost:4000/users`);
    setUser(response.data);
    alert("data get");
  };

  const deleteData = async (id) => {
    const dataDelete = await axios.delete(`http://localhost:4000/users/${id}`);
    loadUserDetails();

    alert("data delete");
  };
  // const addUserDetails = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log(user);
  //     await axios.post("http://localhost:4000/users", user);
  //     alert("data inserted");
  //   } catch (err) {
  //     console.log("error");
  //   }
  // };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>phone</TableCell>
            <TableCell>email</TableCell>
            <TableCell>address</TableCell>
            <TableCell>gender</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((val) => {
            return (
              <TableRow>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.phone}</TableCell>
                <TableCell>{val.email}</TableCell>
                <TableCell>{val.address}</TableCell>
                <TableCell>{val.gender}</TableCell>
                <TableCell>
                  <Button color="secondary" onClick={() => deleteData(val.id)}>
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default UpdateData;
