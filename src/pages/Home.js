
import {useNavigate} from "react-router-dom";
import './Home.css';
import React, { useState, useEffect } from 'react';
import { getTotalProductCount } from './Pro';
import erppic from './erppic.jpg';
export default function Home()
{
    const navigate = useNavigate();
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        const updatedProductCount = getTotalProductCount();
        setProductCount(updatedProductCount);
    }, []); 
    return(
        <div className="page-container" style={{ backgroundImage: `url(${erppic})` }}>
                <div className="button-container" >
             <button id="productsBtn1" onClick={()=>navigate("/Pro")}>product page</button>
             
             <button id="productsBtn2"  onClick={()=>navigate("/Order")}>Order page</button>
             </div>
             <div className="content-container">
                <h1 className="head1">Simplified ERP System</h1>
                <h2>Number of Orders: 3</h2>
               <h2>Number of Products :  {productCount}</h2>
               
                </div>
             </div>
             
       
    )
}
