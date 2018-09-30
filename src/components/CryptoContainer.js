import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    FlatList,
}
from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import fetchCoinData from '../actions/fetchCoinData';
import CoinCard from './CoinCard';


class CryptoContainer extends Component {
    componentDidMount() {
        this.props.fetchCoinData();
    }

    render() {
        const { crypto } = this.props;
        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={'Loading...'}
                        textStyle={{color:'#253245'}}
                        animation="fade"
                    />
                </View>
            )
        }
        return (
            <FlatList
                contentContainerStyle={styles.contentContainer}
                data={crypto.data}
                renderItem={({ ...coin }) => (<CoinCard { ...coin }/>)}
                keyExtractor={coin => `${coin.id}`}
            />
        )
    }
}
const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
};


function mapStatesToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStatesToProps, { fetchCoinData })(CryptoContainer);