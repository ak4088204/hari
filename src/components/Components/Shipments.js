import { useEffect } from 'react';
import Footer from './Footer';
import Frame from './Frame';
import './Shipments.css';
import Topbox from './Topbox';
import axios from 'axios';
import { useState } from 'react';
function Shipments(){
  const [datas,setdatas]=useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/all') // Replace with your backend endpoint
      .then(response => {
        setdatas(response.data);
        console.log(datas);
      })
      .catch(error => {
        console.error(error);
      });
  },);
    return(
        <div>
            <Frame/>
            <Topbox/>
  
           
            <span className='display-5 '>Shipments</span>
            <table class="table table-striped  w-75">
             
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">description</th>
      <th scope="col">price</th>
      <th scope='col'>quantity</th>
      <th scope='col'>location</th>
      <th scope='col'>barcode</th>
    </tr>
  </thead>
  <tbody>
  
              {
                datas.map((element,key)=>{
                  return(<tr>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.description}</td>
                    <td>{element.price}</td>
                    <td>{element.quantity}</td>
                    <td>{element.location}</td>
                    <td>{element.barcode}</td>
                    </tr>
                  );
                })
              }
            
   
  </tbody>
</table>

            <Footer/>
        </div>
    );
}

export default Shipments;