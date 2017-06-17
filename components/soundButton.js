import React, {Component} from 'react';
import {Button} from 'react-native';
const Sound = require('react-native-sound');
var isPlaying = false;
var textS;

export default class SoundButton extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    /**
     * 1st function of the button
     * plays the sound
     */
    _handlePress1() {
         console.log('PressedStart!', isPlaying);
         this.isPlaying = true;
         this.forceUpdate();
         this.textS = new Sound(this.props.sound, (error) => {
              if (error) {
                    console.log('failed to load the sound', error);
              } else {
                   this.textS.play((success) => {
                        if (success) {
                             console.log('successfully finished playing');
                             this.isPlaying = false;
                        } else {
                             console.log('playback failed due to audio decoding errors');
                        }
                        this.textS.release();
                        this.forceUpdate();
                   });
                }
            });
    }

    /**
     * 2nd function of the button
     * stops the sound
     */
    _handlePress2() {
        console.log('PressedStop!');
        this.textS.stop();
        this.forceUpdate();
        this.isPlaying = false;
    }


/**
 * Rendering a button
 * Distinguishes whether the sound is playing or not
 *
 * @see https://github.com/ide/react-native-button
 */
render() {
    if (!this.isPlaying) {
        return (
            <Button
                color = 'green'
                title = {this.props.button_text}
                onPress = {() => this._handlePress1()}>
            </Button>
        );
    } else {
        return (
            <Button
                color = 'green'
                title = {'Ukončit přehrávání!'}
                onPress = {() => this._handlePress2()}>
            </Button>
        );
    }
}
};
