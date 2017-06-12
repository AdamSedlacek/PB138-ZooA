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
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          A hele, návštěva!
        </AnimalText>
        <AnimalText>
          Zdravíme, jsme jaci domácí (lat. <Text style={styles.italic}>Bos mutus</Text>) a jsme takoví, jací jsme. Pro vás himálajští příbuzní tura domácího. Chovají nás v&nbsp;horských oblastech střední Asie, kde jsme místním obyvatelům velmi užiteční, jelikož jsme skvělí parťáci na túry. Máme sice krátké nohy, ale hlubokým sněhem nám pomáhají procházet široká kopyta.
        </AnimalText>
       <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Primárně nás lidé využívají jako dopravní prostředek, protože uneseme až 150&nbsp;kg. Dále poskytujeme mléko, maso, kožešinu, kůži a naším sušeným trusem se výborně topí, protože hřeje a nepáchne. Lidé nejsou do extrémní vysokohorské zimy vybaveni tak dobře jako my. Dlouhá hnědá srst, kterou vidíte, je pouze jedna z&nbsp;vrstev, pod ní máme ještě hustou podsadu. To je, jako když si do pořádné kosy oblečete svůj nejhrubší svetr a hodíte na sebe ještě kabát. Navíc se skoro nepotíme, tak nám zbytečně neuniká teplo. Proto však špatně snášíme vyšší teploty, jelikož se naopak nemáme jak ochladit. Do života ve výškách jsme vybaveni i&nbsp;velkou kapacitou plic a větším množstvím červených krvinek, abychom vytřískali co nejvíce kyslíku z&nbsp;řídkého vysokohorského vzduchu. Živíme se listy, výhonky keřů, lišejníky či trávou, prostě býlím a taky sněhem, který nám slouží jako zdroj vody.
        </AnimalText>
        <AnimalText>
          Tibeťané si nás ochočili už před nějakou dobou a naši divocí příbuzní stále ještě ve stádech pobíhají po světě, ale jsou ohrožení. Je jich asi 15&nbsp;000&nbsp;kusů, nás domácích asi 13&nbsp;miliónů, což je znatelný rozdíl. Problémem bývá to, že od nás domestikovaných zvířat snadno naši divocí příbuzní chytnou nějakou nemoc, na kterou nejsou zvyklí. Hlavními nepřáteli divokých jaků jsou však pytláci, kterým se asi zamlouvá, že jsou větší a mají huňatější kožich než my, jaci domácí. 
        </AnimalText>
       <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Pokud chcete ve výběhu rozeznat samičku od samce, tak koukejte na celkovou velikost a délku rohů, rohy máme všichni, ale samci je mají delší. A jo, ty kartáče na stromech nám slouží na drbání v&nbsp;kožichu. Něco mě svědí za uchem, jen o&nbsp;tom mluvím!
        </AnimalText>
        <AnimalText>
          Na viděnou příště!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
