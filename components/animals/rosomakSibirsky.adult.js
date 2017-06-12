import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/rosomakSibirsky/01.jpg'),
  require('../../images/animals/rosomakSibirsky/02.jpg'),
  require('../../images/animals/rosomakSibirsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/rosomakSibirsky/01-thumb.jpg'),
  require('../../images/animals/rosomakSibirsky/02-thumb.jpg'),
  require('../../images/animals/rosomakSibirsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj, jmenuji se Ivan a jsem rosomák. Narodil jsem se v&nbsp;roce 2008 v&nbsp;Norsku a do brněnské zoo jsem přicestoval ve dvou letech. Nataša – to je ta rosomačice, která se mnou obývá výběh – je o&nbsp;dva roky mladší než já a sem do Beringie přijela jen krátce po mně. Aby nenastala nějaká mýlka, já jsem z&nbsp;nás dvou ten menší. Nataša sice pochází až z&nbsp;Ruska, ale mezi námi rosomáky nebývají jazykové bariéry, takže jsme se rychle skamarádili. Dokonce natolik, že se nám 2.&nbsp;března 2016 narodil syn Vasil.
        </AnimalText>
        <AnimalText>
          Rádi bychom se vám představili – jsme rosomáci sibiřští. Máme také mnoho jiných jmen a přezdívek, mnohé z&nbsp;nich jsou docela zábavné: tak například zoologové nám latinsky říkají <Text style={styles.italic}>Gulo gulo gulo</Text>, indiáni nás nazývají <Text style={styles.italic}>carcajou</Text> [karkažu:], což znamená <Text style={styles.italic}>zlý duch</Text> nebo <Text style={styles.italic}>horský ďábel</Text>. Jinak se nám také říká <Text style={styles.italic}>lesní duchové</Text> nebo <Text style={styles.italic}>hyeny severu</Text>. Ze severu sice opravdu pocházíme, ale k&nbsp;hyenám máme docela daleko, přestože jsme také šelmy a především mrchožrouti. Jsme největšími suchozemskými členy čeledi lasicovitých, velikostně i&nbsp;tvarem těla se nejvíce podobáme jezevcům.
        </AnimalText>
        <AnimalText>
          Čím jsme si tedy zasloužili takové přezdívky? K&nbsp;nám dvěma se moc nehodí, spíš byste nám mohli říkat <Text style={styles.italic}>šikovní bordeláři</Text>, protože rádi hrabeme doupata všude, kde se dá, a všechny úkryty z&nbsp;větví, které nám sem nanosili pracovníci zoo, jsme rozebrali a rozprostřeli po celém svém výběhu.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jsme divocí. Ve volné přírodě žijeme převážně sami, svá teritoria o&nbsp;velikosti až 500&nbsp;km<Text style={styles.superscript}>2</Text> si značkujeme jako třeba skunkové. Potkáváme se jen v&nbsp;létě, když chceme zakládat rodiny. Devět měsíců nato se samičkám narodí 1–5&nbsp;mláďat. Dříve se věřilo, že se rodíme jako medvíďata, a to tak, že pokud se medvědici narodí čtyři mláďata, z&nbsp;toho čtvrtého vyroste rosomák. Ale tak to rozhodně není. I&nbsp;když se o&nbsp;nás povídá, že kdybychom dorostli velikosti medvěda, byli bychom nejsilnějšími zvířaty na světě.
        </AnimalText>
        <AnimalText>
          Jsme vynikající lovci a stopaři. Díky svým širokým tlapám se umíme lehce pohybovat po sněhu. Této dovednosti využíváme například při lovu losů – velké zvíře tak dlouho naháníme ve vysokém sněhu, až se los unaví a my ho zakousneme. Běžně však dáváme přednost menším úlovkům a hlavně mršinám, ale neodmítneme ani vejce či různé plody. Potravu umíme vyčichat i&nbsp;pod hlubokým sněhem nebo zvládneme podle pastí dojít až k lidskému obydlí, tam sníst a posbírat, co se dá, a zase se tiše vykrást, aniž bychom se do pastí chytili. Cestou nás nezastaví ani slabší kovové oplocení – s&nbsp;tím si poradí naše silné čelisti plné velmi ostrých zubů.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />      
        <AnimalText>
          My rosomáci nemáme příliš přirozených nepřátel – bojíme se snad jen lidí nebo smečky vlků. I&nbsp;když už jsem taky slyšel, že rosomáci dokázali takovou smečku vlků zahnat. Nevím, co je na tom pravdy, ale třeba s&nbsp;pumou, s&nbsp;tou si poradíme. Když vyceníme zuby, naježíme hřbet a začneme temně vrčet, vyděsíme ji natolik, že nechá svou kořist kořistí a zbaběle uteče.
        </AnimalText>
        <AnimalText>
          Uznávám, že tady v&nbsp;zoo žádné nepřátele nemáme a lovit taky nemusíme, protože dostáváme pravidelně najíst. Ale když se nám něco nelíbí, to je pak podívaná! V&nbsp;tu chvíli jsou z&nbsp;nás opět ta nejdivočejší zvířata, která se ani jediným chloupkem neliší od rosomáka bojujícího o&nbsp;kořist, nebo dokonce o&nbsp;holý život.
        </AnimalText>
        <AnimalText>
          Tak to jsme my. Teď už o&nbsp;nás víte mnohem více než na začátku. A když nad tím tak přemýšlím, ony se k&nbsp;nám některé ty přezdívky, třeba <Text style={styles.italic}>lesní duchové</Text>, možná přece jenom hodí.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
