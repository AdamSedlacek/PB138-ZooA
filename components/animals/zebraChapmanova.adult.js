import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/zebraChapmanova/01.jpg'),
  require('../../images/animals/zebraChapmanova/02.jpg'),
  require('../../images/animals/zebraChapmanova/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/zebraChapmanova/01-thumb.jpg'),
  require('../../images/animals/zebraChapmanova/02-thumb.jpg'),
  require('../../images/animals/zebraChapmanova/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          „Zdravíme vás, lidé. Já se jmenuji Ajka a být člověkem, už bych nějaký pátek vlastnila občanský průkaz. Určitě jste už viděli naše kamarádky – zebry Grévyho. My jsme jim podobné, ale nejsme stejné.“
        </AnimalText>
        <AnimalText>
          „Mamí, ale vždyť vypadáme stejně jako zebry Grévyho. Máme černobílé pruhy a naše těla vypadají podobně.“
        </AnimalText>
        <AnimalText>
          „To ano, zlatíčko. Ale přesto se lišíme. Přece jsem ti to vysvětlovala. Už si to nepamatuješ?“
        </AnimalText>
        <AnimalText>
          „No joo, pamatuju. První rozdíl: zebra Chapmanova má široké pruhy po celém těle a na bílých pruzích jsou ještě tenké hnědé pruhy. Naproti tomu zebra Grévyho má pruhování hustší a na břichu žádné pruhy nemá. Haha, vypadá, jako by si omylem lehla do sádry.“
        </AnimalText>
        <AnimalText>
          „No tak, Arwen. Nebuď taková. Není správné si z&nbsp;ostatních utahovat. Soustřeď se a zkus pokračovat.“
        </AnimalText>
        <AnimalText>
          „Ano, ano, druhý rozdíl: zebra Chapmanova je rozměrově menší než zebra Grévyho. Holt jsme prťavé. Ale já určitě vyrostu a budu největší ze všech zeber. Jo a poslední: náš nos je černý, kdežto zebry Grévyho ho mají hnědý s&nbsp;fousky.“
        </AnimalText>
        <AnimalText>
          „Správně. Sice to nejsou všechny rozdíly, ale to není tak důležité. Víš něco o&nbsp;zemi, ze které pocházíme?“
        </AnimalText>
        <AnimalText>
          „Proč bych o&nbsp;ní měla něco vědět? Vždyť tam nebydlíme. Teď je naší zemí Česko. Já jsem se tady narodila, takže jsem česká zebra.“
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          „Arwen, je pravda, že ses tu narodila, ale měla bys vědět taky něco o&nbsp;našem původu a zvycích. Takže teď mi tu neběhej a v klidu lež. Já ti o&nbsp;tom povykládám. My zebry Chapmanovy jsme poddruhem zebry stepní a pocházíme z&nbsp;Afriky. V&nbsp;Africe bys nás našla na rozsáhlých savanách, na kterých se rády paseme. Jíme většinou tvrdé stepní traviny, listy a výhonky keřů. Ve volné přírodě žijeme ve stádech, která mají 10&nbsp;až 30&nbsp;jedinců, přičemž ve stádě bývá jen jeden dospělý samec. Říká se tomu harémová struktura. Mláďata se rodí po 350&nbsp;dnech a jedna samice rodí jen jedno mládě. Toto mládě je už pár hodin po narození schopné chodit a přidává se ke stádu. Arwen! Vždyť ty mě vůbec neposloucháš! Já se snažím, abys byla vzdělaná zebra, a ty přitom...“
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          „Ach jo, však poslouchám. Jenže to nejsou ty správné špeky. Pověz mi třeba něco o&nbsp;tom, jak prcháme před lvy, kteří nás chtějí rafnout a roztrhat na malé kousíčky a celé nás sežrat, takže z&nbsp;nás zbudou jen kosti. Nebo jak se za námi honí lidé, kterým se líbí naše kůže. Kamarád mi říkal, že by radši visel na zdi, než aby ležel na zemi a dupali by po něm lidé. Teda, po jeho kůži. Z&nbsp;něj už by asi nic...“
        </AnimalText>
        <AnimalText>
          „Už mlč! Jak takto můžeš mluvit, Arwen?! Vždyť to je příšerné. Ano, je to bohužel pravda, ale nerozebírej to tak podrobně. Ach, co z&nbsp;tebe, holka, jednou bude? Už abys dospěla!“
        </AnimalText>
        <AnimalText>
          „Tak se nezlob, mami. Já to tak nemyslela. Už můžu jít za ostatními? Oni hrají na honěnou.“
        </AnimalText>
        <AnimalText>
          „Jen si jdi. Ale ne, že se budete zase vsázet, kdo sní víc trávy. Pamatuješ, jak tě z&nbsp;toho včera bolelo břicho? Tak žádné hlouposti. A už běž, zlatíčko.“
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
