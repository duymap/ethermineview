
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Tab, Tabs } from 'native-base';
import Dashboard from '.app/dashboard/Dashboard';
import Setting from '.app/setting/Setting';
import Payout from '.app/payout/Payout';

export default class App extends Component {
    render() {
        return (
            <Container>
            <Header hasTabs/>
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