import React, { createContext, useState } from 'react';

export const GroceryAndPalengkeContext = createContext();

const GroceryAndPalengkeContextProvider = (props) => {
    const [groceryProducts, setGroceryProducts] = useState([])
    const [palengkeProducts, setPalengkeProducts] = useState([])
    const [groceryLoading, setGroceryLoading] = useState(true)
    const [palengkeLoading, setPalengkeLoading] = useState(true)

    const setGroceryDataLoading = (data) => {
        setGroceryLoading(data)
    }
    const setPalengkeDataLoading = (data) => {
        setPalengkeLoading(data)
    }

    const setGroceryData = (data) => {
        setGroceryProducts(data)
    }

    const addGroceryData = (data) => {
        setGroceryProducts(groceryProducts => [...groceryProducts, data])
    }

    const removeGroceryData = (id) => {
        setGroceryProducts(groceryProducts.filter(prod => prod.id !== id))
    }

    const updateGroceryData = (oldData, newData) => {
        var prevState = [...groceryProducts];
        var index = prevState.indexOf(oldData)
        prevState[index] = newData
        setGroceryProducts(prevState)
    }

    const setPalengkeData = (data) => {
        setPalengkeProducts(data)
    }

    const addPalengkeData = (data) => {
        setPalengkeProducts(palengkeProducts => [...palengkeProducts, data])
    }

    const removePalengkeData = (id) => {
        setPalengkeProducts(palengkeProducts.filter(prod => prod.id !== id))
    }

    const updatePalengkeData = (oldData, newData)=>{
        var prevState = [...palengkeProducts];
        var index = prevState.indexOf(oldData)
        prevState[index] = newData
        setPalengkeProducts(prevState)
    }


    return (
        <GroceryAndPalengkeContext.Provider value={{
            groceryLoading, palengkeLoading, setGroceryDataLoading, setPalengkeDataLoading,
            groceryProducts, palengkeProducts,
            setGroceryData, addGroceryData, removeGroceryData, updateGroceryData, 
            setPalengkeData, addPalengkeData,removePalengkeData,updatePalengkeData
        }}>
            {props.children}
        </GroceryAndPalengkeContext.Provider>
    )
}

export default GroceryAndPalengkeContextProvider;