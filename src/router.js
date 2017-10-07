import { StackNavigator } from 'react-navigation';

import App from './App';

const stackNavigatorConfig = {
  initialRouteName: 'App',
};

export default StackNavigator({
  App: {
    screen: App,
  },
}, stackNavigatorConfig);