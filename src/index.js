import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from "react-router-dom"
import './index.css';

import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';


import { Provider } from 'react-redux'
import Home from './Home'
import PostList from './PostList'; //列表页面
import Login from './Login'

const store = configureStore()
export default class App extends React.Component {
    render() {
        console.log('children', this.props.children)
        return (
            <div>
                <div>父组件最外层的容器test</div>
                {this.props.children}</div>
        )
    }
}

//路由处理
const routes = (
    <Router>
        <div>
            <Switch>
                <Route path='/' render={(props) => (
                    <App>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/postList' component={PostList} />
                            <Route path='/login' component={Login} />
                        </Switch>
                    </App>
                )}>
                    <Route render={() => (<Redirect to="/" />)} />
                </Route>
            </Switch>
        </div>
    </Router>
)
//渲染
ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
