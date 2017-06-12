import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/zebraGrevyho/01.jpg'),
  require('../../images/animals/zebraGrevyho/02.jpg'),
  require('../../images/animals/zebraGrevyho/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/zebraGrevyho/01-thumb.jpg'),
  require('../../images/animals/zebraGrevyho/02-thumb.jpg'),
  require('../../images/animals/zebraGrevyho/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Zebra Grévyho, latinsky <Text style={styles.italic}>Equus grevyi</Text>, je největším druhem zebry. Žije nejseverněji ze všech a původem je z&nbsp;Afriky. Našli bychom ji v&nbsp;savanách a na polopouštích v&nbsp;Etiopii a v&nbsp;Keni nebo v&nbsp;Somálsku a Súdánu.
        </AnimalText>
        <AnimalText>
          Podíl na jméně této zebry má francouzský prezident, který se jmenoval Jules Grévy. Ten dostal roku&nbsp;1882 od etiopské vlády jednu zebru darem. V&nbsp;téže době se zjistilo, že v&nbsp;Etiopii existuje dosud neznámý druh, který je třeba pojmenovat. A tak, pro vyjádření pocty prezidentovi, dostala zebra přívlastek Grévy.
        </AnimalText>
        <AnimalText>
          V&nbsp;naší zoo chováme dvoje zebry: zebry Grévyho a zebry Chapmanovy. Zebry Chapmanovy se nachází nedaleko odsud – v&nbsp;Africké vesnici. Myslíte, že byste je od sebe odlišili? Nu, pár rozdílů mezi nimi je.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Za prvé, zebra Grévyho je rozměrově větší. Může být vysoká až 160&nbsp;cm a dlouhá 250–275&nbsp;cm. Má i&nbsp;zřetelně větší uši. Zebra Chapmanova je kratší i&nbsp;nižší asi o&nbsp;20&nbsp;cm. 
        </AnimalText>
        <AnimalText>
          Za druhé, zebra Grévyho má hustší pruhování a na krku má pruhy širší než na zbytku těla, kde je má naopak mnohem užší než zebra Chapmanova. Na břichu žádné pruhy nemá, čímž se liší od všech ostatních druhů. Nos má hnědý a rostou jí na něm drobné fousky. Zebra Chapmanova má čumák černý a mezi černými širšími pruhy má na zadní polovině těla ještě tmavohnědé tenké proužky.
        </AnimalText>
        <AnimalText>
          Ale dost bylo porovnávání. Nás teď zajímá zebra Grévyho. Jaké prostředí je pro ni typické? Co zebra jí? Má v&nbsp;přírodě nějaké predátory? Kolik mívá mláďat a jak se o&nbsp;ně stará?
        </AnimalText>
        <AnimalText>
          Zebra je zvyklá na teplé prostředí a hlavní jsou pro ni stromy a keře. Těmi se také stravuje. Okusuje jejich listy, nepohrdne ani tvrdými travinami. Přežije až 5&nbsp;dní bez vody, ale pokud se nachází u&nbsp;vodního zdroje, pije několikrát za den. Dožívá se 20–30&nbsp;let.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Samec a samice mohou žít samostatně – mimo stádo. To nastává hlavně v&nbsp;případech, když se zebra rozhodne najít prostředí s&nbsp;lepšími životními podmínkami. Přesto se nejčastěji sdružují do stád, protože se tak lépe ubrání predátorům. Nejčastějšími predátory zebry bývají lvi, hyeny nebo krokodýli, na mláďata si však dovolí i&bnsp;gepardi nebo levharti.
        </AnimalText>
        <AnimalText>
          Samice se většinou druží s&nbsp;více samci. Nicméně když porodí, drží se poblíž jediného po zbytek života. Samice je březí rok nebo i&nbsp;více. Většinou se jí narodí jedno mládě. Pokud se narodí dvojčata, ve většině případů nejsou životaschopná obě. Mláďata se rodí s&nbsp;hnědými pruhy, postupem času jim ztmavnou. Po porodu matka drží potomka u&nbsp;sebe a odhání ostatní samice. Hříbě by totiž následovalo cokoliv, co se hne. Proto je nutné, aby si zvyklo primárně na svou matku. Po půl roce se mládě už trochu osamostatní a až po 3&nbsp;letech se od ní odpoutá úplně. 
        </AnimalText>
        <AnimalText>
          Ve stádech s&nbsp;mláďaty existují tzv. školky. Když zebry jdou hledat vodu či potravu, mláďata s&nbsp;sebou neberou. Ta zůstanou pod dozorem jedné samice a jednoho samce. Samice se stará o&nbsp;mláďata a samec celou skupinku chrání.
        </AnimalText>
        <AnimalText>
          Na závěr jsme si nechali jeden důležitý fakt... Co myslíte, je zebra bílá s&nbsp;černými pruhy, nebo černá s&nbsp;bílými pruhy? Že to nejde určit? No, běžný pozorovatel to nepozná. Avšak představte si, že to určeno bylo. Embryologické studie prokázaly, že srst zebry je černá s&nbsp;bílými pruhy.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
