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
          Milí kamarádi,
        </AnimalText>
        <AnimalText>
           jmenuji se raroh velký a patřím mezi sokoly. Když se na mě podíváte, všimnete si, že jsem hnědě zbarvený, bříško mám však bílé a ozobí a nohy žluté. Pokud ale uvidíte mládě raroha, bude mít nožky modrošedé.
        </AnimalText>
        <AnimalText>
          Musím vám říct, že jsem jeden z&nbsp;nejvzácnějších ptáků, který sídlí na území České republiky. A pyšním se ještě jedním prvenstvím, jsem totiž největší sokolovitý dravec. Vlastně vynikám také v&nbsp;tom, že jako jediný ze všech sokolovitých nestavím vlastní hnízdo. Raději si vyhlédnu pěkné místečko ve skalách a tam hnízdím celou dobu. Pokud ale žádné takové místo nikde poblíž není, musím se nastěhovat do hnízda někoho jiného.
        </AnimalText>
        <AnimalText>
          Podívejte se na má křídla, jsou velká, že? Díky nim jsem naprostý mistr v&nbsp;letu a dokážu létat i&nbsp;v&nbsp;noci! Když si chci ulovit něco k&nbsp;večeři, můžu takového malého ptáka či savce dlouho pronásledovat, nebo se na něj vrhnu střemhlav, protože umím létat opravdu velmi rychle. Při svém útoku dokonce dokážu zabrzdit na místě a změnit směr! Ale nemyslete si, že jsem nějaký raroh předvádivec. Naopak, žiji tiše a nenápadně se svou družkou. Navíc jsem opravdu inteligentní, svoji kořist si totiž pečlivě vybírám a nevrhám se hned po všem jako třeba jestřáb, jsem prostě Velký raroh velký.
        </AnimalText>
        <AnimalText>
          Mějte se pěkně a přijďte se na nás podívat zase příště.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
