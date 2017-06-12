import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/snovacRudozoby/01.jpg'),
  require('../../images/animals/snovacRudozoby/02.jpg'),
  require('../../images/animals/snovacRudozoby/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/snovacRudozoby/01-thumb.jpg'),
  require('../../images/animals/snovacRudozoby/02-thumb.jpg'),
  require('../../images/animals/snovacRudozoby/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Snovač rudozobý, latinsky <Text style={styles.italic}>Quelea quelea</Text>, je nejpočetnějším volně žijícím ptačím druhem na světě. Populace je odhadována na 1,5&nbsp;miliardy jedinců. To je skoro o&nbsp;třetinu více, než je obyvatel celé Afriky.
        </AnimalText>
        <AnimalText>
          Vyskytuje se na zmiňovaném kontinentu v&nbsp;savanách, kde má dostatek zdrojů potravy. Poletuje v&nbsp;hejnech. Některá hejna mohou být tak obrovská, že může trvat i&nbsp;pět hodin, než vám celá přeletí nad hlavou.
        </AnimalText>
        <AnimalText>
          Zde v&nbsp;brněnské zoo si tvoří své menší hejno. Je tu 69 jedinců a jsou v Africké vesnici ve voliéře, kam můžete vstoupit.
        </AnimalText>
        <AnimalText>
          Snovač je drobný – díky své velikosti by se vám mohl pohodlně vejít do dlaně a patrně vás moc nezatížil, jelikož váží pouhých 15–20&nbsp;g. To je jako hmotnost zarovnané kupičky soli na lžíci.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Samci nosí takzvaný svatební šat, který je pestře zbarven. Zahrnuje černou škrabošku a žlutohnědé peří na zádech i&nbsp;ocasu. Zbytek těla je pokrytý peřím hnědavým, někdy se znatelným nádechem do růžova. Samčí zobák a okruží kolem oka jsou výrazně rudé. Samička je – jak už to v&nbsp;přírodě bývá – zabarvená méně nápadně – šedohnědě. Její zobák je však rovněž červený a stejně tak okruží oka.
        </AnimalText>
        <AnimalText>
          Začátkem období dešťů začíná snovač hnízdit. Sameček začne snovat hnízdo ze stébel trávy. Vchod do hnízda umisťuje dospod, tím protřele znesnadňuje přístup těm, kteří by měli nekalý zájem o&nbsp;nakladená vajíčka či bezbranná mláďata. Ještě před dokončením hnízda si volí svoji partnerku. Až si vybere, spáří se a společně dokončují své dílo. Poté samička do hnízda snese 2–4 vejce. Při každém dalším hnízdění si sameček vybírá novou partnerku.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Snovačům nevadí hnízdit vedle sebe. Jelikož je jejich počet skutečně hojný, může se na velkých stromech vyskytovat hned několik tisíc hnízd.
        </AnimalText>
        <AnimalText>
          Živí se semeny rostlin, a pohybují-li se v osídlených oblastech, dokáží způsobit enormní škody na úrodě obilí. Přirovnávají se ke vpádu sarančat. Pokud se pohybují po divoké savaně, vyzobávají semena různých trav. Tady je vše důmyslně v&nbsp;pořádku, jelikož putujícím antilopám, pakoňům a jiným zbývá dostatek potravy ve stéblech a listech.
        </AnimalText>
        <AnimalText>
          Ačkoli se snovač rudozobý živí semeny, ze začátku své potomky krmí hmyzem. Tím si mírně napravuje svoji reputaci, kterou má v&nbsp;zemědělství poněkud pošramocenou. Někteří farmáři dokonce tráví u&nbsp;svého pole celý den a vydávají hlasité zvuky, aby děsili a odháněli rozsáhlá hejna.
        </AnimalText>
        <AnimalText>
          Snovači mezi sebou komunikují neustálým hlasitým štěbetáním. Tak se mějte na pozoru, milí návštěvníci zoo. Pokud spustí všichni naráz – jde o&nbsp;uši!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
