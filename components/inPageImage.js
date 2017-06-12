import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../styles/styles';

import Lightbox from 'react-native-lightbox';
import Dimensions from 'Dimensions';
import Swiper from 'react-native-swiper';

class AnimalImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <Lightbox
          swipeToDismiss={false}
          renderContent={this.renderModal}
          activeProps={this.props}
          style={this.props.lightboxStyle}
        >
          <Image
            source={this.props.thumbnails[this.props.index]}
            resizeMode='cover'
            style={this.props.thumbnailStyle}
          />
        </Lightbox>
      );
  }

  renderModal(props) {
    const WINDOW_WIDTH = Dimensions.get('window').width;
    const WINDOW_HEIGHT = Dimensions.get('window').height;

    const rightArrow = (
      <View style={{
        backgroundColor: 'rgba(150,150,150,0.8)',
        padding: 12,
        marginRight: -11,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
      }}>
        <Text style={styles.buttonText}>›</Text>
      </View>
    );
    const leftArrow = (
      <View style={{
        backgroundColor: 'rgba(150,150,150,0.8)',
        padding: 11,
        marginLeft: -11,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
      }}>
        <Text style={styles.buttonText}>‹</Text>
      </View>
    );

    return (
      <Swiper showsButtons={true} index={props.index} prevButton={leftArrow} nextButton={rightArrow} showsPagination={false}>
        {props.images.map((image, index) => (
            <View key={index} style={{flex: 1}}>
              <Image
                source={image}
                resizeMode='contain'
                style={{width: WINDOW_WIDTH, height: WINDOW_HEIGHT}}
              />
            </View>
        ))}
      </Swiper>
    );
  }
};

export default class InPageImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.firstImage) {
      return (
        <View>
          <AnimalImage
            index={this.props.indexes[0]}
            images={this.props.images}
            thumbnails={this.props.thumbnails}
            thumbnailStyle={[styles.inPageSingleThumbnail, {width: styles.WIDTH - 92}]}
            lightboxStyle={{borderColor: '#3cac54', borderRightWidth: 12}}
          />
        </View>
      );
    } else if (this.props.indexes.length === 1) {
      return (
        <View>
          <AnimalImage
            index={this.props.indexes[0]}
            images={this.props.images}
            thumbnails={this.props.thumbnails}
            thumbnailStyle={styles.inPageSingleThumbnail}
          />
        </View>
      );
    } else if (this.props.indexes.length === 2) {
      return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <AnimalImage
          index={this.props.indexes[0]}
          images={this.props.images}
          thumbnails={this.props.thumbnails}
          thumbnailStyle={styles.inPageDuoThumbnailLeft}
        />
        <AnimalImage
          index={this.props.indexes[1]}
          images={this.props.images}
          thumbnails={this.props.thumbnails}
          thumbnailStyle={styles.inPageDuoThumbnailRight}
        />
      </View>
    );
    } else {
      // More pictures are not supported yet because they are not needed
      return null;
    }
  }
};

InPageImage.propTypes = {
    indexes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    thumbnails: React.PropTypes.array.isRequired,
    images: React.PropTypes.array.isRequired,
};
