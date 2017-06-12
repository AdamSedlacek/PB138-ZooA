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
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Tamarín žlutoruký (latinsky <Text style={styles.italic}>Saguinus midas</Text>, anglicky <Text style={styles.italic}>red-handed tamarin</Text>, tedy červenoruký) je primát původem z&nbsp;Jižní Ameriky typický svým výrazným žlutočerveným zbarvením na rukou a nohou. V&nbsp;naší zoo najdete tyto opičky dvě. Jednak máme samečka Henryho, který se narodil v&nbsp;roce 2011 a z&nbsp;Hodonína k&nbsp;nám dorazil o&nbsp;dva roky později, a jednak samičku jménem Belle, která se narodila v&nbsp;létě roku 2013 v&nbsp;Jindřichově Hradci. Společnost Henrymu pak přišla dělat na podzim roku 2014, od té doby jsou tu spolu.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Přirozený domov tamarína žlutorukého se nachází na území Brazílie, Guyany, Francouzské Guyany, Surinamu a částečně Venezuely. Tamarín žije ve skupinách o&nbsp;4–15 jedincích, mezi kterými panuje relativně nízká rivalita, a to dokonce i&nbsp;mezi pářícími se samci. Zajímavé je, že z&nbsp;celé skupiny je vždy březí pouze jedna samička, která pak porodí jedno až dvě mláďata. O&nbsp;ta se stará primárně otec, který je matce předává jen ke kojení. Do ochrany mláděte je však zapojena celá skupina. Obrana je primárním smyslem fungování ve skupinách, a i&nbsp;když tamaríni vypadají jako malé neškodné opičky, jejich tlapky jsou zakončeny ostrými drápky, které mají na prstech místo nehtů. Díky nim také dokážou velice dobře šplhat po stromech. Výjimečně dobře se vyrovnávají i&nbsp;s&nbsp;pádem na zem, bez úhony skočí z&nbsp;výšky až 18&nbsp;metrů.
        </AnimalText>
        <AnimalText>
          Délka dospělého jedince se pohybuje mezi 20 a 30&nbsp;centimetry, přičemž ocas bývá až dvakrát delší než samotné tělo. Tamarín obvykle váží asi půl kilogramu a dožívá se 10&nbsp;let, v&nbsp;lidské péči až 15&nbsp;let.
        </AnimalText>
        <AnimalText>
          Rádi si pochutnají na ovoci či květinách, případně malých zvířatech, jako jsou pavouci, ještěři či žáby. Samotní tamaríni jsou zase oblíbenou potravou divokých koček, hadů a dravých ptáků.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
