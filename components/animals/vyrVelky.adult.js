import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/vyrVelky/01.jpg'),
  require('../../images/animals/vyrVelky/02.jpg'),
  require('../../images/animals/vyrVelky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/vyrVelky/01-thumb.jpg'),
  require('../../images/animals/vyrVelky/02-thumb.jpg'),
  require('../../images/animals/vyrVelky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Uuu-hu. 
        </AnimalText>
        
        <AnimalText>
        Vidíte ušaté sovy? Tak ty větší a světlejší jsme my, výři velcí západosibiřští, největší evropské sovy. Anglicky se nám říká <Text style={styles.italic}>eagle owl</Text>, což je v&nbsp;překladu orlí sova. Máme rozpětí křídel skoro dva metry, možná se za chvíli protáhnu, abyste se mohli přesvědčit, ale nejdřív si prohlédněte mé výrazné žlutooranžové oči. 
        </AnimalText>
        <AnimalText>
        Výrů velkých je několik poddruhů, lišíme se velikostí, zbarvením, také vzorováním našeho peří a jsme roztroušeni po celé Evropě, Asii i&nbsp;v&nbsp;severozápadní Africe. My, výři západosibiřští, se vyskytujeme od Uralu přes řeku Ob až po Altaj. Zajímavé je pro nás výry také to, že jednotlivce lze od sebe odlišit dle houkání, každý máme totiž jedinečný hlas.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Do doby hnízdění žijeme odděleně, partnerky však většinou nestřídáme. Hnízda si stavíme pod skalními převisy, ve skalních štěrbinách, vchodech do jeskyní, na strmých svazích, výjimečně na stromech a stejné místo využíváme i&nbsp;několik let. Samice se stará o&nbsp;vejce a samec jí přináší ulovenou kořist. U&nbsp;našeho druhu se stává, že nejslabší mládě rodič či sourozenec usmrtí a sežere. Mladý výr opouští hnízdo po 5&nbsp;týdnech, létat umí kolem 7.&nbsp;týdne a nezávislý na rodičích je po 3 až 4 měsících. 
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Ve volné přírodě se dožíváme okolo 20&nbsp;let, tady v&nbsp;zoo klidně až 50&nbsp;let. Jsme aktivní za soumraku a v&nbsp;noci. Živíme se obratlovci od velikosti myši po dospělého zajíce. Rádi lovíme ježky. Ale zvládneme ulovit i&nbsp;zvíře větší, třeba takového koloucha, který je 3x těžší než my. 
        </AnimalText>
        
        <AnimalText>
        Uuu-hu! 
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
