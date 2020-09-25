import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PalengkeOrdersContext } from '../../../contexts/PalengkeOrderContext';
import { tableIcons, tablePageSizeoptions } from '../../../utils/utils';
import { Grid, Button } from '@material-ui/core';
import MaterialTable from 'material-table';


const PalengkeItems = () => {
    const location = useLocation();
    const { palengkeOrderItems, setPalengkeOrderItemsData } = useContext(PalengkeOrdersContext)

    const columns = [
        { title: 'Product Name', field: 'product_name' },
        { title: 'Description', field: 'description' },
        { title: 'Unit', field: 'unit' },
        { title: 'Amount', field: 'amount' }
    ]
    
    useEffect(() => {
        setPalengkeOrderItemsData(location.state.order_id)
        return () => {
            setPalengkeOrderItemsData(null)
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
                data={palengkeOrderItems}
                isLoading={palengkeOrderItems.length == 0}
                title="Palengke Order Items"
            />
        </div>
    );
};


export default PalengkeItems;