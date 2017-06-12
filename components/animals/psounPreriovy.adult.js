import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/psounPreriovy/01.jpg'),
  require('../../images/animals/psounPreriovy/02.jpg'),
  require('../../images/animals/psounPreriovy/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/psounPreriovy/01-thumb.jpg'),
  require('../../images/animals/psounPreriovy/02-thumb.jpg'),
  require('../../images/animals/psounPreriovy/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Psoun prériový (latinsky <Text style={styles.italic}>Cynomys ludovicianus</Text>) není žádný pes, jak by se mohlo podle názvu zdát. Přesto mu v&nbsp;různých jazycích dávají jména, která tomu nasvědčují. Vedle českého <Text style={styles.italic}>psoun</Text> je to latinské <Text style={styles.italic}>Cynomys</Text>, což znamená psí myš, a anglické <Text style={styles.italic}>black-tailed prairie dog</Text>, tedy černoocasý prériový pes. No není to psina? Tohoto nenápadného hlodavce byste si na první pohled se psem rozhodně nespletli, ale na první poslech možná ano. Umí totiž velmi dobře štěkat. Tuto dovednost využívá zejména jako varování před blížícími se nepřáteli, které by mohlo napadnout napadnout město. Ano, i&nbsp;psouni mají svá města, mnohdy jsou dokonce větší než ta naše. To nejrozlehlejší mělo údajně asi 65&nbsp;000&nbsp;km<Text style={styles.superscript}>2</Text>, což je jako 5/6 České republiky, a žilo v&nbsp;něm přibližně 400&nbsp;milionů obyvatel. 
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Je zřejmé, že tak velká společenství nemohou fungovat bez nějakého rozčlenění, a proto je tento rozsáhlý systém podzemních chodeb a nor rozdělen do čtvrtí, v&nbsp;nichž žijí jednotlivé klany. Takový klan čítá obvykle jednoho dospělého samce, jeho harém a mláďata, která se rodí po zhruba měsíční březosti v počtu čtyři až pět. Zpočátku jsou slepá, holá a úplně bezbranná, proto po dobu šesti týdnů nevystrčí paty z&nbsp;nory. Matka je v&nbsp;tomto období vůči konkurenci velmi agresivní, snad aby ochránila svá mláďata a udržela populaci v&nbsp;únosné míře. Doslova se dá říct, že by ostatní nejraději zakousla, což se v&nbsp;případě cizích mláďat také stává. Samice pak zůstávají součástí klanu po celý život, zatímco samci postupně odcházejí. Ti nově narození si jdou hledat nevěsty, otec rodinu obvykle opouští po dvou letech.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jako stavební parcely tito zkušení stavitelé využívají suché a rozlehlé pastviny Severní Ameriky, zejména Spojených států. S&nbsp;oblibou si vybírají oblasti poznamenané předchozím působením člověka nebo vypasené dobytkem, které vegetací příliš neoplývají, a proto si musejí vystačit s&nbsp;travinami, bylinami, semeny a výhonky. Cíleně pak hubí rostliny, po kterých ostatní ani neštěknou. Oni sami byli v minulosti hubeni farmáři, protože je považovali za konkurenci a hrozbu pro svůj dobytek. Pravdou je, že se nějaké zvíře občas zranilo, když mu uvízla noha v&nbsp;psouní noře, takové případy ale byly výjimečné. Ve skutečnosti jsou pro ekosystém spíše přínosem – jejich nory slouží jako ubytovací jednotky pro další živočichy, kypří půdu a zabraňují erozi, nemluvě o&nbsp;již zmíněné likvidaci nekvalitních rostlin.
        </AnimalText>
        <AnimalText>
          Jsou to zkrátka pozoruhodná malá stvoření, která si rozhodně zaslouží, abyste jim alespoň pár chvil věnovali. Howgh.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
