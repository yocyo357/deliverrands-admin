import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { tableIcons, tablePageSizeoptions } from '../../../utils/utils';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { GroceryOrdersContext } from '../../../contexts/GroceryOrdersContext';

const Grocery = () => {
    var history = useHistory();
    const columns = [
        { title: 'Order ID', field: 'id' },
        { title: 'Delivery Address', field: 'address' },
        { title: 'Contact Number', field: 'contact' },
        { title: 'Date/Time', field: 'ordered_at' },
        { title: 'Status', field: 'status' }
    ]
    const { groceryOrders,setGroceryOrderItemsData } = useContext(GroceryOrdersContext)

    const onRowClicked = (order_id) => {
        history.push({pathname:'/home/GroceryItems',state:{order_id:order_id}})
    }

    return (
        <div>
            <MaterialTable
                icons={tableIcons}
                options={tablePageSizeoptions}
                columns={columns}
                data={groceryOrders}
                onRowClick={(e, rowData) => onRowClicked(rowData.id)}
                title="Active Grocery Orders" />
            <Button style={{ marginTop: 20 }} component={Link} to={`/home/GroceryItems`} variant="contained" color="primary">
                View All Grocery Orders
            </Button>
        </div>

    );
};

Grocery.propTypes = {};

export default Grocery;