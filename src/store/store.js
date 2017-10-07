import axios from 'axios';
import { observable } from 'mobx';
import { Alert } from 'react-native';

class ApiStore {
    ZCASH_END_POINT = 'https://api-zcash.flypool.org';
    @observable data = [];

    async getStatistic(miner) {
        try {
            const requestURL = `${ZCASH_END_POINT}/miner/${miner}/currentStats`;
            const response = await axios.get(requestURL);
            if (response.data.status === 'OK') {
                this.data = response.data.data;
                //console.log(this.data);
            }
        } catch (e) {
            Alert.alert('Connection error', 'Couldn\'t fetch the data.');
        }
    }
}

export default new ApiStore();