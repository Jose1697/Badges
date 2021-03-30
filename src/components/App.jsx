import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import Badges from '../pages/Badges';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import NotFound from '../pages/NotFound';
import Layout from './Layout';
import Home from '../pages/Home';
import Prueba from '../pages/Prueba';

function App(){
 return(
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
                <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
                <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                <Route exact path="/prueba" component={Prueba} />
                <Route component={NotFound} />
                
            </Switch>
        </Layout>
        
    </BrowserRouter>
 )

}

export default App;