import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/pavKorunkaty/01.jpg'),
  require('../../images/animals/pavKorunkaty/02.jpg'),
  require('../../images/animals/pavKorunkaty/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/pavKorunkaty/01-thumb.jpg'),
  require('../../images/animals/pavKorunkaty/02-thumb.jpg'),
  require('../../images/animals/pavKorunkaty/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Kdo je ze všech nejjasnější, nejkrásnější, nejmoudřejší, nejbarevnější, nejurozenější a nejvznešenější? Přece já! Páv korunkatý, učenou mluvou starých Římanů <Text style={styles.italic}>Pavo cristatus</Text>. Má korunka na hlavě je důkazem toho, že právě já jsem skutečným králem celé zoo (lvovi to říkat nemusíme), a pokud se mnou chceš mluvit, oslovuj mne prosím pouze ve třetí osobě.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Když mi budeš dostatečně dlouho lichotit, možná se uvolím a ukážu ti svůj přenádherný vějíř svrchních ocasních krovek s&nbsp;barevnými oky! Zpravidla to však dělám pouze ve výjimečných případech, například když bráním své teritorium nebo když jde kolem nějaká paví lady. Honosím se před ní nejen tímto ocasním klenotem, nýbrž i&nbsp;královskou modří na krku. Ona totiž nic takového nemá, chodí zásadně v&nbsp;hnědém, nosí bílo-zelený límec kolem krku a o&nbsp;jejím královském původu svědčí jen drobná korunka na hlavě. Proto se jí moc líbí má barevná honosnost. Ale pozor! Pokud chceš zkusit štěstí a tento skvost spatřit, musíš přijít ve správnou dobu, jelikož pera v&nbsp;červenci vypadají a obnoví se až v&nbsp;zimě.
        </AnimalText>
        <AnimalText>
          Na délku měřím i&nbsp;s&nbsp;ocasem přibližně 180 až 230&nbsp;centimetrů – to je asi dvakrát tolik, co měříš ty. Samice bývají spíše poloviční. Co do váhy však nikdy nemám více než šest kilogramů, což představuje asi dvě a půl královské koruny Karla&nbsp;IV.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          My samci se neradi vážeme na jednu konkrétní samici, naopak se rádi družíme s&nbsp;každou, kterou potkáme.
        </AnimalText>
        <AnimalText>
          Živíme se semeny, travinami, hmyzem a různými obratlovci. Dožíváme se 15–20&nbsp;let. Ve volné přírodě se vyskytujeme především v&nbsp;Asii, v&nbsp;lesích Indie, Srí Lanky či Bangladéše. Jsme lidmi chováni již od dob antiky, to je více než dva tisíce let. Že jsme skutečně urozená zvířata, dokazuje také to, že páva nosil v erbu rod Petřvaldských z&nbsp;Petřvaldu, který vlastnil například zámek v&nbsp;Buchlovicích.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
