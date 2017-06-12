import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/pustikBradaty/01.jpg'),
  require('../../images/animals/pustikBradaty/02.jpg'),
  require('../../images/animals/pustikBradaty/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/pustikBradaty/01-thumb.jpg'),
  require('../../images/animals/pustikBradaty/02-thumb.jpg'),
  require('../../images/animals/pustikBradaty/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Ahoj děti!
        </AnimalText>
        
        <AnimalText>
        Já jsem puštík bradatý a patřím mezi sovy, moudré noční živočichy, jejichž řád čítá přes 200&nbsp;druhů. Vylíhl jsem se 13.&nbsp;května 2012 v&nbsp;zemi tulipánů – Nizozemsku. Moje kamarádka, se kterou bydlím ve stejné voliéře, se vylíhla v&nbsp;sousední Belgii přesně o&nbsp;jeden rok a jeden den dříve, tedy 12.&nbsp;května 2011. Na první pohled nás od sebe nerozeznáte, ale zkušené oko pozorovatele odhalí, že samička je o&nbsp;něco větší. Kromě nás existuje ve světě asi dvacet dalších druhů puštíků, ale my jsme ze všech největší. Když roztáhneme křídla, od jednoho konce k&nbsp;druhému měříme až 1,5&nbsp;metru, což je zhruba délka těla vlka obecného.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Své druhové jméno – bradatý (nebo také vousatý) – jsme si vysloužili díky tomu, že máme ve spodní části závoje naší kulaté hlavy bílá peříčka, která vypadají úplně jako knírek. Žijeme převážně v&nbsp;jehličnatých lesích severní Evropy, Severní Ameriky a Asie. K&nbsp;jídlu máme nejraději drobné hlodavce, třeba hraboše, veverky a norníky, občas i&nbsp;nějakého toho zajíce nebo kachnu. Umíme létat velice tiše a máme výborný sluch, díky kterému dokážeme vypátrat a zaměřit svoji kořist pod sněhem v&nbsp;hloubce až 60&nbsp;cm. Ulovíme ji tak, že se vrhneme celou svou vahou proti sněhové krustě, která by mohla unést i&nbsp;80kg člověka. Díky této schopnosti můžeme přežívat i&nbsp;ve velmi chladném prostředí, kde by si jiná zvířátka potravu obstarat nedokázala.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Se svými partnery tvoříme páry na celý život, který trvá až 20&nbsp;let. Samička snáší 3 až 4 vajíčka, která se líhnou asi po měsíci. Svá mláďátka krmíme a hlídáme ještě dlouho poté, co se vylíhnou. Jsme velmi obětaví rodiče, proto mláďata dokážeme uchránit i&nbsp;před těmi největšími vetřelci.
        </AnimalText>
        <AnimalText>
        V&nbsp;brněnské zoo jsme zatím malé puštíky neměli, ale kdo ví, co přinese budoucnost.
        </AnimalText>
        <AnimalText>
        Puštíka bradatého znáte určitě všichni díky filmům o&nbsp;Harry Potterovi, kde si zahrál sovu Errol.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
