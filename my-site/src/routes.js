import {BrowserRouter, Switch, Route} from 'react-router-dom';

import institucional from './pages/institucional';

import Cadastro from './pages/cadastro';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={institucional} />
                <Route exact path='/cadastro' component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;