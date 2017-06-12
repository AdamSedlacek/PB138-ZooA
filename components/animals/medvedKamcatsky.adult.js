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
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
            Medvěd kamčatský (lat. <Text style={styles.ctextItalic}>Ursus arctos beringianus</Text>) je největší euroasijská suchozemská šelma, a jak už sám název napovídá, pochází z&nbsp;Kamčatky, poloostrova na Dálném východě v&nbsp;Rusku. Vyskytuje se také na přilehlých ostrovech a poloostrovech. V&nbsp;České republice ho můžeme najít jen v&nbsp;naší zoo. Příroda, ze které k&nbsp;nám přicestoval, je skutečně krásná – většinu jejího povrchu tvoří sopky, gejzíry a rozsáhlé lesy. 
          </AnimalText>
          <AnimalText>
            Medvěd kamčatský, extrémně silný a odolný poddruh medvěda hnědého, dorůstá výšky až 130&nbsp;cm v&nbsp;kohoutku a délky až 280&nbsp;cm. Vážit může až 750&nbsp;kg. Má rychlé reakce a je mrštný, jeho zuby dokážou překousnout jakoukoli kost, svými tlapami zvládá valit balvany, vyšplhá téměř na jakkoli kolmý svah i&nbsp;do koruny silného stromu a vydrží dlouhé hodiny sedět v&nbsp;ledové vodě. Je také vynikajícím plavcem a potápěčem. Na krátké vzdálenosti dosahuje v&nbsp;běhu rychlosti až 45–60&nbsp;km/h a za den dokáže ujít 100&nbsp;km. Fascinující je i&nbsp;jeho orientační smysl – za potravou putuje stovky kilometrů a pak se bez jediného zaváhání vrátí zpět do své domovské oblasti. Je tedy pochopitelné, že na souši nemá kromě člověka přirozeného nepřítele. Ve volné přírodě se medvěd kamčatský dožívá 20 až 30 let, v&nbsp;lidské péči až 50 let.
          </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Jelikož je medvěd kamčatský všežravec, jeho strava je pestrá – má rád borůvky, brusinky, semena jasanu a borovice a díky svým schopnostem uloví i&nbsp;velkou rybu. Právě lov migrujících lososů umožňuje medvědu kamčatskému utvořit si dostatečné zásoby na zimu. Nepohrdne však ani mršinami či trávou. Zjednodušeně řečeno sní, na co přijde.
          </AnimalText>
          <AnimalText>
            Co se týče povahy tohoto na první pohled nepřemožitelného zvířete, medvěd kamčatský je samotář. Společnost vyhledává pouze v&nbsp;období páření. Délka březosti samice medvěda kamčatského se pohybuje v&nbsp;rozmezí od 6 do 8 měsíců v&nbsp;závislosti na podmínkách pro přežití mláďat.
          </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Zoo Brno chová v&nbsp;současnosti samce Jelizara a samici Kamčatku, kteří spolu zplodili již tři mláďata. Samečci Kuba a Toby se narodili 30.&nbsp;ledna 2012 a v&nbsp;prosinci roku 2014 odcestovali do soukromé ukrajinské zoo. V&nbsp;současné době se svými rodiči sdílí výběh i&nbsp;sameček Bruno, který se narodil 29.&nbsp;ledna 2016.
          </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
