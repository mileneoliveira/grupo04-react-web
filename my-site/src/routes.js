import {BrowserRouter, Switch, Route} from 'react-router-dom';

import institucional from './pages/institucional';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={institucional} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;