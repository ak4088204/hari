

import Frame from './Frame';
import Topbox from './Topbox';
import Footer from "./Footer"
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
 function Header(){
  let navigate=useNavigate();
    
   
     return (
       
      <div>
    
      <Frame/>
      <Topbox/>

      <div id='card' class="row row-cols-1 row-cols-md-3 g-4">
  <div onClick={()=>navigate("/products")} class="col  ">
    <div class="card h-100 ">
      
      <div class="card-body text-bg-primary rounded">
        <h5 class="card-title">Products</h5>
        <p class="card-text">This contains add,update,delete products.</p>
      </div>
    </div>
  </div>
  <div onClick={()=>navigate("/alerts")}  class="col">
    <div class="card h-100">
      
      <div class="card-body text-bg-secondary rounded">
        <h5 class="card-title">Inventory/Alerts</h5>
        <p class="card-text">Showing the available quantity and monitoring Inventory</p>
      </div>
    </div>
  </div>
  
  <div onClick={()=>navigate("/location")} class="col">
    <div class="card h-100">
      
      <div class="card-body text-bg-success rounded">
        <h5 class="card-title">Locations</h5>
        <p class="card-text">Location management for products</p>
      </div>
    </div>
  </div>
  <div onClick={()=>navigate("/sales")} class="col">
    <div class="card h-100">
    
      <div class="card-body text-bg-danger rounded">
        <h5 class="card-title">Sales</h5>
        <p class="card-text">Showing the Sales and Revenue details</p>
      </div>
    </div>
  </div>
  <div onClick={()=>navigate("/shipments")}  class="col">
    <div class="card h-100">
      
      <div class="card-body text-bg-warning rounded">
        <h5 class="card-title">Shipments</h5>
        <p class="card-text">Showing the details of shipments of the products</p>
      </div>
    </div>
  </div>
  <div onClick={()=>navigate("/report")}  class="col">
    <div class="card h-100">
      
      <div class="card-body text-bg-info rounded">
        <h5 class="card-title">Reports</h5>
        <p class="card-text">This generates the report based on the sales and revenue.</p>
      </div>
    </div>
  </div>
</div>
      <Footer/>
      
       
    
     
    
     
      
      
   
     
     
      </div>
     );
 }

 export default Header;