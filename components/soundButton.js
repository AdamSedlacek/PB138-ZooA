import React, {Component} from 'react';
import {Button} from 'react-native';
import PushNotification from 'react-native-push-notification';

const Sound = require('react-native-sound');


/**
* Class SoundButton
* creates a button for playing a sound
* need to get the sound in props: this.props.sound
*/
export default class SoundButton extends React.Component {

    /**
    * Constructor
    * sets showAlert and isPlaying
    * configure the PushNotification
    */
    constructor(props, context) {
        super(props, context);

        this.showAlert = true;
        /** for all rendered buttons will be the alert shown once.
        *If you want to show the alert for the whole app only once,
        *then the showAlert should be defined right after imports,
        *then you need to use it without preposition this. in this whole class
        */
        this.isPlaying = false;

        PushNotification.configure({
            onNotification: function(notification) {
                Alert.alert(notification.message);
            },

            permissions: {
                alert: true,
                badge: false,
                sound: false // this doesn´t work. Why?
            },
        });
    }

    /**
     * 1st function of the button
     * plays the sound and shows a pop-up alert (only when playd 1st time)
     */
     _handlePress1() {
             console.log('PressedStart!');
             if (this.showAlert){
                let z = {
                     title: 'Použijte prosím sluchátká!',
                     vibrate: true,
                     message: ('Hlasitý odposlech ruší zvířata.'),
                   };
                   PushNotification.localNotification(z);
                   this.showAlert = false;
                   }
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
