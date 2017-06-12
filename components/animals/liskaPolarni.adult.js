import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/liskaPolarni/01.jpg'),
  require('../../images/animals/liskaPolarni/02.jpg'),
  require('../../images/animals/liskaPolarni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/liskaPolarni/01-thumb.jpg'),
  require('../../images/animals/liskaPolarni/02-thumb.jpg'),
  require('../../images/animals/liskaPolarni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
            Lišky polární, latinsky <Text style={styles.italic}>Vulpes lagopus</Text> patří k&nbsp;obyvatelům tundry. Kromě takových míst, jako je Sibiř, Kanada nebo Aljaška, obývají i&nbsp;řadu ostrovů. Samozřejmě Island, kde jsou jediný původní suchozemský savec, a Grónsko, ale i&nbsp;spoustu menších ostrovů. Na některých byly v&nbsp;devatenáctém století vysazovány obchodníky s&nbsp;kožešinami. Liška polární má totiž tak teplý kožich, že vydrží i&nbsp;teploty klesající pod –&nbsp;50&nbsp;°C. (A&nbsp;kdo by z&nbsp;něčeho takového nechtěl fešný kabátek.) 
          </AnimalText>
          <AnimalText>
            S&nbsp;udržením tělesné teploty v&nbsp;prostředí tak nízko pod bodem mrazu jim pomáhá i&nbsp;to, že mají krátké uši i&nbsp;čenich. Uzpůsobeny jsou k&nbsp;pobytu na sněhu a ledu, tlapy mají zespoda porostlé hustou srstí, což pomáhá jak proti promrznutí, tak i&nbsp;proti klouzání na ledu. Lišky polární jsou v&nbsp;podstatě hobiti – jsou malé a mají chlupaté nohy. Polární lišky totiž měří (včetně ocasu) kolem 90&nbsp;centimetrů, zatímco ty naše, lišky obecné, mohou mít centimetrů i&nbsp;140. (Ve výšce v&nbsp;kohoutku se liší přibližně o&nbsp;deset centimetrů, polární mají 30, obecné asi 40&nbsp;centimetrů.)
          </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Jako správné šelmy se polární lišky živí lovem, a to lumíků, různých ptáků (a jejich vajec) a ryb. Když se naskytne příležitost, vezmou zavděk mršinou, někdy i&nbsp;takovou, kterou ulovil jiný predátor – lední medvěd, vlk, nebo dokonce rosomák. Tihle predátoři ovšem můžou být nebezpeční i&nbsp;pro lišky. Pokud se lišky nedostanou ani k&nbsp;mršinám, chytají i&nbsp;různé bezobratlé, včetně mořských. Když už nejsou ani bezobratlí, pustí se lišky i&nbsp;do bobulí – technicky vzato jsou to takoví oportunisté.
          </AnimalText>
          <AnimalText>
            Pokud zrovna někomu nekradou kořist (za tímto účelem občas následují lední medvědy), loví tak, že se prodírají sněhem (a pod sněhem) za svou obětí – a pak na ni znenadání skočí.
          </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>    
            V&nbsp;rodičovství jsou polární lišky velice zodpovědné, na výchově mláďat se podílí i&nbsp;otec. Liščí monogamní páry pečují o&nbsp;mláďata ve spletitých tunelech své nory, odkud mladí vykouknou poprvé ve věku zhruba měsíce. V&nbsp;norách ovšem lišky pobývají jen v&nbsp;létě, kdy prohrabávají další a další tunely (a vytváří podzemní pevnost). V&nbsp;zimě se ale stahují k pobřeží a spávají zahrabané do sněhu.
          </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
