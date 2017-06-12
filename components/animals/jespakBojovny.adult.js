import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/jespakBojovny/01.jpg'),
  require('../../images/animals/jespakBojovny/02.jpg'),
  require('../../images/animals/jespakBojovny/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/jespakBojovny/01-thumb.jpg'),
  require('../../images/animals/jespakBojovny/02-thumb.jpg'),
  require('../../images/animals/jespakBojovny/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Jespáci bojovní (<Text style={styles.italic}>Philomachus pugnax</Text>) žijí na severu Evropy nebo Asie. Když se přiblíží zima, táhnou na jih, nejlépe do subsaharské Afriky, někdy však také do Indie nebo Arábie, a to v&nbsp;hejnech, která mohou čítat až tisíce jedinců. Když jsou právě na tahu, můžete je zahlédnout i&nbsp;v&nbsp;České republice.
        </AnimalText>
        <AnimalText>
          Zbožňují vodu, a tak nejraději pobývají na březích jezer a mokřadů, kde se s&nbsp;oblibou brodí bahnem (ne nadarmo se řadí mezi bahňáky) a čas od času odchytí i&nbsp;nějakou tu rybku, jinak ale vezmou zavděk hmyzem a jinými drobnými živočichy, nepohrdnou však ani vodními rostlinami nebo semeny.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Samci samicím přerůstají přes hlavu, obvykle o&nbsp;nějakých 5&nbsp;až 8&nbsp;centimetrů, jinak se však příliš neliší. Všichni mají hnědé peří s&nbsp;černými skvrnami, bílé bříško a dlouhý špičatý zobák. Když ovšem chtějí samci v&nbsp;období páření (květen až červen) zapůsobit na samice, to pak hrají všemi barvami. Tedy všemi ne, ale naroste jim pestrý vztyčitelný límec (hnědý, žlutý až bílý), tváře si napudrují červenožlutou pudřenkou a tou dobou mají za ušima (chocholky). V období toku mají tak variabilní zbarvení, že se údajně nenajdou dva úplně stejní samci. Sem tam připojí i&nbsp;nějakou tu poklonu. Chtějí za každou cenu ubránit svou pozici na tokaništi, a tak vám v&nbsp;tomto období nabídnou náramnou podívanou v podobě soubojů.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jespáci, které můžete vidět zde v&nbsp;expozici Beringie, pocházejí z&nbsp;německé NaturZoo Rheine a většina z&nbsp;nich sem přišla v&nbsp;roce 2010. Společnost jim dělají kulíci píseční, tenkozobci opační a ústřičník velký.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
