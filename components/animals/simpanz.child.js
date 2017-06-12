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
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Vítáme tě, človíčku, mezi námi lidoopy! Návštěvy příbuzných nás vždy nesmírně potěší. Koho tím máme na mysli? No přece tebe a všechny ostatní lidské tvory. Abychom to vysvětlili, my šimpanzi jsme nejbližší zvířecí příbuzní člověka. Ale to už možná dávno víš. Co ovšem nejspíš netušíš, je to, že úplně první šimpanz narozený v&nbsp;Česku pochází právě z&nbsp;naší zoo. Narodil se tu roku 1967 a byl to sameček jménem Bipo.
        </AnimalText>
        <AnimalText>
          Momentálně tu žiju já, Fáben, a moje dvě mladší kamarádky Gina a Maryška. Ty sem přicestovaly teprve nedávno z&nbsp;Plzně, zatímco já si tu spokojeně hovím už nějaký ten pátek. Narodil jsem se ve Švédsku a do Brna jsem dorazil ze slovenské Zoo Bojnice.
        </AnimalText>
        <AnimalText>
          Nechceme se nijak chlubit, ale patříme mezi nejchytřejší zvířecí druhy. Máme velmi dobrou paměť a dokážeme si i&nbsp;vyrábět nástroje nebo se naučit znakovou řeč. Takže když ti někdo řekne, že jsi „chytrý jako opice“, rozhodně to není urážka.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Pocházíme z&nbsp;deštných pralesů a savan v&nbsp;rovníkové Africe. Často šplháme po stromech, na kterých sbíráme ovoce. Rádi si také pochutnáváme na rostlinkách, semínkách, listech a někdy jíme i&nbsp;hmyz a maso. Jsme zkrátka všežravci. O&nbsp;mně v&nbsp;zoo říkají, že jsem obzvlášť vděčný strávník. Aby taky ne, když nám naši hodní chovatelé připravují takové dobroty. Ze všeho nejraději mám banány. A také miluju drbání na zádech od Giny a Maryšky… ale to už trochu odbočuju. V&nbsp;korunách stromů kromě sběru ovoce také spíme. Ale místo postele, do které bychom každý večer uléhali, si stavíme hnízdo, které nám většinou slouží jen na jednu noc.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Nastávající šimpanzí maminky očekávají svého potomka 8&nbsp;měsíců. Narozené mládě se ze začátku drží své mámy za srst jako klíště a nechává se všude nosit. Po půl roce života se začíná osamostatňovat a učit se prvním krůčkům.
        </AnimalText>
        <AnimalText>
          Jsme velmi společenští, a v&nbsp;přírodě proto žijeme ve velkých tlupách, kde nás může být i&nbsp;sto&nbsp;padesát. Do Zoo Brno by se nás tolik nevešlo. Ale nám to nevadí, i&nbsp;ve třech si tu užijeme spoustu zábavy. Tak se na nás zase někdy přijď podívat a klidně si s&nbsp;sebou přiveď i&nbsp;celou svou tlupu kamarádů! Rádi vás tu všechny uvidíme.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
