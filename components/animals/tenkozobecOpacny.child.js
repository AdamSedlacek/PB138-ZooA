import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/tenkozobecOpacny/01.jpg'),
  require('../../images/animals/tenkozobecOpacny/02.jpg'),
  require('../../images/animals/tenkozobecOpacny/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/tenkozobecOpacny/01-thumb.jpg'),
  require('../../images/animals/tenkozobecOpacny/02-thumb.jpg'),
  require('../../images/animals/tenkozobecOpacny/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Jmenuji se tenkozobec opačný. Poznáte mě, jak už z&nbsp;mého jména vyplývá, podle dlouhého tenkého černého zobáku, který je na konci zahnutý směrem vzhůru. Nosím bíločerné peří a pohybuji se na dlouhých nožkách, které jsou zakončené prsty s&nbsp;plovacími blanami, podobné můžete znát třeba u&nbsp;kačen.
        </AnimalText>
        <AnimalText>
        Nejčastěji mě můžete vidět, jak se brodím jezírkem, protože tam se cítím skoro jako ryba ve vodě. Patřím do skupiny bahňáků, to znamená, že s&nbsp;ostatními ptačími kamarády rádi trávíme čas v&nbsp;místech, kde je vlhké prostředí, zejména na pobřeží řek a moří, v&nbsp;mokřadech a bažinách, kde je stojatá voda a hlavně bahýnko, v&nbsp;němž lovíme potravu.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Mou nejoblíbenější pochoutkou je vodní hmyz, malé rybky, drobní korýši a měkkýši. V&nbsp;zoo dostávám také speciální granule pro bahňáky.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Vyskytuji se v&nbsp;Evropě i&nbsp;Asii a velmi vzácně mě můžete zahlédnout i&nbsp;v&nbsp;naší zemi. Svůj poklidný život tady vedu již od listopadu roku 2013, kdy jsem s&nbsp;několika svými druhovými kamarády přicestoval z&nbsp;vídeňské zoo.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
