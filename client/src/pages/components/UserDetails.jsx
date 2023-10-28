import React, { useEffect, useState } from "react";
import "./UserDetails.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  TableCell,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableBody,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";

const UserDetails = () => {
  const columns = ["ID", "Name", "Email", "Gender", "Status"];
  const [userlist, setuserlist] = useState([]);
  const [currentUserDetails, setCurrentUserDetails] = useState();
  const [openpopUp, setOpenpopUp] = useState(false);

  useEffect(() => {
    axios.get("https://tensorflow.onrender.com/api/getUsers").then((res) => {
      console.log(res.data);
      setuserlist(res.data.allUsers);
    });
  }, []);

  const currentUser = (data) => {
    console.log(data);
    setCurrentUserDetails(data);
    setOpenpopUp(true);
  };

  const updatehandler = (e) => {
    console.log(e.target.value);
    setCurrentUserDetails({
      ...currentUserDetails,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    console.log(currentUserDetails);
    axios
      .put(
        `https://tensorflow.onrender.com/api/updateUser/${currentUserDetails._id}`,
        currentUserDetails
      )
      .then((res) => {
        console.log(res.data);
        toast.success("User Updated Successfully");
        setOpenpopUp(false);
      });
  };
  return (
    <div className="userDetails">
      <TableContainer sx={{ width: "90vw" }}>
        <Table size="small">
          <TableHead sx={{ color: "white" }}>
            <TableRow>
              {columns.map((val) => {
                return (
                  <TableCell
                    size="small"
                    sx={{ textAlign: "center", color: "white" }}
                  >
                    {val}
                  </TableCell>
                );
              })}
              <TableCell sx={{ width: "0.5rem" }}></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {userlist.map((val, daysInd) => {
              return (
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      width: "1rem",
                      color: "white",
                      padding: "1rem 0",
                    }}
                  >
                    {val.id}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      width: "1rem",
                      color: "white",
                      padding: "1rem 0",
                    }}
                  >
                    {val.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      width: "1rem",
                      color: "white",
                      padding: "1rem 0",
                    }}
                  >
                    {val.email}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      width: "1rem",
                      color: "white",
                      padding: "1rem 0",
                    }}
                  >
                    {val.gender}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      width: "1rem",
                      color: "white",
                      padding: "1rem 0",
                    }}
                  >
                    {val.status}
                  </TableCell>
                  <TableCell>
                    <EditIcon
                      sx={{ color: "white", backgroundColor: "#222831" }}
                      onClick={() => currentUser(val)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {openpopUp ? (
        <div className="popUp">
          <div className="popBox">
            <CancelIcon
              className="cancelIcon"
              onClick={() => setOpenpopUp(false)}
            />
            <div className="popCont">
              <label>Id</label>
              <input
                type="text"
                name="id"
                value={currentUserDetails?.id}
                onChange={updatehandler}
              />
            </div>
            <div className="popCont">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={currentUserDetails?.name}
                onChange={updatehandler}
              />
            </div>
            <div className="popCont">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={currentUserDetails?.email}
                onChange={updatehandler}
              />
            </div>
            <div className="popCont">
              <label>Gender</label>
              <input
                type="text"
                name="gender"
                value={currentUserDetails?.gender}
                onChange={updatehandler}
              />
            </div>
            <div className="popCont">
              <label>Status</label>
              <input
                type="text"
                name="status"
                value={currentUserDetails?.status}
                onChange={updatehandler}
              />
            </div>
            <Button
              variant="outlined"
              sx={{borderColor:"white", color:"white"}}
              onClick={submitHandler}
            >
              Update
            </Button>
          </div>
        </div>
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default UserDetails;
