import { useLocation, useParams } from 'react-router-dom';
import './Alerts.css';
import Footer from './Footer';
import Frame from './Frame';
import Topbox from './Topbox';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Alerts(){
    const [show, setShow] = useState(false);
    const [name,setname]=useState("");
    const [id,setid]=useState(0);
    

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    
    setShow(true);
    if(e.currentTarget.id==='first'){
        setname('Asus gseries');
        setid(100);
    }
    else if(e.currentTarget.id==='second'){
        setname('Television');
        setid(105);
    }
    else if(e.currentTarget.id==='third'){
        setname('Hp Laptop');
        setid(120);

    }
    else{
        setname('Oppo Mobiles');
        setid(127);
    }
    

    
}
 
    return (
        <div>

      <Frame/>
      <Topbox/>
      <span className='display-5 '>Alerts</span>
      <table class="table table-striped  w-75">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">id</th>
      <th scope="col">Quantity</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Asus gseries</td>
      <td>100</td>
      <td>10</td>
      <td><button id='first' onClick={handleShow}>Order</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Television</td>
      <td>105</td>
      <td>8</td>
      <td><button id='second' onClick={handleShow}>Order</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Hp Laptop</td>
      <td>120</td>
      <td>5</td>
      <td><button id='third' onClick={handleShow}>Order</button></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Oppo Mobiles</td>
      <td>127</td>
      <td>9</td>
      <td><button id='fourth' onClick={handleShow}>Order</button></td>
    </tr>
  </tbody>
</table>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Product</Modal.Title>
        </Modal.Header>
        <Modal.Body><b>{name}</b><br></br><br></br><div>id:{id}</div><br></br>
        <label>Supplier:&nbsp;&nbsp;</label><input id='waste' placeholder='Enter Supplier'></input><br></br><br></br>
        <lable>Quantity:&nbsp;&nbsp;</lable><input placeholder='Enter Quantity'></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Place Order
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Footer/>
      
        </div>
    );
}

export default Alerts;