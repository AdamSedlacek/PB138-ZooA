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
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Zdravím vás, přátelé!
        </AnimalText>
        <AnimalText>
          Jmenuji se páv korunkatý (<Text style={styles.italic}>Pavo cristatus</Text>). Co říkáte na můj nový účes? Slušivé, já vím. Nemyslete si však, že se takto naparujeme proto, že si o&nbsp;sobě moc myslíme. Máme vážné důvody. Však to znáte, lidské ženy se rády podívají na pekáče buchet a vymakané bicáky, ty naše zase přitahuje nejpůsobivější vějíř nadocasních per. Rozhoduje nejen výška vějíře, ale také počet ok, barevnost, vzor a jak to páv dokáže prodat. V&nbsp;období páření máme v&nbsp;podstatě soutěže krásy. Nejpůsobivější otcovský materiál pak má harém o&nbsp;čtyřech, pěti pávicích. Ty pak mezi sebou soupeří o&nbsp;naši pozornost, aby mohly snést více vajec, a tak zvýšily pravděpodobnost přežití svých potomků.
        </AnimalText>
        <AnimalText>
          Ani netušíte, kolik starostí taková péče o&nbsp;naši chloubu stojí. Ano, vy si nagelujete vlasy a pak brečíte, že venku fouká vítr a prší, že? To my musíme neustále dělat kompromisy mezi působivými nadocasními pery, vyhýbáním se predátorům a hledáním jídla. Ne, nerodíme se s&nbsp;nimi jen tak. Než nám narostou do plné výšky a šíře, trvá to nejméně 3&nbsp;roky a také je pravidelně měníme. Vypadávají nám nejvíce v&nbsp;červenci a v&nbsp;lednu už se honosíme novou parádou.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Náš život však není jen o&nbsp;peří. Pokud vás zajímá, jak žijeme, čtěte dál. Jsme národní ptáci Indie, žijeme však i&nbsp;na území Srí Lanky, Bangladéše, Bhútánu, Nepálu, Pákistánu a v&nbsp;zoologických zahradách celého světa. Zmínky o&nbsp;našem chovu pochází již z&nbsp;doby starých Řeků a Římanů. Znáte Arguse z&nbsp;řeckých bájí a pověstí? Týpek s&nbsp;očima po celém těle. Když ho Hermés zabil, Héra vzala jeho oči a dala je na náš ocas, aby uctila jeho památku. V&nbsp;mytologii a legendách se objevujeme hojně, hlavně v&nbsp;těch hinduistických.
        </AnimalText>
        <AnimalText>
          Neobejdeme se bez blízkosti vodního toku. To proto, že hodně pijeme, ne že bychom se ve vodě koupali! Fuj, vodní koupel fakt ne, dáváme přednost koupeli písečné.
        </AnimalText>
        <AnimalText>
          Ještě by vás mohlo zajímat, že máme rádi stereotypní styl života. Před všemi překvápky se máme pěkně na pozoru – to, co děláme s&nbsp;hlavou, není tik. Kdybychom zahlédli nějakého predátora, hned dáme vědět ostatním a zdrháme někam do křoví. Hezky po svých. Létat sice umíme, ale s&nbsp;tím ocasem je létání mrzuté. Když už nás k&nbsp;tomu někdo donutí, moc rychle nebo daleko nedoletíme.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Co se týče našeho jídelníčku, pochutnáme si na hmyzu, ještěrech, žábách, hadech i&nbsp;na trávě či různých semínkách. V&nbsp;sanskrtu naše jméno znamená „zabiják hadů“, to proto, že pojídáme mladé kobry, čímž lidem děláme dobrou službu. Když však sežerem nějakého vzácného ještěra, už to prý tak super není. No co, nemají nám chodit do cesty, že?
        </AnimalText>
        <AnimalText>
          Mluvě o&nbsp;jídle, jdu si něco vyhrabat. Mějte se krásně jako já.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
