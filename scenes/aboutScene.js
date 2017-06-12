import React from 'react';
import styles from '../styles/styles';
import {WIDTH} from '../styles/styles';

import {
  View,
  ScrollView,
  Image,
} from 'react-native';
import Text from '../components/animalText'
import InPageImages from '../components/inPageImages'
import Dimensions from 'Dimensions';

export default class AboutScene extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'O aplikaci',
  }

  render() {
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 5.0;

    const PADDING = 20;
    const LOGO_HEIGHT = 90;
    const LOGO_TOPMARGIN = 10;
    const LOGO_RIGHTMARGIN = 5;

    const logos = [
      require('../images/logo-zoo.png'),
      require('../images/logo-ctt.png'),
      require('../images/logo-plin.jpg'),
      require('../images/logo-ff.png'),
      require('../images/logo-mu.png'),
      require('../images/logo-kevin.png')
    ];

    return (
      <Image
        source={require('../images/background/about.png')}
        resizeMode="cover"
        style={{flex: 1, width: WIDTH}}
      >
      <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM} style={[styles.contentView,{backgroundColor: undefined}]}>
        <Text style={{paddingTop: 0}}>
          Aplikace vznikla ve spolupráci Zoo Brno a Masarykovy univerzity. Na projektu se podíleli studenti oboru Český jazyk se specializací počítačová lingvistika (PLIN) a pracovníci Ústavu českého jazyka Filozofické fakulty MU. Nasazení aplikace do praxe bylo finančně podpořeno Centrem pro transfer technologií MU.
        </Text>

        <View style={{height: (LOGO_HEIGHT + LOGO_TOPMARGIN), marginTop: LOGO_TOPMARGIN, backgroundColor: 'white'}}>
          <InPageImages sources={logos.slice(0,3)} style={{width: (WIDTH-PADDING-2*LOGO_RIGHTMARGIN)/3, height: LOGO_HEIGHT}} marginRight={LOGO_RIGHTMARGIN}/>
        </View>
        <View style={{height: (LOGO_HEIGHT + LOGO_TOPMARGIN), marginTop: LOGO_TOPMARGIN, backgroundColor: 'white'}}>
          <InPageImages sources={logos.slice(3)} style={{width: (WIDTH-PADDING-2*LOGO_RIGHTMARGIN)/3, height: LOGO_HEIGHT}} marginRight={LOGO_RIGHTMARGIN}/>
        </View>

        <Text>
          Koordinace projektu: Dana Hlaváčková
        </Text><Text>
          Programování aplikace: Marek Grác
        </Text><Text>
          Design: Kevin W. Scherrer
        </Text><Text>
          Závěrečné korektury v češtině: Hana Žižková
        </Text><Text>
          Příprava textů, korektury, překlady do angličtiny a všechny další pomocné práce:
          Babincová Adriana,
          Bendáková Eliška,
          Findejsová Lucie,
          Geržová Helena,
          Holaj Richard,
          Jančová Nikola,
          Kachlířová Miroslava,
          Klement David,
          Konečný Jakub,
          Koníková Michaela,
          Kubešová Nikola,
          Kunovský Adam,
          Masopustová Markéta,
          Novotná Marie,
          Obluková Barbora,
          Paulíčková Lucie,
          Petříková Nikola,
          Plocková Anna,
          Procházková Jana,
          Stará Marie,
          Šebestová Běla,
          Tomečková Kateřina,
          Vacíková Michala,
          Vostřelová Klára
        </Text>
      </ScrollView>
      </Image>
    );
  }
};
