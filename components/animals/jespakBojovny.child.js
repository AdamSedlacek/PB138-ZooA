import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/jespakBojovny/01.jpg'),
  require('../../images/animals/jespakBojovny/02.jpg'),
  require('../../images/animals/jespakBojovny/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/jespakBojovny/01-thumb.jpg'),
  require('../../images/animals/jespakBojovny/02-thumb.jpg'),
  require('../../images/animals/jespakBojovny/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj děti,
        </AnimalText>
        <AnimalText>
          já jsem jespák bojovný a jsem tady nejstarší (narodil jsem se už v&nbsp;roce 2010), tak na mě připadlo vám vysvětlit, co jsme my jespáci zač. Přišli jsme sem z&nbsp;NaturZoo Rheine a z&nbsp;polské Varšavy.
        </AnimalText>
        <AnimalText>
          Jsme ptáci neposední, nevydržíme celý rok na jednom místě. Přes léto bydlíme na severu Evropy nebo Asie, ale v&nbsp;zimě by nás tam moc zábly nohy, tak se radši sbalíme a odstěhujeme se někam za teplem, třeba do Afriky. Vždyť vy, lidé, to přece děláte taky, hlavně o&nbsp;prázdninách. Není nad to si občas pořádně prohřát kosti. O&nbsp;nás ale kvůli tomu říkáte, že jsme stěhovaví nebo tažní.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Milujeme vodu a vůbec mokrou půdu, proto si nejraději hovíme poblíž jezer, bažin nebo mokřin. A jak rádi se brodíme bahnem! Ale vy to radši nedělejte, rodiče by z&nbsp;vás asi neměli radost. My jsme na to stavění, máme dlouhé nohy, takže si tělo hned tak neumažeme. A když se nám to náhodou povede, nevadí, peří se dobře čistí. Na té hnědé to stejně není moc vidět. Horší je to s&nbsp;bílým bříškem. Ale co, ty pochoutky za to stojí. Jaké? Hlavně hmyz, ale také máme rádi třeba rybky, červíky nebo vodní rostliny a jejich semena, prostě co ten náš zobáček tenký jako jehlička zrovna vyšťourá.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          My kluci jsme o&nbsp;něco větší než holky (na délku asi jako dlouhé pravítko), ale jinak jsme si většinou dost podobní. Když ale chceme udělat dojem, oblečeme se do svátečního, a to jsme pak nějací štramáci! Navlékneme si slušivý límec (hnědý, žlutý až bílý), změníme účes (za uši si dáme chocholky) a začneme se červenat (no dobře, možná spíš červenožlutat). K&nbsp;tomu občas přidáme nějakou tu poklonu, aby holky viděly, že dovedeme být i&nbsp;zdvořilí.
        </AnimalText>
        <AnimalText>
          No nic, kamarádi, už musím letět, ale nezapomeňte se podívat na naše milé spolubydlící – kulíky, tenkozobce a ústřičníka.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
