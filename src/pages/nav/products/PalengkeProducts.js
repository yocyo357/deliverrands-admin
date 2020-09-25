import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { tableIcons, tablePageSizeoptions } from '../../../utils/utils';
import { GroceryAndPalengkeContext } from '../../../contexts/GroceryAndPalengkeContext';
import { addProducts, deleteProducts, updateProducts } from '../../../api/products';

const PalengkeProducts = () => {

    const [columns, setColumns] = useState([
        { title: 'Product Name', field: 'name' },
        { title: 'Description', field: 'description' },
        { title: 'Unit', field: 'unit' },
    ])

    const {palengkeProducts,palengkeLoading,addPalengkeData,removePalengkeData,updatePalengkeData} = useContext(GroceryAndPalengkeContext);

    return (
        <MaterialTable
            icons={tableIcons}
            options={tablePageSizeoptions}
            title="Grocery Products"
            columns={columns}
            data={palengkeProducts}
            isLoading={palengkeLoading}
            onRowClick={(e) => alert(e)}
            editable={{
                onRowAdd: (newData) =>
                    new Promise(async (resolve) => {
                        let res = await addProducts(newData, "palengke");
                        if (res.message == "Product Successfully Added") {
                            addPalengkeData(newData)
                        }
                        resolve()
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(async (resolve) => {
                        await updateProducts(newData)
                        updatePalengkeData(oldData, newData)
                        resolve()
                    }),
                onRowDelete: (oldData) =>
                    new Promise(async (resolve) => {
                        await deleteProducts(oldData.id)
                        removePalengkeData(oldData.id)
                        resolve()
                    }),
            }}
        />
    );
};

PalengkeProducts.propTypes = {};

export default PalengkeProducts;