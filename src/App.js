import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import AlbumsListContainer from './components/AlbumsListContainer'
import PhotoPageContainer from './components/PhotoPageContainer'
import { Route } from 'react-router-dom'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/" component={AlbumsListContainer} />
        <Route path="/albums/:id" component={PhotoPageContainer} />
      </div>
    </Provider>
  );
}

export default App;
