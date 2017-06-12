import React from 'react';
import styles from '../styles/styles';

import {
  ScrollView,
  TouchableHighlight,
  Image,
} from 'react-native';
import Text from '../components/animalText';
import Dimensions from 'Dimensions';

import {scenes, sceneTitles} from '../scenes';

class MainMenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bgColor = sceneTitles[this.props.scene].bgColor;
    const title = sceneTitles[this.props.scene].title;

    return (
      <TouchableHighlight
        underlayColor='#aaaaaa'
        onPress={() => {this.props.navigation.navigate(sceneTitles[this.props.scene].name, {animal: 'tygrSumatersky'})}}
        >
        <Image
          style={styles.mainMenuItem}
          source={sceneTitles[this.props.scene].background}
          resizeMode="cover"
        >
            <Text style={[styles.mainMenuItemText, {
              textAlign: this.props.alignText,
              paddingRight: 32,
              paddingLeft: 32,
            }]}>{title}</Text>
          </Image>
        </TouchableHighlight>
    );
  }
}

export default class MenuScene extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerVisible: false,
    headerMode: 'screen',
  }

  render() {
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 5.0;
    const TEXT_COLOR = 'black';

    const PADDING = 20;
    const WIDTH = Dimensions.get('window').width - PADDING;
    const menuItems = [scenes.QR_READER, scenes.ANIMAL_LIST, scenes.EVENTS, scenes.GAME, scenes.SERVICES, scenes.VISITORS, scenes.ABOUT];

    return (
      <Image
        source={require('../images/background/about.png')}
        resizeMode="cover"
        style={{flex: 1, width: WIDTH+20}}
      >
      <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM} style={[styles.contentView,{paddingLeft: 0, paddingRight: 0, paddingTop: 0, backgroundColor: undefined}]}>
        {
        menuItems.map((itemInMenu, index) => (
          <MainMenuItem
            key={index}
            alignText={index % 2 ? 'left' : 'right'}
            scene={itemInMenu}
            navigation={this.props.navigation}
          />
        ))
        }
      </ScrollView>
      </Image>
    );
  }
}
