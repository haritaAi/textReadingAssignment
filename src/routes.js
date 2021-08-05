import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from '../src/core/home';
import MeaningsDetail from './core/meaningsdetail';
import PhoneticsDetail from './core/phoneticsdetail';





const Routes = () => {
    return (
    <BrowserRouter>
       <Switch>
           <Route path = "/" exact component = {Home}/>
           <Route path = "/phoneticsdetail" exact  component = {PhoneticsDetail}/>
           <Route path = "/meaningsdetail" exact  component = {MeaningsDetail}/>

       </Switch>

    </BrowserRouter>
    )
}
export default Routes;