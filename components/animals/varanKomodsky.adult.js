import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/varanKomodsky/01.jpg'),
  require('../../images/animals/varanKomodsky/02.jpg'),
  require('../../images/animals/varanKomodsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/varanKomodsky/01-thumb.jpg'),
  require('../../images/animals/varanKomodsky/02-thumb.jpg'),
  require('../../images/animals/varanKomodsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Varan komodský, latinsky <Text style={styles.italic}>Varanus komodoensis</Text>, je nejmohutnější ještěr na světě, dožívající se 30&nbsp;let a opředený mnoha legendami. Tyto legendy vychází především z&nbsp;jeho jedovatosti a tělesných rozměrů. Dospělý samec totiž může přesahovat 3&nbsp;m a vážit i&nbsp;přes 100&nbsp;kg. Nejvíce však strašlivé příběhy o&nbsp;komodském drakovi podpořil fakt, že až donedávna se o&nbsp;něm téměř nic nevědělo.
        </AnimalText>
        <AnimalText>
          Teprve ve 20.&nbsp;století se pomalu začaly rozplétat dohady o&nbsp;tomto predátorovi ze skupiny ještěrů. Do té doby nebyl varan komodský chován v&nbsp;zajetí. I&nbsp;dnes patří k&nbsp;nejvzácnějším zvířatům chovaným v&nbsp;zoologických zahradách – smyslem péče o&nbsp;něj je především zachování ohroženého druhu, který v&nbsp;současné době ve volné přírodě čítá kolem 3&nbsp;500&nbsp;jedinců.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Vedle pohlavního rozmnožování je u&nbsp;varanů komodských možné i&nbsp;rozmnožování partenogenezí, na což se přišlo až v&nbsp;roce&nbsp;2006. Partenogeneze je vývin jedince z&nbsp;vajíčka neoplozeného samčí pohlavní buňkou. Tímto způsobem se vždy vyvine samec, který má velmi podobnou genetickou výbavu jako jeho matka. Stejným způsobem se v&nbsp;roce&nbsp;2011 narodil i&nbsp;náš samec Rototom. Jeho matka, legendární Aranka z&nbsp;pražské zoo, je světovou rekordmankou mezi samicemi tohoto druhu chovanými v&nbsp;zajetí: na svém kontě má již 47&nbsp;mláďat! A to je přitom rozmnožení tohoto druhu v&nbsp;zajetí považováno za výjimečnou událost, odhadem je toho schopných pouze pět samic.
        </AnimalText>
        <AnimalText>
          Varan komodský obývá lesy i&nbsp;travnaté oblasti indonéského ostrova Komodo, po kterém je nazván, vyskytuje se ale i&nbsp;na okolních ostrovech, např.&nbsp;na Floresu. Aktivní je nejvíce ve dne. Občas se živí mršinami vyvrženými z&nbsp;moře, je však i&nbsp;zdatný lovec. Loví ptáky, plazy i&nbsp;savce – ani buvol pro něj není nezdolatelnou překážkou. Na svou kořist číhá, ve vhodném okamžiku se do ní zakousne ostrými pilovitými zuby a z&nbsp;jedových žláz v dolní čelisti vypustí do těla oběti jed. Ten snižuje srážlivost krve a vyvolává pokles krevního tlaku, obsahuje též neurotoxin působící jako sedativum. Takto napadená oběť těžce krvácí a brzy upadá do šoku. Velké zvíře, jako je např.&nbsp;buvol, může však také dlouho umírat následkem otravy bakteriemi. Takto velká zvířata jsou pak konzumována hromadně varany z&nbsp;širého okolí. Po jednorázovém nasycení asi měsíc nepřijímají žádnou další potravu.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          U&nbsp;varanů je též silně rozvinutý kanibalismus. Z&nbsp;tohoto důvodu žijí mláďata až do dvou let věku v&nbsp;korunách stromů, kde unikají loveckým choutkám dospělých jedinců, kteří na strom vylézt neumí.
        </AnimalText>
        <AnimalText>
          Indonésie považuje varany za národní poklad, podobně jako Čína pandy velké. Vývoz ze země je umožněn jen výjimečně, a to formou státního daru. První varani komodští se do Česka dostali v&nbsp;roce&nbsp;1997 jako dar prezidentu Václavu Havlovi. Tento pár byl umístěn v&nbsp;Zoo Plzeň. Brněnská zoo se stala teprve třetí zoologickou zahradou v&nbsp;republice (po Plzni a Praze), kde mohou návštěvníci obdivovat draka z&nbsp;Komoda.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
