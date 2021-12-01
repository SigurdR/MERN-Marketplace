import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './core/Home';
import Users from './user/Users';
import Signup from './user/Signup';
import Signin from './auth/Signin';
import EditProfile from './user/EditProfile';
import Profile from './user/Profile';
import PrivateRoute from './auth/PrivateRoute';
import Menu from './core/Menu';
import Shops from  './shop/Shops';
import Shop from './shop/Shop';
import Product from './product/Product';
import NewShop from './shop/NewShop';
import MyShops from './shop/MyShops';
import EditShop from './shop/EditShop';
import EditProduct from './product/EditProduct'


const MainRouter = () => {
    return (
        <div>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/users" component={Users}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/shops/all" component={Shops}/>
                <Route path="/shops/:shopId" component={Shop}/>
                <Route path="/user/:userId" component={Profile}/>
                <Route path="/product/:productId" component={Product}/>
                <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
                <PrivateRoute path="/seller/shop/new" component={NewShop}/>
                <PrivateRoute path="/seller/shops" component={MyShops}/>
                <PrivateRoute path="/seller/shop/edit/:shipId" component={EditShop}/>
                <PrivateRoute path="/seller/:shopId/:productId/edit" component={EditProduct}/>
            </Switch>
        </div>
    )
}

export default MainRouter;