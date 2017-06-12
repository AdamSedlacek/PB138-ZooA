import React from 'react';
import {View, Image} from 'react-native';
import styles from '../styles/styles.js';

export default class InPageImages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let images = [];

    this.props.sources.forEach((i, idx) => {
      if ((idx + 1) == this.props.sources.length) {
        return images.push(
          <Image key={idx} source={i} style={this.props.style} resizeMode='contain' />
        );
      } else {
        return images.push(
          <Image key={idx} source={i} style={this.props.style} marginRight={this.props.marginRight} resizeMode='contain' />
        );
      }
    });

    return (
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        {images}
      </View>
    );
  }
};
