import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/pavianAnubi/01.jpg'),
  require('../../images/animals/pavianAnubi/02.jpg'),
  require('../../images/animals/pavianAnubi/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/pavianAnubi/01-thumb.jpg'),
  require('../../images/animals/pavianAnubi/02-thumb.jpg'),
  require('../../images/animals/pavianAnubi/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        „Loučím se, přátelé,“ řekl pavián a pročísl si bohatou hřívu na důkaz toho, že z&nbsp;něj vyrostl velký chlap. Dávno nebyl miminko s&nbsp;černou srstí. Oslavil už šesté narozeniny, a tak nastal čas, aby jako každý dospělý samec opustil svoji rodnou tlupu. Teta, která si s&nbsp;ním dřív hrávala, ho naposledy podrbala na zádech, a pavián se rozběhl vstříc novým dobrodružstvím.
        </AnimalText>
        <AnimalText>
        Těšil se, jak si svým šarmem získá urozenou slečnu, jak s&nbsp;ní bude žrát z&nbsp;jednoho talíře a ochrání ji před vším zlým. To však ještě nevěděl, že i&nbsp;na cestě na něj číhá spousta nebezpečí.
        </AnimalText>
        <AnimalText>
        Šel pustou africkou savanou, občas sežral trochu trávy, když najednou spatřil na horizontu lva. „Mohl by si mě dát k obědu!“ Pavián se vylekal a honem vyšplhal do větví akácie. Lev se ale pořád přibližoval a pavián se začal bát, že na strom vyleze taky.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Paviánovi však něco zašeptalo do ucha: „Sežer mě a utíkej!“ Byl to cvrček, delikatesa, které si pavián dopřával jen výjimečně. Netuše, co se stane, schroustal cvrčka a opatrně slezl ze stromu. Rozběhl se. Cítil, jak ho nohy nesou rychleji a rychleji, až se nakonec úplně vzdálil z&nbsp;dohledu nenasytného lva.
        </AnimalText>
        <AnimalText>
        Pavián doutíkal dál, než měl původně v&nbsp;plánu – na pole. Protože cestou vyhládl, začal ze země vyhrabávat kořínky a hlízy rostlin, které tam lidé pěstovali. Měl štěstí, že svědkem jeho bohaté hostiny byla jenom zem, ve které kopal. Když už byl konečně sytý, nečekaně se zachvěla a promluvila: „Paviáne, ani nevíš, jak příjemně jsi mě zkypřil. Za odměnu ti řeknu, kde najdeš svoji osudovou tlupu…“
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Zem paviánovi poradila správně. Došel až na okraj deštného pralesa, kde na větvi seděla sympatická paviání slečna. Vyčerpaného cestovatele jí bylo moc líto a vypadalo to, že se ho chce ujmout. Náhle se však ozval křik, štěkot a pískání. Na paviána se hnala banda opičáků se statným samcem v&nbsp;čele. Odháněl chudáka paviána a jasně mu ukazoval, čí nevěsta bude ta slečna sedící na větvi.
        </AnimalText>
        <AnimalText>
        Paviánka však měla jasno, komu chce fandit. V&nbsp;dlaních zahřála kousek ovoce a hodila ho našemu unavenému cestovateli: „Jez, dodá ti to energii!“ V&nbsp;ovoci bylo tolik síly a lásky, že se pavián vzchopil a pustil se do boje. Skřípal zuby, hrozivě cenil své velké špičáky a hřmotným hlasem řval – no, jako pavián. Soupeř se musel vzdát.
        </AnimalText>
        <AnimalText>
        Slečna na paviána radostně mávala a tvarem zahnutého ocasu naznačovala, že souboj zvládl na jedničku. Stal se novým členem tlupy.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
