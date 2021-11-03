import React from 'react';
import './App.css';
import Puzzle from './components/puzzle/puzzle.jsx'
import {Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Сrossword from './components/Сrossword/Сrossword.jsx'

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
            
          <Route path='/'>
            <Puzzle />
          </Route>
          <Route path='/'>
            <Сrossword />
          </Route>
          
      </div>
    </Provider>
  );
}

export default App;

 /*<Provider store={store}>
      <div className="App">
          <Route path='/puzzle'>
            <Puzzle />
          </Route>
          <Route path='/mathTask'>
            <mathTask />
          </Route>  
          
      </div>
    </Provider> */