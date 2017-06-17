import React, { Component } from 'react';
import {StyleSheet, Text, TouchableHighlight, View,} from 'react-native';
import {ShareDialog} from 'react-native-fbsdk';

export default class FBShareButton extends Component {
  constructor(props) {
    super(props);

    this.state = {shareLinkContent: this.props.shareLinkContent,};
  }

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
