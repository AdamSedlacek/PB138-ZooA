import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/lemurKata/01.jpg'),
  require('../../images/animals/lemurKata/02.jpg'),
  require('../../images/animals/lemurKata/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/lemurKata/01-thumb.jpg'),
  require('../../images/animals/lemurKata/02-thumb.jpg'),
  require('../../images/animals/lemurKata/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Já tak rád trsám, trsám… Všem dětem z&nbsp;celýho světa – váš král Jelimán to říká na rovinu: Miluju všechny děti, co se pořádně hejbaj! A když už se někdo hejbe, tak ať je sličný a sladký jako já!
        </AnimalText>
        <AnimalText>
          Pojďme si během trsání povědět něco o&nbsp;nás, lemurech kata. Tady v&nbsp;brněnské zoo je nás dohromady šest a všichni jsme kluci. Určitě už jste správně poznali, že mé jméno je známé z&nbsp;filmu Madagaskar. Ostatní mají taky jména, která jsou s&nbsp;filmem spojená – Morris (pravá ruka krále Jelimána), Alex (lev), Melman (žirafa), Marty (zebra). Jedinou výjimkou je Joffrey, který nese jméno po Joffreym de Peyracovi z&nbsp;filmu Angelika, a to kvůli jizvě na tváři. Jen se zeptejte maminky nebo babičky, jaký to byl šarmantní muž.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Víte, kde je Madagaskar? Je to celkem velký ostrov u&nbsp;pobřeží Afriky. To, že nás Marty, Alex a jejich parta na Madagaskaru objevili ve filmu, nebyla žádná náhoda – je to jediné místo na Zemi, kde žijeme volně v&nbsp;přírodě. Kvůli ničení unikátní madagaskarské přírody patříme mezi ohrožená zvířata.
        </AnimalText>
        <AnimalText>
          Jednoznačně nás poznáte podle pruhovaného ocasu. Je pro nás hodně důležitý, využíváme ho pro udržení rovnováhy při skocích a také se s&nbsp;jeho pomocí dorozumíváme ve vysoké trávě. Naše tělo je pokryto hustou a jemnou srstí, na dotek jsme hebcí. Často si ji pročesáváme hřebínkem, který nám tvoří špičáky a řezáky. Srst si pročesáváme také speciálním nehtem na druhém prstu na noze, ostatní drápy máme ploché, takže jsou stejné jako tvoje nehty. 
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          K&nbsp;snědku si rádi dáme různé druhy ovoce, listy a bylinky. Občas si dáme i&nbsp;nějaký drobný hmyz nebo pavouka, výjimečně si pochutnáme na malých obratlovcích, například na chameleonovi či malém ptáčkovi.
        </AnimalText>
        <AnimalText>
          Už se s&nbsp;vámi musím rozloučit, děti, musím si jít sbalit kufry, protože odjíždím za dalším dobrodružstvím. Trsejte každý den!
        </AnimalText>
        <AnimalText>
          Váš král Jelimán
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
