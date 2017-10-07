import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
  } from 'react-native';
  import { 
    Content,
    Card,
    CardItem,
    Text,
    Body
  } from 'native-base';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export default class Dashboard extends Component {

    render() {
        return (
        <Content>
            <Card style={styles.borderStyle}>
                <CardItem style={styles.hashRateHeader}>
                    <Body style={styles.contentText}>
                        <Text style={styles.headerText}>Hashrates</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Body style={styles.contentText}>
                        <Text>
                            {this.props.store.data.averageHashrate}
                        </Text>
                        <Text>
                            {this.props.store.data.currentHashrate}
                        </Text>
                    </Body>
                </CardItem>
            </Card>

            <Card style={styles.borderStyle}>
                <CardItem style={styles.immuteBalanceHeader}>
                    <Body style={styles.contentText}>
                        <Text style={styles.headerText}>Immature Balance</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Body style={styles.contentText}>
                        <Text style={styles.contentText}>
                            0.000001 ZEC
                        </Text>
                    </Body>
                </CardItem>
            </Card>

            <Card style={styles.borderStyle}>
            <CardItem style={styles.unpaiBalanceHeader}>
                <Body style={styles.contentText}>
                    <Text style={styles.headerText}>Unpaid Balance</Text>
                </Body>
            </CardItem>
            <CardItem>
                <Body style={styles.contentText}>
                    <Text style={styles.contentText}>
                        0.000001 ZEC
                    </Text>
                </Body>
            </CardItem>
        </Card>

            <Card style={styles.borderStyle}>
                <CardItem style={styles.activeWorkderHeader}>
                    <Body style={styles.contentText}>
                        <Text>Active Workers</Text>
                    </Body>
                </CardItem>
                <CardItem>
                <Body style={styles.contentText}>
                    <Text>
                        1
                    </Text>
                </Body>
                </CardItem>
            </Card>
        </Content>
        );
    }
}

const styles = StyleSheet.create({

hashRateHeader: {
    backgroundColor: 'orange'
},        

immuteBalanceHeader: {
    backgroundColor: '#00FFFF'
},     

unpaiBalanceHeader: {
    backgroundColor: '#00BFFF'
},

activeWorkderHeader: {
    backgroundColor: '#008000'
},

borderStyle : {
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginLeft: 10,
    marginRight: 10
},

headerText : {
    fontSize: 15,
    textAlign: 'center'
},

contentText : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
}

});