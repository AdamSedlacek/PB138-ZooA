import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/simpanz/01.jpg'),
  require('../../images/animals/simpanz/02.jpg'),
  require('../../images/animals/simpanz/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/simpanz/01-thumb.jpg'),
  require('../../images/animals/simpanz/02-thumb.jpg'),
  require('../../images/animals/simpanz/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Chov šimpanzů má v&nbsp;Zoo Brno dlouholetou tradici. První pár těchto primátů k&nbsp;nám dorazil již v&nbsp;šedesátých letech. Šimpanzům se ve zdejším prostředí dařilo a v&nbsp;roce 1967 přivedli na svět mládě jménem Bipo. Tento sameček se stal vůbec prvním šimpanzem narozeným v&nbsp;českých a slovenských zoologických zahradách.
        </AnimalText>
        <AnimalText>
          Nejstarším obyvatelem současné expozice je samec Fáben. Narodil se v&nbsp;roce 1979 ve Švédsku a u&nbsp;nás žije už dvě desítky let (přijel k&nbsp;nám ze slovenské Zoo Bojnice). Společnost mu dělají dvě šimpanzí slečny, Gina (nar.&nbsp;1984) a Maryška (nar.&nbsp;1995), které za ovdovělým Fábenem přicestovaly v&nbsp;roce 2013 z&nbsp;Plzně.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Pojďme si společně tyto výjimečné tvory blíže představit. Šimpanzi, latinsky <Text style={styles.italic}>Pan troglodytes</Text>, jsou lidoopi, které považujeme za naše nejbližší zvířecí příbuzné. S&nbsp;lidmi sdílí 98,6&nbsp;% genetické informace, rozdíly mezi námi jsou tedy opravdu minimální. Šimpanzi mezi zvířecími druhy dominují svou vysokou inteligencí, jejíž mírou se řadí ihned za člověka. Bylo dokázáno, že mají velmi dobrou paměť a jsou schopni učit se novým dovednostem, nebo dokonce i&nbsp;plánovat. Podle odhadů z&nbsp;roku 2003 žilo na Zemi 172&nbsp;000–300&nbsp;000 jedinců. Jsou zařazeni mezi ohrožené druhy a jejich počty bohužel i&nbsp;nadále klesají.
        </AnimalText>
        <AnimalText>
          Domovinou šimpanzů je rovníková Afrika, kde obývají deštné pralesy a husté stromové savany. Žijí ve velkých tlupách o&nbsp;40&nbsp;až 60&nbsp;jedincích. V&nbsp;průběhu dne se rozdělují na menší skupinky, které si samostatně hledají potravu. Patří mezi všežravce. Živí se převážně rostlinnou potravou (ovoce, listy, semena, pupeny), ovšem nepohrdnou ani potravou živočišnou. Pojídají například hmyz nebo menší savce včetně opic. Tento druh potravy obstarávají převážně samci, kteří při lovu kořisti vzájemně spolupracují.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Šimpanzi nám svým chováním v&nbsp;přírodě napomáhají k&nbsp;vytváření obrazu o&nbsp;životě našich předků. Zajímavé jsou jejich vítací rituály, které se nápadně podobají těm lidským (polibek, poplácání po zádech, podání rukou). Nocují na stromech, kde si každý večer staví nové hnízdo z&nbsp;větví. Vědci předpokládají, že podobná lůžka si stavěli i&nbsp;naši předkové.
        </AnimalText>
        <AnimalText>
          Práci si šimpanzi zjednodušují vyráběním jednoduchých, ale důmyslných nástrojů. Kupříkladu používají proutky s&nbsp;oloupanou kůrou k&nbsp;lovení mravenců a termitů z&nbsp;jejich hnízd. Skořápky ořechů rozbíjejí pomocí kamenů, které využívají i&nbsp;jako zbraně. Nebo si rozžvýkáním listů vyrobí jakousi houbu, která nasává vodu, a mohou ji tak použít ke svému osvěžení.
        </AnimalText>
        <AnimalText>
          K&nbsp;páření šimpanzů dochází kdykoliv během roku. Samice mají obdobný menstruační cyklus jako lidé. Nastávající matky bývají březí osm měsíců. Po porodu se mládě své matky neustále drží a ta jej přenáší až do doby, než se naučí prvním krůčkům.
        </AnimalText>
        <AnimalText>
          Šimpanzi žijí průměrně 45&nbsp;let, v&nbsp;lidské péči se mohou ovšem dožít až 66&nbsp;let.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
