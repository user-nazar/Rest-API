import React from "react";

import logo from "../image/first_image.jpg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

import Checkout from "../pages/Checkout";
import Success from "../pages/Success";
import {ContainerStyles, first_image, MenuStyles, MenuItem} from "../styles/NavigationStyles";
import Catalog from "../pages/Catalog";
import ThisCard from "../pages/ThisCard";
import Item from "../pages/Item";
import Home from "../pages/Home";
import Footer from "./Footer";

const Navigation = () => {
    return (
        <ContainerStyles>
            <Router>
                <MenuStyles>
                    <first_image src={logo}/>

                    <MenuItem>
                        <NavLink
                            exact
                            to="/"
                            activeClassName="selected"
                            style={{textDecoration: "none", color: "white"}}
                        >
                            HOME
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink
                            exact
                            to="/catalog"
                            activeClassName="selected"
                            style={{textDecoration: "none", color: "white"}}
                        >
                            catalog
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink exact to="/card"
                                 activeClassName="selected"
                                 style={{textDecoration: "none", color: "white"}}>
                            CARD
                        </NavLink>
                    </MenuItem>
                </MenuStyles>
                <Switch>
                    <Route path="/catalog">
                        <Catalog />
                    </Route>
                    <Route path="/card">
                        <ThisCard />
                    </Route>
                    <Route path="/item">
                        <Item />
                    </Route>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/success">
                        <Success />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </ContainerStyles>
    );
};

export default Navigation;