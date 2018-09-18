import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text
}
from 'react-native';
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