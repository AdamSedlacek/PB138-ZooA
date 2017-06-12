import React from 'react';
import {Text} from 'react-native';
import styles from '../styles/styles.js';

export default class ourText extends React.Component {
  constructor(props) {
    super(props);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <Text ref={component => this._root = component} style={[styles.text, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
};
