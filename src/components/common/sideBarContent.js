import React from 'react';
import { Link } from 'react-router-dom';
import '../components.css';

function sideBarContent({routeClickHandler}) {
  return (
    <div style={{backgroundColor:"black", color:"white", height:"100vh"}}>
        <div style={{padding:"1rem", backgroundColor:"gray", marginBottom:"1rem"}}>
          <Link to="/">Listing</Link>
        </div>
        <div style={{padding:"1rem", backgroundColor:"gray"}}>
          <Link to="/newRoute">New Route</Link>    
        </div>
    </div>
  );
}

export default sideBarContent;
