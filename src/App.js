import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

if (process.env.NODE_ENV === 'development') {
  import('./extra');
}

const App = () => {
  return (
    <Provider store={store}>
      <p>Marvel</p>
    </Provider>
  );
};

export default App;
