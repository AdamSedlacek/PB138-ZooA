import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/jerabMandzusky/01.jpg'),
  require('../../images/animals/jerabMandzusky/02.jpg'),
  require('../../images/animals/jerabMandzusky/03.jpg'),
  require('../../images/animals/jerabMandzusky/04.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/jerabMandzusky/01-thumb.jpg'),
  require('../../images/animals/jerabMandzusky/02-thumb.jpg'),
  require('../../images/animals/jerabMandzusky/03-thumb.jpg'),
  require('../../images/animals/jerabMandzusky/04-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Teď vám, milí návštěvníci, položím záludnou otázku. Víte, co nebo kdo je to <Text style={styles.strong}>jeřáb</Text>?
        </AnimalText>
        <AnimalText>
          Jako první vás asi napadne takový ten vysokánský stroj, který se používá při stavbě domů. Někdo si vzpomene i&nbsp;na strom, jehož plodem jsou jeřabiny.
        </AnimalText>
        <AnimalText>
          V&nbsp;obou případech sice máte pravdu, ale na takové věci se přece lidé do zoo dívat nechodí.
        </AnimalText>
        <AnimalText>
          Proto dovolte, abych se vám představil. I&nbsp;já se jmenuji jeřáb. Jeřáb mandžuský.
        </AnimalText>
        <InPageImage indexes={[3]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Když jsem se vyklubal z&nbsp;vajíčka, byl jsem jen taková opeřená hnědá kulička. Zem byla mokrá a blátivá. Sotva jsem si stihl křídly protřít oči, už mi maminka podávala do zobáku kousek vodní rostliny. Vsadil bych se, že ten lístek byl kouzelný. To byste koukali, jak rychle jsem začal růst! Cítil jsem se jako Alenka v&nbsp;říši divů.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Každým dnem jsem byl větší a větší. Peří začalo bělet, některé naopak zčernalo. Nohy mi vyrostly, dokonce i&nbsp;krk se protáhl tak, že se mi konečně podařilo ulovit prvního brouka z&nbsp;jezírka.
        </AnimalText>
        <AnimalText>
          A pak se to stalo. Potkal jsem krásnou jeřábici. Hotovou modelku! Když natáhla svůj krk, měřila skoro 150&nbsp;centimetrů! Povězte mi, kdo z&nbsp;vás je vyšší?
        </AnimalText>
        <AnimalText>
          Prvně se na mě jen tak letmo podívala, ale pak začala tančit. Jaký přenádherný tanec to byl! Vyskakovala vysoko do vzduchu, roztahovala křídla a zvala mě, abych si zatančil s&nbsp;ní. Radostně jsem se jí klaněl a troubil zobákem písničku. Stali jsme se nejlepšími kamarády a slíbili si, že už se nikdy neopustíme.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Teď tu tedy děláme ťápoty do bláta spolu. Jak čas plyne, na hlavě se nám oběma dělá čím dál větší červená pleš, ale to vůbec nevadí. Na Dálném východě, odkud pocházíme, jsou totiž jeřábi symbolem dlouhověkosti a ta pleš k&nbsp;stáří prostě patří.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
