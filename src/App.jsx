import './App.scss';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SearchFlightsPage from './search-flight/components/search-flights-page';

function App() {
  return (
    <Provider store={store}>
      <SearchFlightsPage />
    </Provider>
  );
}

export default App;