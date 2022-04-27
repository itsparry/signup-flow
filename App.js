import MainPage from './src/Main'
// import { store } from './src/redux/configureStores';
import { store } from './src/redux/configureStores'
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import React from 'react';

// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
// ]);

const App = () => {
  return (
    <Provider store={store}>
      <MainPage/>
    </Provider>
  );
}

export default App


