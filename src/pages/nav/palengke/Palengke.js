import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { tableIcons, tablePageSizeoptions } from '../../../utils/utils';
import { useHistory } from 'react-router-dom';
import { PalengkeOrdersContext } from '../../../contexts/PalengkeOrderContext';

const Palengke = () => {
    var history = useHistory();
    const columns = [
        { title: 'Order ID', field: 'id' },
        { title: 'Delivery Address', field: 'address' },
        { title: 'Contact Number', field: 'contact' },
        { title: 'Date/Time', field: 'ordered_at' },
        { title: 'Status', field: 'status' }
    ]
    const { palengkeOrders } = useContext(PalengkeOrdersContext)

    const onRowClicked = (order_id) => {
        history.push({pathname:'/home/PalengkeItems',state:{order_id:order_id}})
    }
    return (
        <MaterialTable
        icons={tableIcons}
        options={tablePageSizeoptions}
        columns = {columns}
        data={palengkeOrders}
        onRowClick={(e, rowData) => onRowClicked(rowData.id)}
        title="Palengke Orders"/>
    );
};

Palengke.propTypes = {};

export default Palengke;