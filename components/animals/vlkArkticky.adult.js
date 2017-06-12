import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/vlkArkticky/01.jpg'),
  require('../../images/animals/vlkArkticky/02.jpg'),
  require('../../images/animals/vlkArkticky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/vlkArkticky/01-thumb.jpg'),
  require('../../images/animals/vlkArkticky/02-thumb.jpg'),
  require('../../images/animals/vlkArkticky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          <Text style={styles.italic}>Canis lupus arctos</Text>. Zvíře vznešené stejně jako jeho latinské pojmenování. Vlk arktický pochází ze severu Kanady, Grónska a přilehlých ostrovů. S&nbsp;ohledem na zimu, která v&nbsp;oněch krajích panuje, tvoří jeho srst dvě vrstvy. Spodní slouží jako tepelná izolace, vrchní vrstva hustých chlupů má pak za úkol odpuzovat vlhkost. Dohromady tvoří dokonalý kožich, na němž netaje sníh. Taktéž huňatý ocas nemá vlk arktický jen tak pro nic za nic. Používá ho jako přikrývku – když se stočí do klubíčka, přikrývá si jím svůj čumák.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Vlci jsou převážně monogamní, jednotlivé páry spolu zůstávají až do smrti jednoho z&nbsp;partnerů. Žijí v&nbsp;přísně organizovaných skupinách. Takzvaná smečka je tvořena „alfa“ až „omega“ páry. Vedoucí pozici má „alfa“ pár, který se rozmnožuje a rozděluje úkoly zbylým členům smečky. Toto přísně hierarchizované členění smečky nelze narušit. Jedinou výjimkou je hra, která je pro vlky velmi důležitá. Slouží k&nbsp;uvolnění napětí, ale také k&nbsp;trénování různých strategií, které mohou být v&nbsp;jejich životě důležité. Během hry jdou stranou všechny hierarchické vztahy, i&nbsp;nejsubmisivnější „omega“ samec či samice si může dovolit na dominantního „alfa“ jedince.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Expozici pro vlky arktické otevřela Zoo Brno v&nbsp;roce 2004. Výběh o&nbsp;velikosti 3&nbsp;500&nbsp;m<Text style={styles.superscript}>2</Text> byl označen za nejkrásnější nejen u&nbsp;nás, ale i&nbsp;v&nbsp;celé Evropě. Svědčí o&nbsp;tom například prestižní ocenění „Bílý slon“ za nejlepší expozici roku 2006. Její součástí je jezírko s&nbsp;vodopádem a prostor plný pahorků, dolin a klidných míst, kde mohou zvířata odpočívat. Rostou tady různé stromy a křoviny. Návštěvníkům je umožněno pozorovat vlky z&nbsp;více míst – pokud je nevidíte ze srubu s&nbsp;totemem, mohou se vyhřívat na takzvaném Vrcholku, což je nejvýše položený pahorek na druhé straně výběhu.
        </AnimalText>
        <AnimalText>
          V&nbsp;současné době tvoří zdejší smečku „alfa“ samec Luděk, který k&nbsp;nám dorazil v&nbsp;lednu 2015 z&nbsp;Ebeltoftu v&nbsp;Dánsku, a dvě u&nbsp;nás narozené samice, Malá a Velká. V&nbsp;roce 2016 se oběma samicím narodilo celkem devět mláďat.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
