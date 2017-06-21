import React, { Component } from 'react';
import {StyleSheet, Text, TouchableHighlight, View,} from 'react-native';
import {LoginManager, ShareDialog} from 'react-native-fbsdk';

/**
* Class FBShareButton
* creates a button for sharing on Facebook
* needs to get the shareContent in props: this.props.shareContent
*/
export default class FBShareButton extends Component {
  constructor(props) {
    super(props);

    this.state = {shareContent: this.props.shareContent,};
  }

  /**
  * This function detects if the shareContent can be displayed,
  * and then tries to share the shareContent.
  * As the result is shown alert message about success of the method.
  */
  shareContentWithShareDialog() {
    var tmp = this;
    ShareDialog.canShow(this.state.shareContent).then(
      function(canShow) {
        if (canShow) {
          return ShareDialog.show(tmp.state.shareContent);
        }
      }
    ).then(
      function(result) {
        if (result.isCancelled) {
          alert('Sdílení zrušeno.');
        } else {
          alert('Úspěšně sdíleno: ' + result.postId);
        }
      },
      function(error) {
        alert('Sdílení se nezdařilo! Chyba: ' + error);
      }
    ).then( //log out from facebook when share dialog is closed - can be deleted
      function(shareContentWithShareDialog) {
      LoginManager.logOut();
      }
    );
  }

  /**
   * Rendering a button as TouchableHighlight with Text inside a View component
   */
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.shareContentWithShareDialog.bind(this)}>
          <Text style={styles.shareText}>Sdílet na Facebooku!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998',
  },
  shareText: {
    fontSize: 20,
    margin: 10,
    color: '#ffffff',
  },
});
