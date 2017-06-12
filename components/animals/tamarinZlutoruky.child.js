import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/tamarinZlutoruky/01.jpg'),
  require('../../images/animals/tamarinZlutoruky/02.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/tamarinZlutoruky/01-thumb.jpg'),
  require('../../images/animals/tamarinZlutoruky/02-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Milé člověčátko,
        </AnimalText>
        <AnimalText>
          vítám tě tu mezi námi žlutorukými tamaríny. Snad abych se představil. Jmenuji se Henry a tady moje slečna je Belle. Má takové cizokrajné jméno, že? Přesto se narodila v&nbsp;České republice, tak jako já.
        </AnimalText>
        <AnimalText>
          Naši předci, prababičky a pradědečkové, jejich pradědečkové a jejich pradědečkové pocházejí z&nbsp;Brazílie a Surinamu. Oba tyto státy se nachází v&nbsp;Jižní Americe. Krajinou, kde se žlutorucí tamaríni vyskytují nejčastěji, je oblast u&nbsp;řeky, může to být nížina nebo i&nbsp;horský prales.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Belle je jen o&nbsp;dva roky mladší než já, ale jaká je to skotačilka. Skáče z jednoho stromu na druhý, dokáže seskočit na zem z&nbsp;koruny stromu, žádné zranění si nepřivodí a ještě se tváří, jako by se nic zvláštního nedělo. Teda neříkám, že já bych to nedokázal.
        </AnimalText>
        <AnimalText>
          Často nás na zemi neuvidíš, naše milé člověčátko, my jsme opičky a těm je nejlépe kde? Na stromě. Tak ve výšce pěti metrů, kde už se ztrácíme z&nbsp;očí. Jsme docela malinké, hlavně oproti šimpanzům nebo gorilám. My tamaríni jsme dokonce o&nbsp;trochu menší než normální kočka, zato ocásek nás mnohdy přeroste i&nbsp;dvakrát. Naštěstí nejsme úplně přehlédnutelní. Jistě sis, bystré člověčátko, všimlo našich pacek a tlapek. Kožíšek je na nich totiž kanárkově žlutý, zatímco zbytek má barvu černou.
        </AnimalText>
        <AnimalText>
          Naší oblíbenou potravou jsou sladké plody, ale i&nbsp;květy a listy. Někdy si pochutnáme na vajíčkách nebo semenech rostlin či schramstneme nějaký ten hmyz nebo jiné malé živočichy.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
