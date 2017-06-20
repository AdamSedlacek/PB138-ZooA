import React, { Component } from 'react';
import {StyleSheet, Text, TouchableHighlight, View,} from 'react-native';
import {ShareDialog} from 'react-native-fbsdk';

/**
* Class FBShareButton
* creates a button for sharing on Facebook
* needs to get the shareLinkContent in props: this.props.shareLinkContent
*/
export default class FBShareButton extends Component {
  constructor(props) {
    super(props);

    this.state = {shareLinkContent: this.props.shareLinkContent,};
  }

  /**
  * This function detects if the shareLinkContent can be displayed,
  * and then tries to share the shareLinkContent.
  * As the result is shown alert message about success of the method.
  */
  shareLinkWithShareDialog() {
    var tmp = this;
    ShareDialog.canShow(this.state.shareLinkContent).then(
      function(canShow) {
        if (canShow) {
          return ShareDialog.show(tmp.state.shareLinkContent);
        }
      }
    ).then(
      function(result) {
        if (result.isCancelled) {
          alert('Share cancelled');
        } else {
          alert('Share success with postId: ' + result.postId);
        }
      },
      function(error) {
        alert('Share fail with error: ' + error);
      }
    );
  }

  /**
   * Rendering a button as TouchableHighlight with Text inside a View component
   */
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.shareLinkWithShareDialog.bind(this)}>
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
