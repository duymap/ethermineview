import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import StackNavigator from './router';
import ApiStore from './store/ApiStore';

export default class MinningViewerApp extends Component {
  render() {
    return (
      // if you want to include multiple stores in Provider
      // here the way we should do:
      // <Provider store1={classStore1}, 
      //           store2={classStore2},
      //    ....
      <Provider store={ApiStore}>
        <StackNavigator />
      </Provider>
    );
  }
}
