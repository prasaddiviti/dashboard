import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);/*
<BrowserRouter>
<Routes>
<Route index element={<Home/>}/>
<Route path="/Home" element={<Home/>}/>
<Route path="/Order" element={<Order/>}/>
<Route path="/Pro" element={<Pro/>}/>
</Routes>
</BrowserRouter>
function output(){
  return(
    <div>
      <Header />
      <App />
    </div>
  )
}
ReactDOM.render(<output />,document.getElementById("root"))*/
//style={{ backgroundImage: `url(${homepic})` }}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
