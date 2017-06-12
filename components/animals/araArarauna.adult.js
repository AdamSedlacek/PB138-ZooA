import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/araArarauna/01.jpg'),
  require('../../images/animals/araArarauna/02.jpg'),
  require('../../images/animals/araArarauna/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/araArarauna/01-thumb.jpg'),
  require('../../images/animals/araArarauna/02-thumb.jpg'),
  require('../../images/animals/araArarauna/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Tento druh papouška je asi nejznámější a nejoblíbenější ze všech arů. Má totiž velmi dobré vlastnosti pro ochočení. Je vysoce inteligentní, a pokud k&nbsp;člověku přilne, vyžaduje jeho pozornost.
        </AnimalText>
        <AnimalText>
        Brněnská zoologická zahrada se může pyšnit prvním odchovem ary ararauny na českém území, a to v&nbsp;roce 1963. Nyní se tito ptáci nachází v&nbsp;expozici zvané Exotárium, kde mají možnost vyžití jak venku, tak uvnitř. Tudíž pokud je nevidíte venku, jsou uvnitř a naopak. Rádi mezi těmito místy přelétávají. Momentálně zde bydlí samička Koko, její partner Pedro a ještě tu máme samečka Edu.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Papoušci ara mají nenápadné krycí zbarvení, spodní část těla je žlutá a vrchní zelenomodrá. Když se schovávají v&nbsp;korunách stromů a svítí slunce, jsou proti modré obloze téměř k&nbsp;nenalezení. Na krku mají černý pruh, okolí očí je, až na pár černých pírek, bílé a holé. Měří mezi 80–86&nbsp;centimetry, ale většinu této délky zaujímá dlouhý ocas. Pohlaví se nedá určit ani podle vnějšího zbarvení, ani podle chování, ale pouze za pomoci vyšetření. Zobák mají černý, mohutný a zahnutý. Jeho spodní část je pohyblivá.
        </AnimalText>
        <AnimalText>
         Díky silnému zobáku nemají problém rozlousknout jakkoli tvrdou skořápku. Jejich nejčastější potravou jsou různé druhy ořechů, plody, pupeny, mladé výhonky stromů a příležitostně hmyz. Za potravou jsou schopni létat až 25&nbsp;kilometrů daleko v&nbsp;hejnech, která vedou vždy starší a zkušenější ptáci. Pohromadě také létají ke břehům řek, kde požírají jíl kvůli neutralizaci rostlinných toxinů z&nbsp;potravy. Hledat jídlo se vydávají za úsvitu, za soumraku se pak shromažďují v&nbsp;dutinách stromů, kde tráví noc.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Samička snáší 1–3&nbsp;vejce, na kterých sedí cca 25&nbsp;dní. Mláďata se rodí holá a slepá, peří jim narůstá až za 10&nbsp;týdnů, dospívají ve 2–3&nbsp;letech. Malé ary krmí samec. Pokud se k&nbsp;hnízdu přiblíží vetřelec, oba rodiče bývají velmi agresivní. Žijí v&nbsp;monogamních párech, pokud nehnízdí, tak i&nbsp;v&nbsp;hejnech. Dožívají se asi 50&nbsp;let, v&nbsp;lidské péči až 80&nbsp;let.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
