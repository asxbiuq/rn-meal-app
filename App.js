import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import store from './src/store/index'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <DrawerNavigator/>
      </NavigationContainer>
    </Provider>
  );
}
export default App

