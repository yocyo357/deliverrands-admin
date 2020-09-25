import React, { useContext, useEffect } from 'react';
import { GroceryOrdersContext } from '../../../contexts/GroceryOrdersContext';
import MaterialTable from 'material-table';
import { tableIcons, tablePageSizeoptions } from '../../../utils/utils';
import { useLocation } from 'react-router-dom';
import { Paper, makeStyles, Grid, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
}));


const GroceryItems = (props) => {
    const classes = useStyles();
    const location = useLocation();
    const { groceryOrderItems, setGroceryOrderItemsData } = useContext(GroceryOrdersContext)

    const columns = [
        { title: 'Product Name', field: 'product_name' },
        { title: 'Description', field: 'description' },
        { title: 'Unit', field: 'unit' },
        { title: 'Amount', field: 'amount' }
    ]

    useEffect(() => {
        setGroceryOrderItemsData(location.state.order_id)
        return () => {
            setGroceryOrderItemsData(null)
        }
    }, []);


    return (
        <div>
            <div style={{ marginBottom: 20 }}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <text>Order ID: {location.state.order_id}</text>
                    </Grid>
                    <Grid item xs={9}>
                        <text>Customer Name:</text>
                    </Grid>
                    <Grid item xs={3}>
                        <text>Contact Number:</text>
                    </Grid>
                    <Grid item xs={9}>
                        <text>Delivery Address:</text>
                    </Grid>
                    <Grid item xs={3}>
                        <text>Status:</text>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" color="primary">
                           Update Status
                        </Button>
                    </Grid>

                </Grid>
            </div>
            <MaterialTable
                icons={tableIcons}
                options={tablePageSizeoptions}
                columns={columns}
                data={groceryOrderItems}
                isLoading={groceryOrderItems.length == 0}
                title="Order Items"
            />
        </div>
    );
};

export default GroceryItems;