import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/ustricnikVelky/01.jpg'),
  require('../../images/animals/ustricnikVelky/02.jpg'),
  require('../../images/animals/ustricnikVelky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/ustricnikVelky/01-thumb.jpg'),
  require('../../images/animals/ustricnikVelky/02-thumb.jpg'),
  require('../../images/animals/ustricnikVelky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Zdravím tě, človíčku!
        </AnimalText>
        <AnimalText>
          Já jsem ústřičník velký a přišel jsem sem z&nbsp;pražské zoo. Žiju si tu s&nbsp;ostatními kamarády bahňáky už asi šest let. Moc se mi tu s&nbsp;nimi líbí. Dělíme se o&nbsp;potravu a společně prozkoumáváme náš malý rybníček.
        </AnimalText>
        <AnimalText>
          Říká se mi bahňák, protože mám rád prostředí bahna. V&nbsp;bahně si vždy najdu spoustu vhodné potravy a užiju si v&nbsp;něm s&nbsp;ostatními mnoho legrace.
        </AnimalText>
        <AnimalText>
          Jsem velký asi jako dospělá vrána. Jsem stejně tak černý jako ona, až na to, že mám bílé bříško. Vážně, vypadám, jako bych si lehl na bříško do bílé barvy. Když roztáhnu křídla, zabírám celou šíři tvé postele. Mám svítivě oranžový dlouhý a silný zobák. Dokážu s&nbsp;ním rozevřít ústřice a jiné mořské měkkýše a korýše. Zobákem lovím také v&nbsp;zemi červíky a žížalky, které jsou pro mě velikou delikatesou! Říkám si, že se trochu podobám čápovi. Mám stejný zobák, podobné zabarvení těla a stejně jako čáp velmi rád odpočívám na jedné noze. Čáp je oproti mně však o&nbsp;dost větší.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Zajímá tě, jak jsem přišel na svět? Vylíhl jsem se z&nbsp;vejce, které bylo pěkně kropenaté a velké asi jako vajíčko od slepičky. Do druhého dne jsem dokázal čile běhat a po dvou měsících jsem si již sám obstarával jídlo.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Víš, co všechno takový ústřičník jako já dokáže? Umím nejen létat, chodit a běhat, ale také plavat, a dokonce se i&nbsp;potápět! To koukáš, co? Jsem prostě všestranně nadaný ústřičník.
        </AnimalText>
        <AnimalText>
          Když se cítím unavený a chce se mi spát, zalezu si do svého hnízda, nebo spíš mělkého důlku v&nbsp;zemi, který mám vystlaný různými kamínky a listy. Tam je moje království.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
