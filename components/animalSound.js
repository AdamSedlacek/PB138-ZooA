import React, { Component } from 'react';
import {Button} from 'react-native';
const Sound = require('react-native-sound');
const requireAudio = require('../sounds/test.mp3');
//spravene zatial tak ye prehra nejaky konkretny subor ale mal bz brat
// z rodicovskeho .js to this.props.sounds[this.props.index]
//podobne ako to bolo robene pri inPageImage, ale tuto to musi prejst az do _handlePress()
// nejak som neodhalila ako to spravit

export default class ExampleComponent extends Component {
    constructor(props, context) {
        super(props, context);
    }

    _handlePress() {
        console.log('Pressed!');
        let animalS = new Sound(requireAudio, (error) => {
        			if (error) {
        				console.log('failed to load the sound', error);
        			}
        			else {
        			    animalS.setSpeed(1);
                        animalS.play(() => animalS.release());
                        }
        		});
    }

    render() {
        return (
                <Button
                color='green'
                title="Přehrát zvuk zvířátka!"
                onPress={() => this._handlePress()}>
                </Button>
                );
    }
};
