import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/rarohVelky/01.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/rarohVelky/01-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Tady Marco, raroh velký, latinsky <Text style={styles.italic}>Falco cherrug</Text>, z&nbsp;čeledi sokolovitých. V&nbsp;brněnské zoo jsem už tolik let, co jsem živ, to je od roku 1998.
        </AnimalText>
        <AnimalText>
          Jsem velký skoro jako káně, to je zhruba půl metru. Kdybych tu měl partnerku, poznali byste ji podle toho, že by byla ještě větší než já. Jako správný dravý pták se pyšním ostrými drápy a také silným zahnutým zobákem. Ozobí a kroužky kolem očí i nohy mladých rarohů jsou modrošedé, žloutnou až věkem. Moje silueta se vyznačuje rezavohnědým peřím, které je nejvýraznější na zádech, a bělavou hlavou.
        </AnimalText>
        <AnimalText>
          Mám pro sokolovité typická úzká křídla a ocas. Na rozdíl od sokola stěhovavého se však na konci můj ocas nezužuje a při manévrování ho rozprostírám. Létám sice pomaleji než on, ale jsem obratnější. Dokážu při lovu zabrzdit a změnit směr. To se hodí při lovu na zemi. Když se řítím s&nbsp;křídly těsně u&nbsp;těla střemhlav za svou kořistí, připomínám dešťovou kapku.
        </AnimalText>
        <AnimalText>
          Můj druh žije na území východní Evropy až po západní Čínu. Je možno nás tedy spatřit třeba i&nbsp;na Slovensku a vzácně též na východní Moravě. V&nbsp;celé Evropě nás žije 370–610&nbsp;párů. Po vzoru svých sokolovitých kolegů obsazuju stará hnízda jiných dravců, volavek nebo dalších větších ptáků na vysokých stromech či ve skalních dutinách. Živím se drobnými savci a ptáky do velikosti koroptve. V&nbsp;Česku si rád pochutnám na holubech, havranech, hraboších či syslech.
        </AnimalText>
        <AnimalText>
          Nevrhám se po všem, co se hýbe, ale kořist si pečlivě vybírám. Dokážu ulovit i&nbsp;zvířata větší, než jsem já. Pro mou inteligenci, učenlivost a další schopnosti, které jsem již zmínil, si mě už ve středověku oblíbili sokolníci. Je to však i&nbsp;můj kámen úrazu. Náš odchyt a ilegální prodej na Blízkém východu i&nbsp;v&nbsp;Asii je jeden z&nbsp;hlavních problémů mého druhu. Za posledních několik let naše řady dost prořídly a patříme mezi ohrožené druhy. V&nbsp;Evropě je nás jako šafránu kvůli kultivaci krajiny, tedy hlavně expanzi zemědělství, úbytku pastvin, kde jsme rádi lovili, a podobně. Tady se k&nbsp;nám sokolníci chovají férově a existují i&nbsp;další ochranné programy, které nám pomáhají zabydlit se zpátky tam, kde nám je dobře.
        </AnimalText>
        <AnimalText>
          Na viděnou!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
