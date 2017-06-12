import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/lemurKata/01.jpg'),
  require('../../images/animals/lemurKata/02.jpg'),
  require('../../images/animals/lemurKata/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/lemurKata/01-thumb.jpg'),
  require('../../images/animals/lemurKata/02-thumb.jpg'),
  require('../../images/animals/lemurKata/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Lemury kata (lat. <Text style={styles.italic}>Lemur catta</Text>) v&nbsp;poslední době asi nejvíce proslavil animovaný film Madagaskar. V&nbsp;naší zoo máme pět samců, přičemž čtyři z&nbsp;nich se jmenují právě podle zmíněného filmu – Morris (pravá ruka krále Jelimána), Alex (lev), Melman (žirafa), Marty (zebra). Měli jsme zde i&nbsp;Jelimána (lemuří král), ten však odcestoval vstříc novým dobrodružstvím. Pátým lemurem je Joffrey, který kvůli jizvě na tváři nese jméno po Joffreym de Peyracovi z&nbsp;filmu Angelika.
        </AnimalText>
        <AnimalText>
          V&nbsp;přírodě lemuři žijí na ostrově Madagaskar u&nbsp;Afriky a lemur kata je tam nejrozšířenější. Nežijí nikde jinde na Zemi, pouze na tomto ostrově, takové druhy označujme termínem endemit. Lemuři kata patří mezi ohrožené druhy.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Lemury kata poznáte velice jednoduše díky pruhovanému ocasu a bílé „masce“ na obličeji. Velikostně v&nbsp;dospělosti odpovídají zhruba kočce, ale jsou lehčí, váží asi 2,5&nbsp;kg. Ocas hraje v&nbsp;životě lemurů důležitou roli. Ve vysoké trávě slouží k&nbsp;dorozumívání. Občas si můžete všimnout, že lemuři protahují ocas mezi předními končetinami. Na zápěstí mají totiž umístěné pachové žlázy a ocas si tak „voní“. Pokud samci bojují o&nbsp;samici, švihají se navzájem ocasem po čumáku. Jejich srst je hebká a hustá, takže potřebuje často pročesávat. Mají k&nbsp;tomu uzpůsobené spodní řezáky a špičáky, které použijí jako hřebínek. Pro tento účel mají připravený i&nbsp;druhý prst na zadní noze, na němž je rozeklaný dráp, ostatní drápy jsou ploché jako nehty.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Může se vám stát, že lemura uvidíte v&nbsp;pozici meditujícího Buddhy – sedět čelem k&nbsp;rannímu slunci s&nbsp;rozpaženýma rukama. Lemuři totiž mívají problém s&nbsp;termoregulací, takže se snaží ohřát co největší plochu těla slunečními paprsky.
        </AnimalText>
        <AnimalText>
          Mezi nejoblíbenější potravu lemurů patří různé plody, semena a listy. Není ale výjimkou, že si pochutnají také na hmyzu či drobném obratlovci, například chameleonovi.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
