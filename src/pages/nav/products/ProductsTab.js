import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import GroceryProducts from './GroceryProducts';
import PalengkeProducts from './PalengkeProducts';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
}));

const ProductsTab = () => {



    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary">
                        <Tab label="Grocery" {...a11yProps(0)}/>
                        <Tab label="Palengke" {...a11yProps(1)}/>
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <GroceryProducts />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <PalengkeProducts />
                </TabPanel>
            </div>
        </div>
    );
};

ProductsTab.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default ProductsTab;