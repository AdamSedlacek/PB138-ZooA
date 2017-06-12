import React from 'react';
import { TabNavigator } from 'react-navigation';
import styles from '../styles/styles';
import AnimalNeighbourScene from '../components/animalNeighbourScene';

import {
  View,
  ScrollView,
  Image,
  Text,
  Alert,
} from 'react-native';

import animals from '../animals';

class TextTab extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = (navigation) =>
    ({
      title: 'Text',
    tabBarIcon: ({tintColor}) => (
      <Image
          source={require('../images/tab-icons/t.png')}
          style={[styles.tabIcons, {backgroundColor: tintColor}]}
      />
    )
  })

  render() {
    let AnimalDetail;
    const animalName = this.props.screenProps.animal;

    if (!(animalName in animals)) {
        return (
          <Text>Neznámý QR kód načten: {animalName}</Text>
        );
    }

    if (this.props.screenProps.readerLevel === "adult") {
      AnimalDetail = animals[animalName].contentAdult;
    } else {
      AnimalDetail = animals[animalName].contentChild;
    }

    return (
      <ScrollView>
        <AnimalDetail animal = {animalName} />
      </ScrollView>
    );
  }
}

class QRTab extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'QR tab',
    tabBarIcon: ({tintColor}) => (
      <Image
          source={require('../images/tab-icons/qr.png')}
          style={[styles.tabIcons, {backgroundColor: tintColor}]}
      />
    )
  }

  render() {
    return (
      <Text>QR tab</Text>
    );
  }
}

class NeighbourTab extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Sousedi',
    tabBarIcon: ({tintColor}) => (
      <Image
          source={require('../images/tab-icons/neighb.png')}
          style={[styles.tabIcons, {backgroundColor: tintColor}]}
      />
    )
  }

  render() {
    const animalName = this.props.screenProps.animal;

    if (!(animalName in animals)) {
        return (
          <Text>Neznámý QR kód načten: {animalName}</Text>
        );
    }

    return (
      <AnimalNeighbourScene
        navigation={this.props.navigation}
        animal={animalName} />
    );
  }
}

const MainScreenNavigator = TabNavigator({
	Text: { screen: TextTab },
  QR: { screen: QRTab },
  Neighbour: { screen: NeighbourTab }
});

export default class AnimalMainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainScreenNavigator screenProps={this.props}/>
    );
  }
}
