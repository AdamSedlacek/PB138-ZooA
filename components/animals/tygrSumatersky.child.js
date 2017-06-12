import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/tygrSumatersky/01.jpg'),
  require('../../images/animals/tygrSumatersky/02.jpg'),
  require('../../images/animals/tygrSumatersky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/tygrSumatersky/01-thumb.jpg'),
  require('../../images/animals/tygrSumatersky/02-thumb.jpg'),
  require('../../images/animals/tygrSumatersky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
  <AnimalText>
    Ahoj! Jmenuji se Satu a v&nbsp;Brně žiji od roku 2005. Narodila jsem se v&nbsp;zoo v&nbsp;Dublinu, což je město v&nbsp;Irsku. Nejsem jen tak obyčejná tygřice, můj poddruh pochází ze Sumatry. To je ostrov patřící k&nbsp;Asii.
  </AnimalText>
  <AnimalText>
    My tygři sumaterští žijeme obvykle v&nbsp;lesích, rašeliništích a bažinách. Už nás ale není moc. Míst, kde se nám dobře žije, totiž ubývá. Z&nbsp;lesů se stávají plantáže a my nemáme kde žít a lovit. Aby toho nebylo málo, najdou se i&nbsp;lidé, kteří nás zabíjejí kvůli kůži a drápům.
  </AnimalText>
  <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
  <AnimalText>
    Každý z&nbsp;nás potřebuje své vlastní území, kde žije dostatek jiných zvířat. Jako všichni tygři i&nbsp;my se živíme lovem. Nejradši máme divoká prasata a jeleny, ale pochutnáme si i&nbsp;na ptácích a rybách. Umíme běhat mnohem rychleji než vy lidé, zvládneme i&nbsp;rychlost vyšší než 50&nbsp;km/h – takže bychom dokázali předhonit například auto v&nbsp;obci. I&nbsp;když jsme menší než ostatní tygři, musíme každý rok doběhnout a ulovit alespoň 50&nbsp;zvířat, abychom neměli hlad a mohli uživit mláďata.
  </AnimalText>
  <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
  <AnimalText>
    O&nbsp;malá tygřata se staráme my samice. Když naše děti vyrostou a jsou jim přibližně dva roky, odcházejí od nás a hledají si svá vlastní území.
  </AnimalText>
  <AnimalText>
    Tady v zoo nejsem sama. Sousední výběh obývá Dandys, který za mnou přijel z&nbsp;Varšavy. Moji chovatelé stejně jako já doufají, že s&nbsp;Dandysem budu mít malá tygřátka. Tak nám držte palce!
  </AnimalText>
</AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
