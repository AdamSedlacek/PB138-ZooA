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
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Vikuňa (latinou políbení ji mohou znát také pod názvem <Text style={styles.italic}>Vicugna vicugna</Text>) není jen tak ledajaká lama. Nemůže se sice pyšnit závratným vzrůstem, měří maximálně 120&nbsp;centimetrů v&nbsp;kohoutku, což z&nbsp;ní dělá nejmenší z&nbsp;velbloudovitých, její velikost však spočívá v&nbsp;něčem jiném. Díky své pozoruhodné vlně si může žít jako v&nbsp;bavlnce. Ta je totiž velmi kvalitní, a tudíž i&nbsp;cenná. V&nbsp;dávných dobách si ji mohli dovolit jen ti nejvýše postavení. Je jemnější než kašmír, ale vlákna z&nbsp;ní upředená jsou překvapivě pevná. Navíc může dorůstat až třiceti centimetrů.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Vikuním koluje v&nbsp;žilách výjimečně okysličená a na červené krvinky bohatá krev. Díky tomu si mohou ve své domovině, jihoamerických Andách, žít na vysoké úrovni, a to až téměř v&nbsp;pěti tisících metrech nad mořem. V&nbsp;takových výšinách ovšem tráví především noci, přes den tráví trávy, byliny a sukulenty na pastvinách a v&nbsp;okolí močálů.
        </AnimalText>
        <AnimalText>
          Některé vikuně žijí samotářsky, jiné v&nbsp;rodinných skupinách, mladí samci si pak občas vytvářejí vlastní společné skupiny. Rodinné skupiny má vždy pod palcem (nebo spíš pod kopytem) jeden dominantní samec, který si brání své stádo i&nbsp;postavení. Žádné jiné dospělé samce proto do svého stáda vůbec nepustí.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Dokonce i&nbsp;mláďata se brzy osamostatní a pak se vydávají svou cestou. Stát na vlastních nohou se naučí téměř okamžitě, nedlouho poté si osvojí i&nbsp;umění běhu. Když se trochu zdokonalí, mohou běhat až padesátikilometrovou rychlostí. Samci pak zůstávají s&nbsp;matkou po dobu čtyř až devíti měsíců, samičky ji obvykle opouštějí po osmi až deseti měsících.
        </AnimalText>
        <AnimalText>
          U&nbsp;nás v&nbsp;zoo se můžete seznámit s&nbsp;Björnem, který v&nbsp;roce 2010 přicestoval ze zoo v&nbsp;Hannoveru, a se samicí z&nbsp;Moskvy, která se nám dosud nepředstavila. I&nbsp;ona se u&nbsp;nás zabydlela v&nbsp;roce 2010. Kromě příjezdu do Brna mají společný i&nbsp;rok narození. Björn se narodil v&nbsp;červenci 2008, tajemná dáma pak přibližně o&nbsp;dva měsíce později.
        </AnimalText>
        <AnimalText>
          O&nbsp;vikuních je to vše, ale nebojte, ještě jsou tu alpaky.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
