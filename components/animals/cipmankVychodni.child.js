import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/cipmankVychodni/01.jpg'),
  require('../../images/animals/cipmankVychodni/02.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/cipmankVychodni/01-thumb.jpg'),
  require('../../images/animals/cipmankVychodni/02-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Zdravíme vás, kamarádi a milovníci zvířátek! Jmenujeme se čipmankové východní a do Brna jsme přicestovali v&nbsp;roce&nbsp;2014. Milí chovatelé ze zdejší zoo nás s&nbsp;nadšením přivítali a darovali nám tento útulný domov u&nbsp;voliéry orlů. Ve volné přírodě na nás sice v&nbsp;České republice nenarazíte, ale pokud rádi sledujete pohádky, tak jste o&nbsp;čipmancích jistě už slyšeli. Děti z&nbsp;celého světa nás znají jako Chipa a Dalea z&nbsp;Rychlé roty a proslavili jsme se i&nbsp;jako nadané zpívající veverky z&nbsp;filmu Alvin a chipmunkové. Náš skutečný život je ale ještě zajímavější, a pokud chcete zjistit víc, pozorně čtěte dál.
        </AnimalText>
        <AnimalText>
        Naši čipernou partu tvoří celkem dva samečci a dvě samičky. Měli byste o&nbsp;nás ale vědět, že jsme samotáři a moc času ve společnosti kamarádů netrávíme. V&nbsp;naší expozici tak většinou zahlédnete pouze jeden čipmančí pár. Tušíte, proč nám říkají čipmankové východní? Pocházíme totiž ze světlých lesů na východě Spojených států amerických a Kanady. Jsme zemní veverky, což znamená, že nebydlíme na stromech, ale hloubíme si podzemní nory plné spletitých chodbiček. Dorůstáme o&nbsp;něco menší délky než běžná veverka obecná, kterou určitě znáte. Rádi šplháme i&nbsp;po větvích, ale rozhodně od nás nečekejte žádné akrobatické skoky mezi stromy, jak to rády předvádějí stromové veverky. My spíš jen hbitě pobíháme, zejména když zrají oříšky, žaludy, semínka nebo ovoce, to je potom dobrota! Potravu sbíráme i&nbsp;na zemi a plníme nejen svá bříška, ale i&nbsp;lícní vaky (říká se jim také torby). V&nbsp;nich si jídlo přenášíme do nory, abychom měli zásoby na zimu, kterou většinou celou prospíme. (Páni zoologové tomu říkají hibernace.) Na jaro pak přivádíme na svět potomky.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Nezapomeňte si také všimnout našeho půvabného sametového kožíšku a huňatého ocásku. Srst míváme šedou nebo rezavě hnědou a naším hlavním znakem jsou světlé a tmavé pruhy, které se nám střídají po obou stranách těla a v&nbsp;obličeji. Vyfotit nás není vůbec jednoduché, však si to zkuste, nejspíš vám na fotce zůstane jen rozmazaná šmouha. Rychlá rota nám v&nbsp;televizi neříkali náhodou, jsme opravdoví neposedové. Jestliže nás nevidíte, nejspíš se schováváme v&nbsp;norách nebo mezi větvemi. V&nbsp;tom případě pozorně sledujte naši expozici, a pokud nejsme zrovna uložení k&nbsp;zimnímu spánku, určitě se vám ukážeme.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
