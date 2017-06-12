import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/losEvropsky/01.jpg'),
  require('../../images/animals/losEvropsky/02.jpg'),
  require('../../images/animals/losEvropsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/losEvropsky/01-thumb.jpg'),
  require('../../images/animals/losEvropsky/02-thumb.jpg'),
  require('../../images/animals/losEvropsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Největší příslušník čeledi jelenovitých je los evropský (lat. <Text style={styles.italic}>Alces alces</Text>). Běžně dorůstá délky dvou až tří metrů. Samice váží okolo tří set kilogramů, samec může být až dvakrát těžší a poznáte ho podle parohů. Parohy většinou tvarem připomínají lopaty, ale mohou vypadat i&nbsp;jako parůžky. Pořádné parohy mohou vážit až dvacet kilogramů, avšak každý rok je samec shazuje a poté čeká, až mu narostou nové. Losi se dožívají osmi až patnácti let.
        </AnimalText>
        <AnimalText>
          Jak nejlépe losa popsat? Stavbou těla je podobný koni. Na krku, který je kratší než u&nbsp;koní, mu roste hříva. Rozhodně však není tak dlouhá a působivá.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Tlama se u&nbsp;losa a koně podstatně liší. Los má převislý horní pysk. Díky tomu se nám může zdát, že se spíš podobá oslovi. Charakteristickým rysem je pro něj špatný zrak, ale výborný sluch a čich. Kvůli výbornému sluchu je velmi citlivý na hluk. Z&nbsp;toho důvodu se zdržuje jen v&nbsp;místech, která nejsou silně poznamenána lidskou civilizací. Takových míst postupně ubývá, což se na populaci losů odráží.
        </AnimalText>
        <AnimalText>
          Srst losů je hustší než u&nbsp;ostatních jelenovitých. Je to proto, že losi jsou zvyklí na velmi chladná klimata. Čím chladnější klima, tím hustší srst mu naroste. Největší výskyt těchto zvířat je v&nbsp;lesích a v&nbsp;bažinách na severu Evropy, Asie a Ameriky. Kdysi žili hojně i&nbsp;u&nbsp;nás, nyní se však řadí na seznam silně ohrožených zvířat.
        </AnimalText>
        <AnimalText>
          Všimli jste si jejich kopyt? Nejsou obyčejná... Kopyta jsou širší, než jaká známe u&nbsp;koně. Ale proč? Jak již bylo zmíněno, losi žijí i&nbsp;v&nbsp;bažinách. V&nbsp;takových místech potřebují rozložit svou obrovskou hmotnost, aby se nepropadali do bahna. Dokážou běžet rychlostí až 50&nbsp;km/h.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Losi patří k&nbsp;podřádu přežvýkavců. Požírají listy stromků a sní dokonce i&nbsp;kůru stromů nebo vodní rostliny. Pokud se chtějí nažrat trávy, musí kvůli svému krátkému krku pořádně rozkročit nohy, aby dosáhli hlavou na zem.
        </AnimalText>
        <AnimalText>
          Tito tvorové jsou samotáři. Samec a samice žijí zpravidla odděleně. V&nbsp;období říje se samci ozývají sténáním až kvílením, a lákají tak samice. Mnoho samců je v&nbsp;této době agresivní a může zaútočit i&nbsp;na člověka. Samice jsou březí asi devět měsíců a mívají jedno až tři mláďata. Pokusy o&nbsp;domestikaci byly většinou neúspěšné. 
        </AnimalText>
        <AnimalText>
        
        </AnimalText>
        <AnimalText>
          Zajímavost:
        </AnimalText>
        <AnimalText>
          Autorem nejstarší písemnosti o&nbsp;losech je Gaius Julius Caesar. Ve svém díle Zápisky o&nbsp;válce galské popisuje, jak nejlépe ulovit losa. Caesar tvrdil, že losi spí opření o&nbsp;strom, protože prý nemají klouby a nemohou si lehnout. Stačí prý pokácet strom, o&nbsp;který se los opírá. Los spadne a už se nezvedne. Toto tvrzení ale není pravdivé.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
