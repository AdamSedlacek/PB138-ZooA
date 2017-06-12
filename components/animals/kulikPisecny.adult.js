import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/kulikPisecny/01.jpg'),
  require('../../images/animals/kulikPisecny/02.jpg'),
  require('../../images/animals/kulikPisecny/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/kulikPisecny/01-thumb.jpg'),
  require('../../images/animals/kulikPisecny/02-thumb.jpg'),
  require('../../images/animals/kulikPisecny/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Kulík písečný (pro latiníky a milovníky lehkých jazykolamů <Text style={styles.italic}>Charadrius hiaticula</Text>) je pták dorůstající zhruba 20&nbsp;centimetrů. Rozpětím křídel svou velikost efektivně dvojnásobí, neboť se tak blíží ke 40&nbsp;centimetrům. K&nbsp;ještě větším číslům dosahuje hmotností, jež se pohybuje v&nbsp;intervalu 50–70&nbsp;gramů. Vzhledem připomíná kulík kuličku, je tedy postavy spíše zavalité. Na zádech a temeni jsou kulíci zbarveni hnědošedě, zatímco bříško mají bílé. Bílý je i&nbsp;límec, který kulíkům zdobí krk.
        </AnimalText>
        <AnimalText>
          Kulíci jsou tažní ptáci. Obvykle hnízdí na severních pobřežích Evropy a Asie, objevují se také v&nbsp;Grónsku a v&nbsp;Kanadě. Na přelomu srpna a září migrují na jih, někteří mohou doletět až na jih Afriky. Občas táhnou tito kulíci i&nbsp;přes Českou republiku, někdy tu i&nbsp;zahnízdí. Jejich obvyklé cesty ale vedou jinudy.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jídelníček průměrného kulíka tvoří hmyz, korýši a červi. Potravu loví na březích všemožných vod z&nbsp;písku a bahna. Podle toho se kulík <Text style={styles.italic}>písečný</Text> řadí mezi <Text style={styles.italic}>bahňáky</Text>, což je různorodá skupina ptáků, jejichž společným poznávacím znakem je vazba na vodu.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Hnízda si kulíci staví na písečném nebo bahenním podkladě. Snáší 3–5&nbsp;vajec, ze kterých se vylíhnou mláďata po přibližně pětadvaceti dnech. Pokud je hnízdo s&nbsp;mláďaty (v&nbsp;libovolné fázi vývoje) ohroženo, vyběhne jeden z&nbsp;rodičů co nejdál od hnízda a zatímco vyluzuje hlasité zvuky, simuluje, že nemůže létat. Když predátor nemá oči pro nic jiného než rádoby-letu-neschopného kulíka (a zároveň je dostatečně daleko od hnízda), kulík uletí. A když nebezpečí pomine, vrátí se k&nbsp;hnízdu, kde by se, kdyby nebyl ptákem, mohl smát pod vousy.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
