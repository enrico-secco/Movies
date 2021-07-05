import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Erro from './pages/Erro'

import Header from './components/Header'
import Filme from './pages/Filme'

const Routes = () => {
    return(
        <BrowserRouter>
        <Header/>
        
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path='/filme/:id' component={Filme}/> {/* :id para mostrar que vai ser dinâmico */}
                {/* exact, se não colocasse /filme/123/tanana, ele ia abrir essa tela em vez de não existente */}
                <Route path="*" component={Erro}/>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;