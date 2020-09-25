import React, { useState, forwardRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { fetchGroceries, addProducts, deleteProducts, updateProducts } from '../../../api/products';
import { GroceryAndPalengkeContext } from '../../../contexts/GroceryAndPalengkeContext';
import { tableIcons, tablePageSizeoptions } from '../../../utils/utils';

const GroceryProducts = () => {

    const [state, setState] = useState({});
    // const [groceryProducts, setGroceryProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [columns, setColumns] = useState([
        { title: 'Product Name', field: 'name' },
        { title: 'Description', field: 'description' },
        { title: 'Unit', field: 'unit' },
    ])
    const { groceryProducts, addGroceryData, removeGroceryData, updateGroceryData,groceryLoading } = useContext(GroceryAndPalengkeContext)

    const options = {
        pageSize: 10,
    };

    return (
        <div>
            <MaterialTable
                icons={tableIcons}
                options={tablePageSizeoptions}
                title="Grocery Products"
                columns={columns}
                data={groceryProducts}
                isLoading={groceryLoading}
                onRowClick={(e) => alert(e)}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise(async (resolve) => {
                            let res = await addProducts(newData, "grocery");
                            if (res.message == "Product Successfully Added") {
                                addGroceryData(newData)
                            }
                            resolve()
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(async (resolve) => {
                            await updateProducts(newData)
                            updateGroceryData(oldData, newData)
                            resolve()
                        }),
                    onRowDelete: (oldData) =>
                        new Promise(async (resolve) => {
                            await deleteProducts(oldData.id)
                            removeGroceryData(oldData.id)
                            resolve()
                        }),
                }}
            />
        </div>
    );
};

GroceryProducts.propTypes = {};

export default GroceryProducts;