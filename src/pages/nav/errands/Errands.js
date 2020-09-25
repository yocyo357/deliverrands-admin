import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { tableIcons, tablePageSizeoptions } from '../../../utils/utils';

const Errands = () => {
    return (
        <MaterialTable
        icons={tableIcons}
        options={tablePageSizeoptions}
        title="Errands Orders"/>
    );
};

Errands.propTypes = {};

export default Errands;