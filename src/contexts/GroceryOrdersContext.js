import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchGroceryOrders, fetchOrderItems } from '../api/orders';

export const GroceryOrdersContext = createContext();

const GroceryOrdersContextProvider = (props) => {
    const [groceryOrders,setGroceryOrders] = useState([])
    const [groceryOrderItems,setGroceryOrderItems] = useState([])

    const setGroceryOrdersData = ()=>{
        fetchGroceryOrders().then((res)=>{
            setGroceryOrders(res)
            console.log(res)
        })
    }

    const setGroceryOrderItemsData = (order_id)=>{
        if(order_id == null){
            setGroceryOrderItems([])
        }else{
            fetchOrderItems(order_id).then((res)=>{
                setGroceryOrderItems(res)
            })
        }
        
    }

    return (
        <GroceryOrdersContext.Provider value={{
            groceryOrders, setGroceryOrdersData,
            groceryOrderItems, setGroceryOrderItemsData
        }}>
            {props.children}
        </GroceryOrdersContext.Provider>
    );
};


export default GroceryOrdersContextProvider;