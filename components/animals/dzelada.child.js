import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/dzelada/01.jpg'),
  require('../../images/animals/dzelada/02.jpg'),
  require('../../images/animals/dzelada/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/dzelada/01-thumb.jpg'),
  require('../../images/animals/dzelada/02-thumb.jpg'),
  require('../../images/animals/dzelada/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj děti, my jsme dželady. Že nás neznáte? Rády se vám představíme. Jmenujeme se Heiko, Helge a Asrak. Já jsem Heiko a s&nbsp;Helgem zde pobýváme od roku 2005, Asrak je tu od roku 2008. Všichni jsme byli přivezeni z&nbsp;Německa, ze země, která sousedí s&nbsp;Českou republikou. Známí jsme také pod názvem dželada hnědá nebo pavián dželada.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Charakteristickým znakem je pro nás holá prsní růžová ploška, kterou lemuje světle zbarvená srst. My samci jsme však celkově nápadnější než samice. Máme hnědočernou srst v&nbsp;mnoha odstínech a nápadně zbarvený obličej. Samice jsou většinou čistě tmavě hnědé barvy. Naše průměrná délka těla se pohybuje mezi 70–74&nbsp;cm a hmotnost kolem 19&nbsp;kg, přičemž samice bývají spíše drobnější a lehčí a mají také kratší ocas. Naše sedací mozoly nám umožňují sedět na kamenitých podložkách. Vydržíme to dlouho, dlouho, předlouho. Lidé nás občas přirovnávají k&nbsp;paviánům, ale od nich se lišíme v&nbsp;několika bodech. Máme kratší čelisti, delší obličeje s&nbsp;tupým nosem a vystupujícími lícními vaky, velmi dlouhé špičáky a stoličky, které mají vrásčitý povrch.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Obýváme vysoko položené náhorní plošiny a louky na území Etiopie a Eritreje, tedy v&nbsp;zemích na jiném kontinentě. Většinu dne trávíme na horských loukách, kde vsedě vyhledáváme rostlinnou stravu. V&nbsp;období dešťů dáváme přednost zeleným částem rostlin, plodům a květům. V&nbsp;období sucha zase baštíme semena, trávu nebo hlízy. Protistojný palec nám umožňuje dokonalé třídění trávy a travních semen. Jednu ruku používáme ke shromažďování potravy, druhou ruku k&nbsp;jejímu třídění. Naše mláďata se rodí jako jedináčci a na matce jsou závislá po dobu 12–18 měsíců, my samci se na péči o&nbsp;potomky většinou nepodílíme. Víte, jak se dorozumíváme? Používáme celou řadu posunků, například cenění zubů, trhání hlavou, ale i&nbsp;hlasové projevy – občas prostě křičíme jako opice.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
