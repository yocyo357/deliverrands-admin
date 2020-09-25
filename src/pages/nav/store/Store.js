import React from 'react';
import PropTypes from 'prop-types';

const Store = () => {
    React.useEffect(()=>{
        console.log('yes1')
    },[])
    return (
        <div>
            <text>this is store</text>
        </div>
    );
};

Store.propTypes = {};

export default Store;