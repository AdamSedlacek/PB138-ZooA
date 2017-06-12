import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { StackNavigator } from 'react-navigation';

import AboutScene from './scenes/aboutScene';
import VisitorsScene from './scenes/visitorsScene';
import ServicesScene from './scenes/servicesScene';
import GameScene from './scenes/gameScene';
import EventsScene from './containers/eventsScene';
import MenuScene from './scenes/menuScene';
import AnimalListScene from './scenes/animalListScene';
import AnimalScene from './containers/animalScene';
import QRScene from './containers/qrScene';
import {scenes} from './scenes.js';

const zobro2 = StackNavigator({
  [scenes.MAIN_MENU]: { screen: MenuScene },
  [scenes.ANIMAL_DETAIL]: { screen: AnimalScene },
  [scenes.ANIMAL_LIST]: { screen: AnimalListScene },
  [scenes.ABOUT]: { screen: AboutScene },
  [scenes.EVENTS]: { screen: EventsScene },
  [scenes.SERVICES]: { screen: ServicesScene },
  [scenes.GAME]: { screen: GameScene },
  [scenes.VISITORS]: { screen: VisitorsScene },
  [scenes.QR_READER]: { screen: QRScene},
}, {
  initialRouteName: scenes.MAIN_MENU,
  mode: 'modal'
});

export default zobro2;
