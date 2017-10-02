
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Container, Header, Tab, Tabs, Text } from 'native-base';
import Dashboard from './dashboard/Dashboard';
import Setting from './setting/Setting';
import Payout from './payout/Payout';

export default class App extends Component {
    render() {
        return (
            <Container>
            <Header>
              <Text style={{'marginTop': 10}}>Ethermine Viewer</Text>
            </Header>
            <Tabs>
              <Tab heading="Dashboard">
                <Dashboard />
              </Tab>
              <Tab heading="Payout">
                <Payout />
              </Tab>
              <Tab heading="Setting">
                <Setting />
              </Tab>
            </Tabs>
            </Container>
        );
    }
}