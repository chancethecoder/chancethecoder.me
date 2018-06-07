import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Welcome, Playground } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Welcome}/>
                <Switch>
                    <Route path="/playground/:name" component={Playground}/>
                    <Route path="/playground" component={Playground}/>
                </Switch>
            </div>
        );
    }
}

export default App;