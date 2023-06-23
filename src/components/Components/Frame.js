import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHome,FaCube,FaCompactDisc,FaMapMarker,FaShoppingBag,FaTruck,FaRegNewspaper,FaBarcode,FaEnvira } from "react-icons/fa";
import "./frame.css"
import {  useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Frame = () => {

  let navigate=useNavigate();
  const ids=useLocation();
  
  const [dash,setdash]=useState("");
  const [pro,setpro]=useState("");
  const [inv,setinv]=useState("");
  const [loc,setloc]=useState("");
  const [sal,setsal]=useState("");
  const [ship,setship]=useState("");
  const [rep,setrep]=useState("");
  const [bar,setbar]=useState("");

  useEffect(()=>{
    if(ids.pathname==='/alerts'){
      setinv("normal");
      setpro("");
      setloc("");
      setsal("");
      setship("");
      setrep("");
      setbar("");
      setdash("");
    }
    else if(ids.pathname==='/dashboard'){
      setdash("normal");
      setpro("");
      setloc("");
      setsal("");
      setship("");
      setrep("");
      setbar("");
      setinv("");
    }
    else if(ids.pathname==='/shipments'){
      setship("normal");
      setpro("");
      setloc("");
      setsal("");
      setinv("");
      setrep("");
      setbar("");
      setdash("");
    }
    else if(ids.pathname==='/products'){
      setship("");
      setpro("normal");
      setloc("");
      setsal("");
      setinv("");
      setrep("");
      setbar("");
      setdash("");
    }
    else if(ids.pathname==='/location'){
      setship("");
      setpro("");
      setloc("normal");
      setsal("");
      setinv("");
      setrep("");
      setbar("");
      setdash("");
    }
    else if(ids.pathname==='/sales'){
      setship("");
      setpro("");
      setloc("");
      setsal("normal");
      setinv("");
      setrep("");
      setbar("");
      setdash("");
    }
    else if(ids.pathname==='/report'){
      setship("");
      setpro("");
      setloc("");
      setsal("");
      setinv("");
      setrep("normal");
      setbar("");
      setdash("");
    }
    

    
  },);
 
  return (
    <Container fluid > 
      <Row>
        <Col id="col" lg={2} md={3} sm={4} xs={12} className="sidebar border-right" style={{ backgroundColor: 'lightblue',borderRight: '1px solid #ddd' }}>
          <div >
          
            <h3> <i className='icon'><FaEnvira></FaEnvira></i>Inventory Management</h3>
            <hr />
            <h5>Welcome Admin</h5>
            <hr/>
          </div>
          
          <ul >

          <li onClick={()=>navigate("/dashboard")} className={dash} ><i><FaHome></FaHome></i>Dashboard</li>
         <li onClick={()=>navigate("/products")}  className={pro} ><i><FaCube></FaCube></i>Products</li>
         <li onClick={()=>navigate("/alerts")} className={inv} ><i><FaCompactDisc></FaCompactDisc></i>Inventory/Alerts</li>
         <li onClick={()=>navigate("/location")} className={loc} ><i><FaMapMarker></FaMapMarker></i>Locations</li>
         <li onClick={()=>navigate("/sales")} className={sal}><i><FaShoppingBag></FaShoppingBag></i>Sales</li>
         <li onClick={()=>navigate("/shipments")} className={ship}><i><FaTruck></FaTruck></i>Shipments</li>
         <li onClick={()=>navigate("/report")} className={rep}><i><FaRegNewspaper></FaRegNewspaper></i>Reports</li>
         <li className={bar}><i><FaBarcode></FaBarcode></i>Barcode Scanner</li>
            
          </ul>
        </Col>
       
      </Row>
    </Container>
  );
}

export default Frame;
