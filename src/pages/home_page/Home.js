import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StoreIcon from '@material-ui/icons/Store';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import StorefrontIcon from '@material-ui/icons/Storefront';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import Store from '../nav/store/Store';
import Bills from '../nav/bills/Bills';
import Partners from '../nav/partners/Partners';
import Palengke from '../nav/palengke/Palengke';
import Errands from '../nav/errands/Errands';
import Partner_Stores from '../nav/partner_stores/Partner_Stores';
import { Button } from '@material-ui/core';
import { useLocation } from 'react-router-dom'
import Grocery from '../nav/grocery/Grocery';
import ProductsTab from '../nav/products/ProductsTab';
import { useHistory } from "react-router-dom";
import { GroceryAndPalengkeContext } from '../../contexts/GroceryAndPalengkeContext';
import { GroceryOrdersContext } from '../../contexts/GroceryOrdersContext';
import { fetchGroceries, fetchPalengke } from '../../api/products';
import Grocery_items from '../nav/grocery/GroceryItems';
import GroceryItems from '../nav/grocery/GroceryItems';
import { PalengkeOrdersContext } from '../../contexts/PalengkeOrderContext';
import PalengkeItems from '../nav/palengke/PalengkeItems';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

}));


const deftheme = createMuiTheme({
    palette: {
        primary: {
            main: '#021C3F',
        },
    }
});




const Home = (props) => {
    var history = useHistory();
    const { window, location } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const [selectedTab, setSelectedTab] = useState({ tab: 'Orders', index: 0 });
    const { pathname } = props.location;
    const orderIcons = [<SupervisorAccountIcon />, <LocalGroceryStoreIcon />, <StorefrontIcon />, <ReceiptIcon />, <DirectionsBikeIcon />]
    const customIcons = [<GroupAddIcon />, <PlaylistAddIcon />]

    //Global App States
    const { setGroceryData, setPalengkeData, setGroceryDataLoading, setPalengkeDataLoading } = useContext(GroceryAndPalengkeContext)
    const { setGroceryOrdersData } = useContext(GroceryOrdersContext)
    const { setPalengkeOrdersData } = useContext(PalengkeOrdersContext)


    const loadDatas = () => {
        setGroceryDataLoading(true)
        setPalengkeDataLoading(true)
        fetchGroceries().then((res) => {
            setGroceryData(res)
            setGroceryDataLoading(false)

        })
        fetchPalengke().then((res) => {
            setPalengkeData(res)
            setPalengkeDataLoading(false)
        })
    }


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    function HeaderView() {
        let location = useLocation();
        console.log(location.pathname);
        return location.pathname
    }
    useEffect(() => {
        loadDatas()

        var path = pathname.split("/").pop()
        if (path == 'Partners') setSelectedTab({ tab: 'Orders', index: 0 })
        if (path == 'Grocery') setSelectedTab({ tab: 'Orders', index: 1 })
        if (path == 'Palengke') setSelectedTab({ tab: 'Orders', index: 2 })
        if (path == 'Bills') setSelectedTab({ tab: 'Orders', index: 3 })
        if (path == 'Errands') setSelectedTab({ tab: 'Orders', index: 4 })
        if (path == 'Partner Stores') setSelectedTab({ tab: 'Custom', index: 0 })
        if (path == 'Products') setSelectedTab({ tab: 'Custom', index: 1 })


        const timer = setInterval(() => {
            setGroceryOrdersData()
            setPalengkeOrdersData()
        }, 10000);

        return () => clearInterval(timer);
    }, []);



    const drawer = (test) => {
        return (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <ListItem>
                    <ListItemText primary={<Typography variant="h6" style={{ color: 'black' }}>Orders</Typography>} />
                </ListItem>

                <List>
                    {['Partners', 'Grocery', 'Palengke', 'Bills', 'Errands'].map((text, index) => (
                        <ListItem button key={text} component={Link} to={`/home/${text}`} onClick={() => setSelectedTab({ tab: 'Orders', index: index })} selected={selectedTab.tab == "Orders" && selectedTab.index == index}>
                            <ListItemIcon>{orderIcons[index]}</ListItemIcon>
                            <ListItemText primary={text} />
                            <div style={{ display: 'flex', padding: 5, borderRadius: 40, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', width: 20, height: 20 }}><text style={{ color: 'white', fontSize: 10 }}>1</text></div>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <ListItem>
                    <ListItemText primary={<Typography variant="h6" style={{ color: 'black' }}>Custom</Typography>} />
                </ListItem>
                <List>
                    {['Partner Stores', 'Products'].map((text, index) => (
                        <ListItem button key={text} component={Link} to={`/home/${text}`} onClick={() => setSelectedTab({ tab: 'Custom', index: index })} selected={selectedTab.tab == "Custom" && selectedTab.index == index}>
                            <ListItemIcon>{customIcons[index]}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

            </div>
        )
    }

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={deftheme}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar style={{ justifyContent: 'space-between' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Deliverrands
                    </Typography>
                        <Button variant="contained" onClick={() => history.push("/")}>
                            Logout
                    </Button>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer()}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer('tests')}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>
                        <Route path="/home" exact component={Partners} />
                        <Route path="/home/Bills" component={Bills} />
                        <Route path="/home/Partners" component={Partners} />
                        <Route path="/home/Palengke" component={Palengke} />
                        <Route path="/home/Grocery" component={Grocery} />
                        <Route path="/home/Errands" component={Errands} />
                        <Route path="/home/Partner Stores" component={Partner_Stores} />
                        <Route path="/home/Products" component={ProductsTab} />

                        <Route path="/home/GroceryItems" component={GroceryItems} />
                        <Route path="/home/PalengkeItems" component={PalengkeItems} />
                    </Switch>
                </main>
            </div>
        </ThemeProvider>
    );
}

Home.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

Home.propTypes = {};

export default Home;