import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/paovceHrivnata/01.jpg'),
  require('../../images/animals/paovceHrivnata/02.jpg'),
  require('../../images/animals/paovceHrivnata/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/paovceHrivnata/01-thumb.jpg'),
  require('../../images/animals/paovceHrivnata/02-thumb.jpg'),
  require('../../images/animals/paovceHrivnata/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Paovce hřivnatá se latinsky nazývá <Text style={styles.italic}>Ammotragus lervia</Text> a anglicky <Text style={styles.italic}>barbary sheep</Text>. Paovce se vyskytují v&nbsp;pouštích i&nbsp;horských oblastech severní Afriky, především pak v&nbsp;nedostupných pohořích Sahary, tedy ve výškách kolem 200–4000&nbsp;metrů nad mořem. Potřebují se pohybovat v&nbsp;oblastech, kde jim skály, stromy nebo keře poskytnou dostatek stínu.
        </AnimalText>
        <AnimalText>
          Svým vzhledem připomínají jak ovci, tak kozu. Jejich srst je lehce narezlá až písčitě hnědá. Ačkoliv samcům i&nbsp;samicím rostou zahnuté rohy, je možné je od sebe docela dobře rozeznat. Samci mají rohy delší a tlustší, s&nbsp;výraznějším rýhováním a dorůstají jim až do délky 85&nbsp;centimetrů, kdežto samicím pouze do délky 50&nbsp;centimetrů. Samci jsou také značně větší a těžší – jejich hmotnost může být až dvakrát větší, než je zvykem u&nbsp;jejich protějšků. Též se mohou pyšnit delší hřívou na spodní straně hrudi, krku a předních nohou. Ta se téměř dotýká země. Obě pohlaví mají krátký ocas, který je zespodu holý a obsahuje pachové žlázy.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Paovce jsou býložravci, a tudíž spásají zejména trávu a listy stromů či keřů. Krmí se zrána a za soumraku, kdy rostliny akumulují vlhkost a jsou pokryté rosou. Tak získají potřebnou vodu z&nbsp;potravy a bez jakýchkoli dalších zdrojů dokáží přežít extrémně suchá období.
        </AnimalText>
        <AnimalText>
          Žijí v&nbsp;osamělých menších skupinách, skládajících se ze 3–6&nbsp;členů, v&nbsp;nichž je pouze jediný dospělý samec a zbytek jsou samice a jejich mláďata. Příležitostně se za suchých období stahují do početnějších stád, obsahujících až 20&nbsp;členů. Dospělí samci si tak musí vydobýt svoji vůdčí pozici vůči ostatním. Mezi sebou si pak předvádějí hřívu a konají se nelítostné boje, v&nbsp;nichž se dva samci postaví asi 15&nbsp;metrů od sebe a následně se rozběhnou proti sobě se skloněnými hlavami, kterými do sebe narazí. Pozoruhodné je, že samci proti sobě nikdy takto nezaútočí, pokud jeden z&nbsp;nich není připravený.
        </AnimalText>
        <AnimalText>
          Páření probíhá v&nbsp;podzimních měsících a na jaře se samicím rodí 1–2&nbsp;mláďata. S&nbsp;nimi pak prvních pár dnů leží v&nbsp;odloučení od zbytku stáda a následně se k&nbsp;nim zase připojí. Dospělosti paovce dosahují v&nbsp;18&nbsp;měsících.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Paovce bývají nejvíce aktivní v&nbsp;době pasení, což je za úsvitu a soumraku. Zbytek dne odpočívají ve stínu skal, stromů či keřů. Pokud se cítí v&nbsp;ohrožení, zůstávají bez hnutí stát a díky své písčitě hnědé barvě srsti splývají s&nbsp;nehostinným suchým terénem.
        </AnimalText>
        <AnimalText>
          Přibližný počet paovcí se pohybuje v&nbsp;řádu 5&nbsp;000–10&nbsp;000&nbsp;jedinců. V&nbsp;brněnské zoo se chová stádo skládající se z&nbsp;5&nbsp;samců a ze 7&nbsp;samic, občas (zpravidla na jaře) však tyto počty naruší nově narozená mláďata. Nejdéle se tu vyskytují tři samice, které se jmenují Stará, Maďarka a Rohatá.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
