import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoutes } from "./privateRoutes";

import institucional from "pages/institucional";
import Cadastro from "pages/cadastro";
import Login from "pages/login";
import Feed from "pages/feed";
import Perfil from "pages/perfil";
import Dashboard from "pages/dashboard";
import Cardapio from "pages/cardapio";
import Cafe from "pages/Cafe";
import Almoco from "pages/almoco";
import Janta from "pages/janta";
import LanchesOutros from 'pages/lanchesoutros';
import ListaAlimentos from "pages/listaalimentos";
import VisualizarAlimentos from "pages/visualizaralimentos";
import Teste from "pages/teste";
import visualizarAlmoco from "pages/visualizarAlmoco";
import visualizarJantar from "pages/visualizarJantar";
import visualizarOutros from "pages/visualizarOutros";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={institucional} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />

        <PrivateRoutes exact path="/feed" redirect="/login" component={Feed} />
        <PrivateRoutes
          exact
          path="/perfil"
          redirect="/login"
          component={Teste}
        />
        <PrivateRoutes
          exact
          path="/dashboard"
          redirect="/login"
          component={Dashboard}
        />
        <PrivateRoutes
          exact
          path="/cardapio"
          redirect="/login"
          component={Cardapio}
        />
        <PrivateRoutes exact path="/cafe" redirect="/login" component={Cafe} />
        <PrivateRoutes
          exact
          path="/almoco"
          redirect="/login"
          component={Almoco}
        />
        <PrivateRoutes
          exact
          path="/janta"
          redirect="/login"
          component={Janta}
        />
        <PrivateRoutes
          exact
          path="/listaalimentos"
          redirect="/login"
          component={ListaAlimentos}
        />
        <PrivateRoutes
          exact
          path="/visualizaralimentos"
          redirect="/login"
          component={VisualizarAlimentos}
        />
        <Route exact path="/teste" component={Teste} />
        <Route exact path="/visualizaralmoco" component={visualizarAlmoco} />
        <Route exact path="/visualizarjantar" component={visualizarJantar} />
        <Route exact path="/visualizaroutros" component={visualizarOutros} />
        <Route exact path="/outro" component={LanchesOutros} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
