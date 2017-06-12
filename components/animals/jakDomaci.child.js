import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/jakDomaci/01.jpg'),
  require('../../images/animals/jakDomaci/02.jpg'),
  require('../../images/animals/jakDomaci/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/jakDomaci/01-thumb.jpg'),
  require('../../images/animals/jakDomaci/02-thumb.jpg'),
  require('../../images/animals/jakDomaci/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          KLOPÝTAVÁ
        </AnimalText>
        <AnimalText>
        
        </AnimalText>
        <AnimalText>
        Jak se češe jak,
        </AnimalText>
        <AnimalText>
          když má jen obrovská kopyta?
        </AnimalText>
        <AnimalText>
          Tak nějak všelijak.
        </AnimalText>
        <AnimalText>
          Přes horské hřebeny klopýtá.
        </AnimalText>
        <AnimalText>
        
        </AnimalText>
        <AnimalText>
        Protože má hodně síly,
        </AnimalText>
        <AnimalText>
          unese náklad, i&nbsp;když je chlad,
        </AnimalText>
        <AnimalText>
          lidé si ho ochočili.
        </AnimalText>
        <AnimalText>
          Pomáhají mu srst vyčesat.
        </AnimalText>
        <AnimalText>
        
        </AnimalText>
        <AnimalText>
          Z&nbsp;dlouhé tkají deky, stany,
        </AnimalText>
        <AnimalText>
          co zahřejí z&nbsp;každé strany.
        </AnimalText>
        <AnimalText>
          Na zádech tak dlouhá není,
        </AnimalText>
        <AnimalText>
          dělá se z&nbsp;ní oblečení.
        </AnimalText>
        <AnimalText>
        
        </AnimalText>
        <AnimalText>
          …
        </AnimalText>
        <AnimalText>
        
        </AnimalText>
        <AnimalText>
          Koukejte na naše chlupáče!
        </AnimalText>
        <AnimalText>
          V&nbsp;zoo jich máme více.
        </AnimalText>
        <AnimalText>
          Na stromě připnuté kartáče
        </AnimalText>
        <AnimalText>
          přivítá každá kštice!
        </AnimalText>
        <AnimalText>
        
        </AnimalText>
        <AnimalText>
          …
        </AnimalText>
       <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jaci domácí jsou šikovní pomocníci a v&nbsp;práci zastoupí hned několik zvířat. Náklad tahají jako koně, nechají se podojit jako krávy, z&nbsp;vyčesané srsti se dá tkát jako z&nbsp;ovčí vlny a jačí trus se používá jako palivo.
        </AnimalText>
        <AnimalText>
          Mohlo by vás překvapit, že jaci se při té spoustě práce moc nezpotí. Mají k&nbsp;tomu však pádný důvod. Lidem pomáhají hlavně ve vysokých horách v&nbsp;Asii, kde je velká zima. Právě kvůli ní si musejí udržet teplotu svého těla. Kdyby se potili, zbytečně by jim teplo unikalo. Ale o&nbsp;moc víc se nezpotí ani naše domácí krávy.
        </AnimalText>
       <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jaci jsou úsporní i&nbsp;v&nbsp;jiných ohledech. Nejsou třeba moc rozmlsaní. Žerou rostliny, lišejníky, a když mají žízeň, schroupou třeba kousek sněhu nebo ledu.
        </AnimalText>
        <AnimalText>
          Jakům, kteří nejsou domestikovaní, se říká jaci divocí. Žijí taky v&nbsp;asijských horách, ale jsou větší a je jich o&nbsp;dost méně. Musíme je hodně chránit, aby nevyhynuli.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
