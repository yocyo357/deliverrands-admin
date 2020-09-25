import React, { createContext, useState } from 'react';

export const ErrandsOrdersContext = createContext();
const [groceryProducts, setGroceryProducts] = useState([])

const ErrandsOrdersContextProvider = () => {
    const [errandsOrders,setErrandsOrders] = useState([])
    
    

    return (
        <div>
            
        </div>
    );
};


export default ErrandsOrdersContextProvider;