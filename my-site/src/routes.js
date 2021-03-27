import {BrowserRouter, Switch, Route} from 'react-router-dom';

import institucional from './pages/institucional';

import Cadastro from './pages/cadastro';

import Login from './pages/login';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={institucional} />
                <Route exact path='/cadastro' component={Cadastro}/>
                <Route exact path='/login' component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;