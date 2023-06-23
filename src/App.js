

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Components/Dashboard';
import Products from './components/Components/Products';
import Alerts from './components/Components/Alerts';
import Shipments from './components/Components/Shipments';
import Location from './Location';
import Sales from './Sales';
import Report from './Report';
function App() {
  
  return(
    <>
  <BrowserRouter>
  <Routes>
    <Route exact path="/dashboard" element={<Dashboard/>}/>
    <Route exact path='/products'  element={<Products/>} >
    </Route>
    <Route exact path='/alerts' element={<Alerts/>}></Route>   
    <Route exact path='/shipments' element={<Shipments/>}></Route>  
    <Route exact path='/location' element={<Location/>}></Route>
    <Route exact path='/sales' element={<Sales/>}></Route>
    <Route exact path='/report' element={<Report/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;

