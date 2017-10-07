import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'mobx-react';

import StackNavigator from './router';

import ApiStore from './store/store';

export default class MinningViewerApp extends Component {
  render() {
    return (
      <Provider store={ApiStore}>
        <StackNavigator />
      </Provider>
    );
  }
}
