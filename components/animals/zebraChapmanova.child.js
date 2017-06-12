import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/zebraChapmanova/01.jpg'),
  require('../../images/animals/zebraChapmanova/02.jpg'),
  require('../../images/animals/zebraChapmanova/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/zebraChapmanova/01-thumb.jpg'),
  require('../../images/animals/zebraChapmanova/02-thumb.jpg'),
  require('../../images/animals/zebraChapmanova/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Milí kamarádi, jmenuji se zebra, ale to určitě každý z&nbsp;vás hned uhodl. Jenže já nejsem obyčejná zebra, jsem zebra Chapmanova. Nejspíš si říkáte, v&nbsp;čem jsem asi jiná? Tak se na mě pořádně podívejte. Jsem pruhovaná jako každá jiná zebra, ale mezi širokými černými pruhy mám ještě tmavohnědé. Vidíte je? Žiji na savanách jihovýchodní Afriky, a když je vedro, vlnící se vzduch a mé pruhy způsobí, že z&nbsp;dálky nejsem poznat. Zajímavé také je, že žádná jiná zebra nemá stejné pruhy. Tak dokážeme rozeznat své maminky i&nbsp;děti od ostatních zeber, jsme prostě jedineční. Pokud budete mít štěstí, uvidíte mládě, které je hnědobílé, srst nám totiž ztmavne až v&nbsp;dospělosti. Rádi se kamarádíme a paseme také se žirafami a gazelami, jelikož odhalí nebezpečí dřív a my můžeme utéct. A že utíkáme opravdu rychle! Dokážeme běžet takovou rychlostí, jako jede auto ve městě.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Spousta z&nbsp;vás, kamarádi, už o&nbsp;nás někdy řekla, že jsme pruhovaní koně, ale to my nejsme. Sice jsou to naši příbuzní, společně s&nbsp;nimi a osly patříme ke stejnému rodu, ale na nás se nejezdí, navíc máme kratší nohy a větší hlavu. Schválně si nás pořádně prohlédněte. Také máme oči na stranách hlavy, a vidíme tak na všechny strany, dokonce i&nbsp;v&nbsp;noci. Uši jsou zajímavé ještě víc, otáčíme je za zvukem, takže se nemusíme ani pohnout. Prostě lenivě zebrujeme.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Tak, kamarádi, nezebrujte a dojděte se na nás zase podívat!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
