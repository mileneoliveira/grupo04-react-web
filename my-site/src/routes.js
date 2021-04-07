import {BrowserRouter, Switch, Route} from 'react-router-dom';

import institucional from './pages/institucional';

import Cadastro from './pages/cadastro';

import Login from './pages/login';

import Feed from './pages/feed';

import Sidebar from './pages/sidebar';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={institucional} />
                <Route exact path='/cadastro' component={Cadastro}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/feed' component={Feed}/>
                <Route exact path='/sidebar' component={Sidebar}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;