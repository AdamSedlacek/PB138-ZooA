import React from 'react';
import {View} from 'react-native';
import styles from '../styles/styles';
import InPageImage from './inPageImage';

export default class AnimalTemplate extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <View>
          <View>
            <InPageImage firstImage={true} indexes={this.props.firstIndex} thumbnails={this.props.thumbnails} images={this.props.images} />
          </View>
          <View style={styles.scrollView}>
            {this.props.children}
          </View>
        </View>
      );
    }
};

AnimalTemplate.propTypes = {
    firstIndex: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    thumbnails: React.PropTypes.array.isRequired,
    images: React.PropTypes.array.isRequired,
    children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
};
