
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import {observer, inject} from 'mobx-react';
import { Container, Header, Tab, Tabs, Text } from 'native-base';
import Dashboard from './components/Dashboard';
import Setting from './components/Setting';
import Payout from './components/Payout';

@inject('store') @observer
export default class App extends Component {

    componentWillMount() {
      //TODO
      const yourMiner = '';
      this.props.store.getStatistic(yourMiner);
    }

    render() {
        return (
            <Container>
            <Header>
              <Text style={{'paddingTop': 5, fontSize: 20, fontWeight: 'bold'}}>{this.props.store.ZCASH_END_POINT}</Text>
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