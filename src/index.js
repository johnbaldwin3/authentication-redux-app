//react imports
import React from 'react';
import ReactDOM from 'react-dom';

//router imports
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
//import styles
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

//component imports
import App from './components/App';
import NavLayout from './components/NavLayout';
import RegisterUser from './containers/RegisterUser';
import UserLogin from './containers/UserLogin';
//create store for redux and apply middleware
const createStoreWithMiddleware = applyMiddleware( thunk )(createStore);

//wrap provider around router
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <NavLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/register" component={RegisterUser} />
          <Route path="/login" component={UserLogin} />
        </Switch>
      </NavLayout>
    </BrowserRouter>
  </Provider>


  , document.getElementById('root'));
