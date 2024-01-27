import React from 'react';
import Main from './src/navigations/Main';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import ThemeProvider from './src/theme/ThemeProvider';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
