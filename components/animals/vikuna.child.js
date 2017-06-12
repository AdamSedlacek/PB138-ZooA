import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/vikuna/01.jpg'),
  require('../../images/animals/vikuna/02.jpg'),
  require('../../images/animals/vikuna/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/vikuna/01-thumb.jpg'),
  require('../../images/animals/vikuna/02-thumb.jpg'),
  require('../../images/animals/vikuna/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Zdravím vás, milí malí přátelé,
        </AnimalText>
        <AnimalText>
          jmenuji se Björn. Že jste takové jméno ještě neslyšeli? Není divu, však jsem taky přicestoval z&nbsp;Německa. A moje kamarádka, která se narodila v&nbsp;Rusku, mi své jméno ještě ani neprozradila. Říkají, že jsem lama. Ale já nejsem jen tak obyčejná lama, jsem vikuňa. Pravda, nejsem tak velký jako jiné druhy lam nebo naši příbuzní velbloudi, ale přesto jsem velký pán. Jak jinak bych mohl nosit tak drahé šaty? Moje vlna je totiž opravdu cenná. V&nbsp;dávných dobách se do ní směli oblékat jen ti nejurozenější z&nbsp;urozených. Je jemná, ale vlákna, která se z&nbsp;ní utkají, jsou velmi pevná. Může mít až třicet centimetrů a v&nbsp;zimě úžasně zahřeje.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          V&nbsp;jihoamerických horách, odkud pocházíme, taková srst přijde vhod. V&nbsp;noci tam totiž bývá dost chladno. Zato přes den se občas docela zapotíme. To když sestupujeme ze svahů, kde přespáváme, dolů na pastviny a k&nbsp;močálům. Tam plynule přecházíme od snídaně k&nbsp;obědu a od oběda k&nbsp;večeři. Leckdo by řekl, že náš jídelníček není moc pestrý, samé byliny a sukulenty (to jsou rostliny, které umějí shromažďovat hodně vody, jako třeba kaktusy), ale nám to tak nepřipadá.
        </AnimalText>
        <AnimalText>
          Někteří z&nbsp;nás jsou samotáři, jiní žijí v&nbsp;rodinných skupinách a mladí samci si někdy vytvářejí vlastní skupiny. V&nbsp;rodinných skupinách je vždy nějaký vůdčí samec, taková hlava rodiny. Má všechno pod dohledem a brání své stádo proti nepřátelům.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          V&nbsp;drsných podmínkách, ve kterých žijeme, se ale musíme starat hlavně sami o&nbsp;sebe. Proto se mláďata velmi rychle postaví na vlastní nohy. Brzy se naučí běhat a po několika měsících se vydají vlastní cestou. Kluci většinou o&nbsp;něco dřív, často jim ještě není ani půl roku, holky zůstávají po matčině boku trochu déle.
        </AnimalText>
        <AnimalText>
          Ale dost už o&nbsp;nás, běžte se podívat také na naše známé z&nbsp;vedlejších výběhů, jistě se vás už nemůžou dočkat.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
