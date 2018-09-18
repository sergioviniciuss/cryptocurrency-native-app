import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text
}
from 'react-native';
import fetchCoinData from '../actions/fetchCoinData';


class CryptoContainer extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.fetchCoinData();
    }
    render() {
        return (
            <View>
                <Text>Container</Text>
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