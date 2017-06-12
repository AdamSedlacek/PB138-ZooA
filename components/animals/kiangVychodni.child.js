import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/kiangVychodni/01.jpg'),
  require('../../images/animals/kiangVychodni/02.jpg'),
  require('../../images/animals/kiangVychodni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/kiangVychodni/01-thumb.jpg'),
  require('../../images/animals/kiangVychodni/02-thumb.jpg'),
  require('../../images/animals/kiangVychodni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Dobrý den! Jsem kiang východní. Přestože patřím mezi zástupce divokých asijských oslů, myslím si, že vůbec nejsem hloupý jako osel. Koneckonců jsem jen takový poloosel, protože v&nbsp;něčem se podobám spíš divokému koni. S&nbsp;osly mám společnou hlavně tvrdohlavost. Podle mě je to dobrá vlastnost, protože mě pak lidi nedokážou domestikovat a můžu si běhat, jak chci.
        </AnimalText>
        <AnimalText>
        Když nás sem v&nbsp;roce&nbsp;2000 přivezli, byli jsme jen dva – hřebec Sumo a klisna Ulrike. Moc se nám tu líbilo, a tak jsme se hned po setmění rozhodli porazit plot a pořádně prozkoumat zoo. Aby chovatel na nic nepřišel, vrátili jsme se nakonec zase zpět do výběhu. K&nbsp;naší smůle byl však pan chovatel detektiv. Na cestě objevil stopy v&nbsp;podobě hromádek trusu a další neohlášené vycházky nám zakázal.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Ani trochu mi nevadí, že je tahle zoo na kopci. Původem jsem z&nbsp;Tibetské náhorní plošiny, kde jsou pastviny takřka pod oblaky. Nejvíce mých příbuzných bydlí na území Číny, tak jsem vlastně tak trochu Číňan. Asi bych tam ale nechtěl bydlet, protože bych musel za žrádlem putovat veliké vzdálenosti. Musela by mi stačit trocha trávy a nesměl bych se ofrňovat ani nad slanou vodou.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Rád se obklopuji dámami, které mě mají rády a před kterými se mohu předvádět. Svoje stádo si pečlivě hlídám a na nevítané hosty útočím. Klisny si na mě stěžovaly, že si s&nbsp;vetřelcem pletu narozená mláďátka. Abych jim omylem neublížil, dovoluji maminkám, aby se na jaro vzdálily od stáda a v&nbsp;klidu si malá hříbátka vychovaly.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
