import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/jerabMandzusky/01.jpg'),
  require('../../images/animals/jerabMandzusky/02.jpg'),
  require('../../images/animals/jerabMandzusky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/jerabMandzusky/01-thumb.jpg'),
  require('../../images/animals/jerabMandzusky/02-thumb.jpg'),
  require('../../images/animals/jerabMandzusky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Jeřáb mandžuský (latinsky <Text style={styles.italic}>Grus japonensis</Text>) je druhým největším žijícím druhem jeřába. Dospělí jedinci mohou být až 150&nbsp;cm vysocí s&nbsp;rozpětím křídel 220&nbsp;až 250&nbsp;cm. Jejich průměrná váha se pohybuje kolem 7&nbsp;až 10&nbsp;kg, nejtěžší jedinci mohou vážit až 15&nbsp;kg. Dospělci mají bílé peří, pouze na krku a na části křídel je černě zbarveno. Na hlavě si můžete všimnout červené lysinky, která se s&nbsp;přibývajícím věkem zvětšuje. Své typické zbarvení získají dospívající jedinci ve věku přibližně dvou let.   
        </AnimalText>
        <AnimalText>
          Jeřábi většinou hnízdí v&nbsp;mokřadech na Dálném východě a Japonském souostroví. Jejich přirozených hnízdišť však ubývá, a proto jsou jeřábi mandžuští zapsáni na červeném seznamu IUCN jako ohrožený druh. Živí se zejména bezobratlými, drobnými obratlovci a vodními rostlinami, v&nbsp;zimě ale nepohrdnou ani zrním. Jako většina jeřábů jsou i&nbsp;jeřábi mandžuští tažným druhem, který se na zimu stěhuje na východ Asie. Výjimkou je hejno asi tisícovky jeřábů, kteří žijí celoročně na ostrově Hokkaidó.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Tito elegantní ptáci spolu žijí v&nbsp;monogamním svazku, který vzájemně utužují společným troubením a tancem, při kterém roztahují křídla, uklánějí se a vyskakují. Jejich troubení je nezaměnitelné. Jeřábi mají kostěnou část průdušnice, která je navíc prodloužená a stočená v dutině hrudní kosti, což je unikátní a rezonanci ještě zesiluje. Jejich volání se může ozývat i&nbsp;na několik kilometrů. V&nbsp;přírodě se dožívají věku kolem 30&nbsp;let, v&nbsp;lidské péči až 65&nbsp;let. Na Dálném východě jsou jeřábi považováni za posvátný symbol dlouhověkosti a manželského štěstí.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Naše samice jeřába mandžuského se narodila v&nbsp;roce 2002 v&nbsp;moskevské zoo a zde žije od roku 2005. Samec se narodil roku 2005 v Zoo Schönbrunn a k&nbsp;nám přijel o&nbsp;rok později.
        </AnimalText>
        <AnimalText>
          Jedinci opačného pohlaví jsou schopni spolu léta setrvávat společně v&nbsp;jedné expozici, aniž by měli mláďata. O&nbsp;to hodnotnější je pro nás fakt, že brněnští jeřábi tvoří harmonický pár, kterému se v&nbsp;roce 2014 podařilo zplodit první potomky. Další úspěch náš pár čekal hned následující rok, kdy se úspěšně podíleli na záchraně svého druhu v&nbsp;rámci Evropského záchovného programu. První dvě oplozená vajíčka byla transportována v&nbsp;květnu 2015 do Amurské oblasti (Rusko), kde se z&nbsp;jednoho z&nbsp;nich v&nbsp;biologické stanici úspěšně vyklubalo mládě. Malý jeřáb se poté zapojil do procesu adaptace na okolní prostředí, aby mohl být vypuštěn do volné přírody.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
