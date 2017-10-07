/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import MinningViewerApp from './src/index';

export default class ethermineview extends Component {
  render() {
    return (
      <MinningViewerApp />
    );
  }
}

AppRegistry.registerComponent('ethermineview', () => ethermineview);
