import { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { HashRouter as Router } from 'react-router-dom'

import './App.scss';
import LayoutItem from './layout'
import { reducer } from './store/reducer'


const store = createStore(reducer)

console.log(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <LayoutItem />
        </Router>
      </Provider>
    )
  }
}

export default App;
