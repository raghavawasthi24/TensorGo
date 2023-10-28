import React, { useEffect, useState } from "react";
import "./UserDetails.css";
import Card from "../../components/Card";
import axios from "axios";  

const UserDetails = () => {
  const columns =["ID", "Name", "Email", "Gender", "Status","" ];
  const [userlist,setuserlist] = useState([])
  useEffect(()=>{
     axios.get("https://tensorflow.onrender.com/api/getUsers")
     .then((res)=>{
      console.log(res.data)
      setuserlist(res.data);
     })
  },[])
  return (
    <div className="userDetails">
      <div className="userBox">
        {
          columns.map((col,key)=>{
            return(
              <p key={key}>{col}</p>
            )
          })
        }
      </div>
      <div>
        {
          userlist.map((item,key)=>{
            return(
              <div key={key}>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.gender}</p>
                <p>{item.status}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default UserDetails;
