import React from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;
import Home from './components/pages/Home';
import OrderDetails from './components/pages/OrderDetails';
import Orders from './components/pages/Orders';

import './App.css';

const App = () => {
    const envpath = process.env.PUBLIC_URL;
    console.log(envpath);
    return (
        <Router>
        <div>
            {/* Navigationbar */}
            <Switch>
                {/* <Route path="/" exact component={Home}/> */}
                {/* <Route path="/Orders" exact component={Orders}/>
                <Route path="/Orders/:id" exact component={OrderDetails}/> */}
            
                   
                <Route path= {envpath + '/:id'} exact component={OrderDetails}/>
                <Route path={envpath + '/'} exact component={Orders}/> 
            </Switch>
        </div>
        </Router>
    )
}

export default App
