import React from 'react'
import Button from '@mui/material/Button';
import "./Home.css";
import UserDetails from './components/UserDetails';

const Home = () => {
  return (
    <div className='home'>
        <div className='homeBtn'>
          <Button variant="outlined" sx={{borderColor:"white", color:"white"}}>Outlined</Button>
          <Button variant="outlined" sx={{borderColor:"white", color:"white"}}>Outlined</Button>
        </div>
        <h1>Get and Update User Details</h1>
        <UserDetails/>
    </div>
  )
}

export default Home