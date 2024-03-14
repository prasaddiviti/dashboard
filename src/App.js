import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Pro from './pages/Pro'
import Order from './pages/Order'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
<Routes>
<Route index element={<Home/>}/>
<Route path="/Home" element={<Home/>}/>
<Route path="/Order" element={<Order/>}/>
<Route path="/Pro" element={<Pro/>}/>

</Routes>
</BrowserRouter>

    </div>
    
  );

}

export default App;
