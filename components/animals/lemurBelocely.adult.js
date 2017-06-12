import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/lemurBelocely/01.jpg'),
  require('../../images/animals/lemurBelocely/02.jpg'),
  require('../../images/animals/lemurBelocely/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/lemurBelocely/01-thumb.jpg'),
  require('../../images/animals/lemurBelocely/02-thumb.jpg'),
  require('../../images/animals/lemurBelocely/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Když přijde řeč na lemury, tedy malé poloopice pocházející výhradně z&nbsp;ostrova Madagaskar, většina z&nbsp;vás si pravděpodobně ihned vybaví jejich nejznámějšího zástupce – lemura katu s&nbsp;charakteristickým pruhovaným ocasem. Faktem ovšem je, že mezi lemury se řadí několik desítek dalších druhů (přesné číslo se odborníci zatím neodvažují odhadnout) a jedním z&nbsp;nich je i&nbsp;neméně zajímavý lemur běločelý (<Text style={styles.italic}>Eulemur albifrons</Text>).
        </AnimalText>
        <AnimalText>
          V&nbsp;naší expozici se můžete seznámit s&nbsp;jedním „běločelcem“ – samečkem Karlíkem. Přicestoval k&nbsp;nám z&nbsp;Olomouce v&nbsp;roce 2000.
        </AnimalText>
        <AnimalText>
          Jak si můžete povšimnout, srst lemurů běločelých nabývá hnědého až hnědošedého zbarvení. Pohlaví jedinců je v&nbsp;případě tohoto druhu na první pohled snadno poznatelné, neboť samci oproti samicím disponují i&nbsp;výrazným, sněhově bílým zbarvením na hlavě, krku a spodní straně těla.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Pocházejí z&nbsp;deštných lesů severovýchodní části Madagaskaru. Jejich jídelníček tvoří ovocné plody, větvičky, listy nebo hmyz (jsou to všežravci). Převážnou část života tráví na stromech, kde se pohybují po čtyřech a poskakují z&nbsp;větve na větev. Mají dlouhý huňatý ocas, který jim pomáhá udržovat rovnováhu. Jsou aktivní v&nbsp;různých časových intervalech během dne i&nbsp;noci. Právě díky jejich nočnímu cestování pralesem a plačtivému hlasu dostaly tyto poloopice jméno lemur, které ve staré římské mytologii označovalo duchy zemřelých a dalo by se přeložit jako „noční putující duch“.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Samice lemura běločelého rodí jedno mládě po čtyřech měsících březosti. V&nbsp;prvních třech týdnech nosí matka svého potomka na boku, poté se mládě přesouvá na její hřbet. Zde se nechává nosit až do té doby, dokud není připraveno udělat první krůčky. Zcela samostatné je v&nbsp;6&nbsp;měsících života. Lemuři běločelí se v&nbsp;přírodě dožívají 20–25&nbsp;let, v&nbsp;lidské péči až 35&nbsp;let.
        </AnimalText>
        <AnimalText>
          Pokud vám náš roztomilý lemur padl do oka, neměly by vám uniknout ani další druhy, které v&nbsp;naší zoo chováme. Hned vedle lemura běločelého naleznete i&nbsp;lemury černé a v&nbsp;Africké vesnici se na vás těší již zmiňovaní lemuři kata.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
