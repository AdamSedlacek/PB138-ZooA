import React from 'react';
import {
  View,
  Text,
  ListView,
  TouchableHighlight, Alert, Image,
} from 'react-native';

import styles from '../styles/styles';
import animals from '../animals';

var navigation;

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const animal = animals[this.props.item.animal];
    const direction = this.props.item.direction;
    let directionArrow = null;

    if (direction === 'front') {
        directionArrow = require('../images/tab-icons/arrow-front.png');
    } else if (direction === 'back') {
      directionArrow = require('../images/tab-icons/arrow-back.png');
    } else if (direction === 'right') {
      directionArrow = require('../images/tab-icons/arrow-right.png');
    } else if (direction === 'left') {
      directionArrow = require('../images/tab-icons/arrow-left.png');
    }

    if ((animal === undefined) || (! 'name' in animal)) {
      return null;
    }

    return (
      <TouchableHighlight
        onPress={() => { navigation.navigate('ANIMAL_DETAIL', {animal: this.props.item.animal})}}
        underlayColor='#bbbbbb'
      >
        <View style={[styles.eventItem, {flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: this.props.backgroundColor}]}>
        <Image style={{height: 50, width: 50, marginRight: 10}} source={directionArrow} resizeMode='contain' />
        <Text style={styles.eventItemText}>{animal.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default class AnimalNeighbourScene extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        dataSource: ds.cloneWithRows(
          animals[this.props.animal].neighbours.map(function(v) { return v })
      )};
  }

  render() {
    const backgroundColors = [
      '#37af54',
      '#2d9946',
      '#267f3b',
      '#20642f',
      '#0b2611',
      '#20642f',
      '#267f3b',
      '#2d9946',
    ];

    let counter = 0;
    navigation = this.props.navigation;

    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => {
            let backgroundColor = backgroundColors[counter % backgroundColors.length];
            counter++;

            return (<Cell item={data} backgroundColor = {backgroundColor} />);
          }}
        />
    );
  }
}

AnimalNeighbourScene.propTypes = {
    animal: React.PropTypes.string.isRequired,
};
