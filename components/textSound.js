import React, { Component } from 'react';
import {Button} from 'react-native';
const Sound = require('react-native-sound');

export default class TextSound extends Component {
    constructor(props, context) {
        super(props, context);
    }

    _handlePress() {
        console.log('Pressed!');
    }

    render() {
        return (
                <Button
                color='green'
                title="Přehrát text!"
                onPress={() => this._handlePress()}>
                </Button>
                );
    }
};
