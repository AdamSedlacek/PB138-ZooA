import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/snovacRudozoby/01.jpg'),
  require('../../images/animals/snovacRudozoby/02.jpg'),
  require('../../images/animals/snovacRudozoby/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/snovacRudozoby/01-thumb.jpg'),
  require('../../images/animals/snovacRudozoby/02-thumb.jpg'),
  require('../../images/animals/snovacRudozoby/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Snovači rudozobí jsou ptáčci zpěváčci a je jich nejvíce na celém světě. Víte, jak je veliká Afrika, děti? Obrovská. Žije tam více než miliarda lidí. A představte si, snovačů je tam ještě více!
        </AnimalText>
        <AnimalText>
          	Létají společně ve velkých hejnech. Některá hejna jsou tak obrovitá, že kdybyste byly ve škole, tak přes celičké vyučování i&nbsp;s&nbsp;přestávkami by vám mohlo jedno jediné přelétat nad hlavou. Ano, tak dlouho to může trvat.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          	Tady v&nbsp;zoo máme zatím 69 snovačů. Zkuste je spočítat, jestli jsme se nespletli! Jsou v&nbsp;Africké vesnici a klidně můžete vejít do jejich voliéry.
        </AnimalText>
        <AnimalText>
          Kdybyste si daly dlaně k&nbsp;sobě a snovač by si vám tam sedl, určitě by se pohodlně vešel. Je lehounký jako pírko. Bylo by to, jako kdyby vám někdo nasypal lžíci jemného suchého písku do dlaní.
        </AnimalText>
        <AnimalText>
          Sameček má barevnější a nápadnější peří než samička. Navíc vypadá, jako by měl černou pásku přes oči – jako nosí Zoro mstitel. Možná to Zoro od snovačů odkoukal. Sameček i&nbsp;samička mají rudý zobáček. A proto se tak jmenují – snovači rudozobí.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          U&nbsp;snovačů platí, že hnízdo začíná plést sameček. A je opravdu šikovný, jen kdybyste ho viděly! Jeho hnízdo je ze samých uzlíků stébel trávy, které si sám najde. A když je tak napůl hotov, přivede si tam svoji manželku a společně svůj domov dodělají. Poté tam samička snese 2–4 vejce. Kdybyste nějaké hnízdo zahlédly, ale neviděly vchod, podívejte se zespodu. Tam ho totiž vždycky najdete.
        </AnimalText>
        <AnimalText>
          Čím si, děti, myslíte, že se krmí? Travička to totiž není. Jsou to semínka a na nich si opravdu pochutnávají. Když mají malá ptáčátka, krmí je hmyzem. Potom, co děti vyrostou, zobou semena jako jejich rodiče.
        </AnimalText>
        <AnimalText>
          Snovači mezi sebou mluví neustálým hlasitým štěbetáním. Tak se mějte na pozoru, milí návštěvníci zoo. Pokud spustí všichni naráz – jde o&nbsp;uši!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
