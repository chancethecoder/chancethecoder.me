import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Welcome, Playground } from 'pages';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Welcome}/>
                <Switch>
                    <Route path="/playground/:name" component={Playground}/>
                    <Route path="/playground" component={Playground}/>
                </Switch>
            </Fragment>
        );
    }
}

export default App;
