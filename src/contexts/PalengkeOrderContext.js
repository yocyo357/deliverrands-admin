import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchOrderItems, fetchPalengkeOrders } from '../api/orders';

export const PalengkeOrdersContext = createContext();

const PalengkeOrdersContextProvider = (props) => {
    const [palengkeOrders,setPalengkeOrders] = useState([])
    const [palengkeOrderItems,setPalengkeOrderItems] = useState([])

    const setPalengkeOrdersData = ()=>{
        fetchPalengkeOrders().then((res)=>{
            setPalengkeOrders(res)
            console.log(res)
        })
    }

    const setPalengkeOrderItemsData = (order_id)=>{
        if(order_id == null){
            setPalengkeOrderItems([])
        }else{
            fetchOrderItems(order_id).then((res)=>{
                setPalengkeOrderItems(res)
            })
        }
        
    }

    return (
        <PalengkeOrdersContext.Provider value={{
            palengkeOrders, setPalengkeOrdersData,
            palengkeOrderItems, setPalengkeOrderItemsData
        }}>
            {props.children}
        </PalengkeOrdersContext.Provider>
    );
};


export default PalengkeOrdersContextProvider;