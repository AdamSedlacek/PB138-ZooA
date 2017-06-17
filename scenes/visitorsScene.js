import React from 'react';
import styles from '../styles/styles';
import {WIDTH} from '../styles/styles';

import {
  View,
  ScrollView,
  Image,
  Linking,
  TouchableHighlight,
} from 'react-native';
import Text from '../components/animalText';
import ImageLabel from '../components/imageLabel';
import Hyperlink from 'react-native-hyperlink'
import InPageImages from '../components/inPageImages'

export default class VisitorsScene extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Pro návštěvníky',
  }

  _openURL(url) {
    Linking.openURL(url);
  }

  render() {
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 5.0;

    const PADDING = 20;
        const ICON_SIZE = 64;
        const ICON_RIGHTMARGIN = 10;

        const ICON_STYLE = {width: ICON_SIZE, height: ICON_SIZE};

    return (
      <Image
        source={require('../images/background/about.png')}
        resizeMode="cover"
        style={{flex: 1, width: WIDTH}}
      >
        <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM} style={[styles.contentView, {backgroundColor: undefined}]}>
        <Text style={{fontWeight: '700', paddingTop: 10}}>
          Kdy máme otevřeno?
        </Text>
        <Text style={{textAlign: 'center'}}>
          Listopad-Únor 9-16{"\n"}
          Březen, Říjen 9-17{"\n"}
          Duben-Září 9-18
        </Text>

        <Text style={{fontWeight: '700', paddingTop: 10}}>
          Jak se k nám dostat?
        </Text>
        <Text style={{textAlign: 'center'}}>
          Trolejbus 30{"\n"}
          Tramvaj 1, 3, 11{"\n"}
          Autobus 50, 52, 54
        </Text>

        <Text style={{fontWeight: '700', paddingTop: 10}}>
          Jak se s námi spojit?
        </Text>
        <Text style={{textAlign: 'center'}}>
          zoo@zoobrno.cz {"\n"}
          546 432 311
        </Text>
        <Text style={{textAlign: 'center', paddingTop: 10}}>
          Zoo Brno a stanice zájmových činností, příspěvková organizace {"\n"}
          U Zoologické zahrady 46 {"\n"}
          635 00 Brno
        </Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: PADDING/2, justifyContent: 'center'}}>
                  <InPageImages
                    sources={[
                      require('../images/icons/facebook.png'),
                      require('../images/icons/instagram.png'),
                      require('../images/icons/youtube.png'),
                      require('../images/icons/twitter.png'),
                      require('../images/icons/tripadvisor.png'),
                    ]}
                    style={ICON_STYLE} marginRight={ICON_RIGHTMARGIN}/>
                </View>
        </ScrollView>
      </Image>
    );
  }
}
