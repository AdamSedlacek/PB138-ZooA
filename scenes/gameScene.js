import React from 'react';
import styles from '../styles/styles';

import {
  View,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import Text from '../components/animalText'
import Dimensions from 'Dimensions';
import Hyperlink from 'react-native-hyperlink'

export default class AboutScene extends React.Component {
  constructor(props) {
    super(props);
  }

  _openURL(url) {
    Linking.openURL(url);
  }

  static navigationOptions = {
    title: 'Šifrovací hra',
  }

  render() {
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 5.0;
    const TEXT_COLOR = 'white';

    const WIDTH = Dimensions.get('window').width - PADDING;
    const PADDING = 20;

    return (
      <Image
        source={require('../images/background/about.png')}
        resizeMode="cover"
        style={{flex: 1, width: WIDTH+PADDING}}
      >
      <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM} style={[styles.contentView, {backgroundColor: undefined}]}>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)'}}>
          Čeká na vás spousta zábavy, cesta kolem světa, 10&nbsp;stanovišť a jedna lamí píseň.
        </Text><Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', paddingTop: 15}}>
          Šifrovací hra je zdarma, platí se jen vstupné do zoo. Potřebujete s&nbsp;sebou dobře nabitý chytrý telefon / tablet s&nbsp;připojením na internet a tužku.
        </Text><Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', paddingTop: 15}}>
          Start hry je na konci vstupního esíčka před Tygřími skalami.
        </Text><Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', paddingTop: 15}}>
          Více se o&nbsp;šifrovací hře Dotkni se evoluce dozvíte na
        </Text>
        <Hyperlink onPress={() => {this._openURL('http://www.dotkni-se-evoluce.cz')}}>
          <Text style={[styles.ctext, {color: 'white', fontWeight: '700', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0)'}]}>www.dotkni-se-evoluce.cz</Text>
        </Hyperlink>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)'}}>
          P. S.: Je to opravdu pecka! A jsme první gamifikovaná zoo v&nbsp;ČR.
        </Text>

        <Image source={require('../images/cryptomania.jpg')} style={{width: WIDTH, height: 500, marginRight: 0, marginLeft: 0}} resizeMode='contain'/>
      </ScrollView>
      </Image>
    );
  }
}
