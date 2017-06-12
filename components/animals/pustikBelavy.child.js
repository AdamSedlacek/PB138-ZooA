import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/pustikBelavy/01.jpg'),
  require('../../images/animals/pustikBelavy/02.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/pustikBelavy/01-thumb.jpg'),
  require('../../images/animals/pustikBelavy/02-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Milé děti!
        </AnimalText>
      
        <AnimalText>
        Jsem puštík bělavý (pro hloubavé <Text style={styles.italic}>Strix uralensis</Text>), ale všichni mi říkají Oscar. Můj moudrý pohled naznačuje, že jsem jedním z&nbsp;mnoha druhů sov.
        </AnimalText>
        <AnimalText>
        Do brněnské zoo jsem přicestoval ze Švédska 5.&nbsp;6.&nbsp;2014, a jelikož mi samotnému bylo smutno, v&nbsp;dubnu&nbsp;2015 mi chovatelé pořídili puštičí kamarádku, která zatím jméno nemá. Přijela z&nbsp;finské zoo Ranua Wildlife Park, takže jsme zpočátku houkali každý jiným jazykem. Bydlíme spolu ale moc rádi, a proto nás můžete často vidět, jak sedíme vedle sebe na jedné větvi. Vaši návštěvu u&nbsp;naší voliéry odměníme upřeným pohledem korálkově černýma očkama.       
        </AnimalText>
        <AnimalText>
        Na první pohled nás od sebe nerozlišíte, jelikož máme oba stejné zbarvení, avšak ti z&nbsp;vás, kdo mají bystrý zrak, jistě zpozorují, že moje soví kamarádka je o&nbsp;něco větší než já. My puštíci bělaví jsme dle profesora Schustera (viz informační šapitó Járy Cimrmana) běžně velcí asi jako 7–8&nbsp;myší (tedy asi 50–56&nbsp;cm) a vážíme stejně jako 27–37&nbsp;myší (800–1100&nbsp;g). Patříme mezi jedny z&nbsp;největších sov v&nbsp;Evropě.
        </AnimalText>
       <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Vždy, když počítám v&nbsp;myších jednotkách, dostávám hlad! Myši totiž patří mezi mé oblíbené jídlo. Nepohrdnu ale ani jinými hlodavci, hmyzem a některými obojživelníky. 
        </AnimalText>
        <AnimalText>
        Já i&nbsp;moje kamarádka z&nbsp;Finska patříme do poddruhu puštíka bělavého západosibiřského, kterého najdete pouze v&nbsp;několika evropských zoo.
        </AnimalText>
        <AnimalText>
        V&nbsp;České republice se ve volné přírodě můžete s&nbsp;jinými puštíky bělavými setkat např.&nbsp;na Šumavě, kde byli úspěšně vysazeni, či v&nbsp;Beskydech. Naleznete nás i&nbsp;na Slovensku, ale především v&nbsp;severských zemích s&nbsp;jehličnatými lesy, tedy v&nbsp;pásu od Norska až po Japonsko.
        </AnimalText>
        <AnimalText>
        Samičky snáší 2–6&nbsp;vajíček, z&nbsp;nichž se po 27–29&nbsp;dnech vylíhnou malí puštíci. Běžně se pak dožíváme až 25&nbsp;let. V&nbsp;brněnské zoo jsme mláďátka ještě neměli, avšak až se s&nbsp;mojí kamarádkou pořádně poznáme, jistě se nějakých dočkáte.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
