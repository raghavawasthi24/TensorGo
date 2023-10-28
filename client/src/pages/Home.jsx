import React from 'react'
import Button from '@mui/material/Button';
import "./Home.css";
import UserDetails from './components/UserDetails';

const Home = () => {
  return (
    <div className='home'>
        <h1>Get and Update User Details</h1>
        <Button variant="outlined" className='button'>Outlined</Button>
        <UserDetails/>
    </div>
  )
}

export default Home