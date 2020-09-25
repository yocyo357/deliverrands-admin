import React from 'react';
import PropTypes from 'prop-types';
import { tablePageSizeoptions, tableIcons } from '../../../utils/utils';
import MaterialTable from 'material-table';

const Bills = () => {

    React.useEffect(()=>{
        console.log('yes1')
    },[])

    return (
        <MaterialTable
        icons={tableIcons}
        options={tablePageSizeoptions}
        title="Bills Orders"/>
    );
};

Bills.propTypes = {};

export default Bills;