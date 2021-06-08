import {BrowserRouter, Switch, Route} from 'react-router-dom';

import institucional from './pages/institucional';

import Cadastro from './pages/cadastro';

import Login from './pages/login';

import Feed from './pages/feed';

import Perfil from './pages/perfil';

import Dashboard from './pages/dashboard';

import Cardapio from './pages/cardapio';

import Cafe from './pages/Cafe';

import Almoco from './pages/almoco';

import Janta from './pages/janta';

import ListaAlimentos from './pages/listaalimentos';

import VisualizarAlimentos from './pages/visualizaralimentos';

import VisualizarAlmoco from './src/pages/visualizarAlmoco';

import VisualizarJantar from './src/pages/visualizarJantar';

import VisualizarOutros from './src/pages/visualizarOutros';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={institucional} />
                <Route exact path='/cadastro' component={Cadastro}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/feed' component={Feed}/>
                <Route exact path='/perfil' component={Perfil}/>
                <Route exact path='/dashboard' component={Dashboard}/>
                <Route exact path='/cardapio' component={Cardapio}/>
                <Route exact path='/cafe' component={Cafe}/>
                <Route exact path='/almoco' component={Almoco}/>
                <Route exact path='/janta' component={Janta}/>
                <Route exact path='/listaalimentos' component={ListaAlimentos}/>
                <Route exact path='/visualizaralimentos' component={VisualizarAlimentos}/>
                <Route exact path='/visualizaralmoco' component={VisualizarAlmoco}/>
                <Route exact path='/visualizarjantar' component={VisualizarJantar}/>
                <Route exact path='/visualizaroutros' component={VisualizarOutros}/>



            </Switch>
        </BrowserRouter>
    )
}

export default Routes;