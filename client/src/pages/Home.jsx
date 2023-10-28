import React from 'react'
import Button from '@mui/material/Button';
import "./Home.css";
import UserDetails from './components/UserDetails';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const fetch = () => {
    axios.get("http://localhost:5000/api/getUsers").then((res) => {
      console.log(res.data);
      toast.success("Data Fetched Successfully");
    });
  }

  const download = () => {
    axios.post("http://localhost:5000/api/export").then((res) => {
      console.log(res.data);
      toast.success("Data exported Successfully");
    });
  }
  return (
    <div className='home'>
        <div className='homeBtn'>
          <Button variant="outlined" sx={{borderColor:"white", color:"white"}} onClick={fetch}>Fetch Data</Button>
          <Button variant="outlined" sx={{borderColor:"white", color:"white"}} onClick={download}>Download AS CSV</Button>
        </div>
        <h1>Get and Update User Details</h1>
        <UserDetails/>
        <ToastContainer />
    </div>
  )
}

export default Home