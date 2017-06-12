import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/myvalSeverni/01.jpg'),
  require('../../images/animals/myvalSeverni/02.jpg'),
  require('../../images/animals/myvalSeverni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/myvalSeverni/01-thumb.jpg'),
  require('../../images/animals/myvalSeverni/02-thumb.jpg'),
  require('../../images/animals/myvalSeverni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
            Nejsem jen tak ledajaká medvídkovitá šelma. Jsem mýval severní, tajemná tvář. Maskou jsem se pyšnil ještě před Banderasem. Chcete vědět, co je za ní?
          </AnimalText>
          <AnimalText>
            Přišel jsem do Evropy ze Severní a Střední Ameriky v&nbsp;první polovině 20.&nbsp;století. Ve třicátých letech pár z&nbsp;nás vypustili do volné přírody v&nbsp;Německu a odtamtud jsme se rozšířili všemi směry, i&nbsp;k&nbsp;vám do České republiky. V&nbsp;Evropě je to pohoda. Jasně, jsou tu nějací vlci, rysové a tak, ale kojoti a pumy zůstali hezky v&nbsp;Americe, takže mi tu moc nebezpečí nehrozí.
          </AnimalText>
          <AnimalText>
            Jsem velmi přizpůsobivé zvíře, dejte mi zdroj vody, jezero či vodní tok – zabydlím se všude. V&nbsp;jídle vybíravý nejsem. Dávám sice přednost masu drobných savců, ptáků a ryb, ale sbírám také různé plody, bobule a ořechy. Poradím si i&nbsp;v&nbsp;okolí lidských obydlí. Klidně si zapytlačím na domácí drůbeži a z&nbsp;odpadků taky něco vyhrabu.
          </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Umím skvěle plavat i&nbsp;šplhat, mám na to šikovné tlapky. Rád si hovím ve větvích stromů. Když u&nbsp;toho narazím na něčí hnízdo, pro mě jen dobře – mám to i&nbsp;se svačinkou. Horší je to pro vzácné druhy ptáků a hadů. Mně je to jedno, ale ochranáře to žere, hehe. Jsem medvídek mazaný a nemají to se mnou jednoduché.
          </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Přes den se schovávám a aktivní jsem především v&nbsp;podvečer a v&nbsp;noci. Na zimu se dobře vykrmím, pospím si nepravým zimním spánkem a do jara většinu ze zásob strávím. My mývalové jsme ve volné přírodě samotáři – až na matky s&nbsp;mláďaty. Já jsem se do Brna přistěhoval v&nbsp;roce 2015 s&nbsp;kamarádem a sličnou slečnou, a ačkoliv nemám ve výběhu soukromí, takto mi to taky vyhovuje. Ale dost bylo řečí, nemůžu vám na sebe odkrýt všechno!
          </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
