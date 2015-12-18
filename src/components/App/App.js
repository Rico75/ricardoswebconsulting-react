/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component }  from 'react';
import styles                           from './App.css';
import withContext                      from '../../decorators/withContext';
import withStyles                       from '../../decorators/withStyles';
import Header                           from '../Header';
import SideNavigation                   from '../SideNavigation';
import Feedback                         from '../Feedback';
import Footer                           from '../Footer';
/* Redux */
import { Provider }                     from 'react-redux'
import {createStore, combineReducers}   from 'redux';
import {reducer as formReducer}         from 'redux-form';

/* Redux reducers go here */
const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'. See note below.
}
const reducer = combineReducers(reducers);
const store = createStore(reducer);
/********************/

@withContext
@withStyles(styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    return !this.props.error ? (
      <div>
        <Header />
        <SideNavigation />
        <Provider store={store}>
          {this.props.children}
        </Provider>
        <Feedback />
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;
