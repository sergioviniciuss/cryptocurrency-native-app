import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text
}
from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import fetchCoinData from '../actions/fetchCoinData';
import CoinCard from './CoinCard';


class CryptoContainer extends Component {
    componentDidMount() {
        this.props.fetchCoinData();
    }
    renderCoinCards() {
        const { crypto } = this.props;
        return crypto.data.map((coin, index) => 
            <CoinCard
                key={index}
                {...coin}
            />
        );
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
            <View>
                {this.renderCoinCards()}
            </View>
        )
    }
}

function mapStatesToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStatesToProps, { fetchCoinData })(CryptoContainer);