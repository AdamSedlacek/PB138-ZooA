import React from 'react';
import {View, Image} from 'react-native';
import styles from '../styles/styles.js';

export default class InPageImages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={this.props.source} style={this.props.style} />
        {this.props.children}
      </View>
    );
  }
}
