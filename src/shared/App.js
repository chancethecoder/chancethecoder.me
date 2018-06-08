import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Welcome, Profile, Projects, Playground } from 'pages';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Welcome}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/project" component={Projects}/>
                <Switch>
                    <Route path="/playground/:name" component={Playground}/>
                    <Route path="/playground" component={Playground}/>
                </Switch>
            </Fragment>
        );
    }
}

export default App;
