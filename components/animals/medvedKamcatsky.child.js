import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/medvedKamcatsky/01.jpg'),
  require('../../images/animals/medvedKamcatsky/02.jpg'),
  require('../../images/animals/medvedKamcatsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/medvedKamcatsky/01-thumb.jpg'),
  require('../../images/animals/medvedKamcatsky/02-thumb.jpg'),
  require('../../images/animals/medvedKamcatsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
            Ahoj! Jmenuji se Jelizar a jsem medvěd kamčatský. Jak už mé jméno napovídá, pocházím z&nbsp;poloostrova Kamčatka, který se nachází v&nbsp;Asii (přesněji v&nbsp;Rusku) a je veliký přibližně jako pětinásobek České republiky. Od nás je vzdálený skoro 8&nbsp;tisíc kilometrů.
          </AnimalText>
          <AnimalText>
            Svůj výběh sdílím s&nbsp;krásnou medvědicí Kamčatkou, se kterou máme už tři mláďata – dvojčata Tobyho a Kubu, kteří se nám narodili 30.&nbsp;ledna 2012 a o&nbsp;tři roky později odcestovali do soukromé zoo na Ukrajinu, a Bruna. Ten se narodil 29.&nbsp;ledna 2016.
          </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            My medvědi kamčatští jsme druhý největší poddruh medvěda hnědého. Jsme mnohem větší než lidé – když stojíme na všech čtyřech, měříme až tři metry na délku a metr a půl na výšku, vážit můžeme až 750 kilogramů. Máme mohutné tlapy a hustý hnědý kožich, který nás chrání před chladným počasím. Mimo to jsme i&nbsp;velmi rychlí, silní, pohybliví a umíme spoustu věcí, například skvěle šplhat do strmých kopců nebo do korun silných stromů. Jsme výborní plavci, a pokud si chceme ulovit nějakou tu rybu, vydržíme dlouho sedět ve studené vodě. Na souši umíme rychle běhat a za jediný den dokážeme ujít i&nbsp;velkou vzdálenost, třeba sto kilometrů. Tyto a další vlastnosti nám dávají velkou výhodu v&nbsp;tom, že kromě člověka nemáme na souši žádného přemožitele.
          </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Jsme všežravci, živíme se borůvkami, brusinkami, semeny stromů a rybami, ale pokud máme velký hlad, sníme i&nbsp;mršinu nějakého živočicha nebo obyčejnou trávu. Dožíváme se věku kolem dvaceti až třiceti let, ale v&nbsp;zoo můžeme díky péči lidí žít i&nbsp;50 let.
          </AnimalText>
          <AnimalText>
            Většinu svého života trávíme o&nbsp;samotě. V&nbsp;přírodě společnost vyhledáváme pouze v&nbsp;době, kdy hledáme partnera, se kterým můžeme na svět přivést mláďata. My dva v&nbsp;zoo jsme však spolu pořád a společnost někoho dalšího uvítáme hlavně tehdy, když se k&nbsp;nám blíží náš chovatel a nese něco dobrého na zub.
          </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
