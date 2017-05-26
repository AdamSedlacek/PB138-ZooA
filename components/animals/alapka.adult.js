import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/alpaka/01.jpg'),
  require('../../images/animals/alpaka/02.jpg'),
  require('../../images/animals/alpaka/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/alpaka/01-thumb.jpg'),
  require('../../images/animals/alpaka/02-thumb.jpg'),
  require('../../images/animals/alpaka/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Rodina lam alpak (<Text style={styles.italic}>Vicugna pacos</Text>) bydlí na tomto místě od roku 2009. Tehdy se stal vůdcem stáda samec Marcel z&nbsp;německé Zoo Stuttgart. Ukázalo se, že je to skutečně dobrý plemeník, a tak hned druhý rok přivedlo několik samic na svět mládě.
        </AnimalText>
        <AnimalText>
          Novorozenec se umí brzy osamostatnit a k&nbsp;matce se chodí jen napít. Samec mívá ve stádě vedoucí úlohu a mláďata se ho naučí brzy respektovat. Když si u&nbsp;nás jednou udělalo mládě z&nbsp;plotu prolézačku a snažilo se jej podlézt, Marcel neváhal a ukázal mu svoji autoritu. Přistoupil k&nbsp;němu, břichem ho přimáčkl k&nbsp;zemi a vyčkal, dokud ho nepřišla vysvobodit matka. Mládě se poučilo a už se nikdy nepokusilo dostat mimo expozici.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Na jiné mládě si Marcel z&nbsp;nějakého důvodu zasedl hned od začátku. Denně ho proháněl a kousal. Za trest byl od stáda oddělen, měl čas zpytovat svědomí a po návratu ke skupině se už choval mírněji. Své teritorium si ovšem nepřestal bránit, tudíž si vyžádal velký respekt i&nbsp;u&nbsp;samotných chovatelů. V&nbsp;současné době už Marcel se skupinou nežije a jeho roli převzal samec Vilém.
        </AnimalText>
        <AnimalText>
          Alpaky jsou známy svou ostražitostí. Shromažďují se ve skupinách a v&nbsp;nebezpečných situacích je za ně vůdčí samec schopen nasadit život. Obecně jsou alpaky zvyklé na dost drsné podmínky Andské náhorní plošiny, kde byly domestikovány už před více než 5&nbsp;000&nbsp;lety. Tvrdá a úzká kopyta jim umožňují snadný pohyb ve skalnatém terénu a spokojí se s&nbsp;velmi chudou stravou ve formě trsů rostlin. Když jim nahlédnete do tlamy, mohou na vás působit jako chudáci, kteří nemají na zubaře. Nemají vpředu horní zuby, a tak trávu uřezávají (podobně jako naše krávy, kozy a ovce) spodními řezáky.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Pro mnohé rodiny, zejména v&nbsp;Peru, jsou alpaky zdrojem obživy. V&nbsp;menší míře jsou chovány pro maso, ale nejvýhodnější je chovat živé alpaky a jednou za čas jim ostříhat srst. Oproti jiným lamám, například vikuním, ji mají sice o&nbsp;trochu drsnější, zato bohatší. Ze získané vlny se vyrábějí typická jihoamerická ponča, svetry, šály a další typy oblečení, které si turisté odvážejí na památku domů.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
