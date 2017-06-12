import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/agamaKocincinska/01.jpg'),
  require('../../images/animals/agamaKocincinska/02.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/agamaKocincinska/01-thumb.jpg'),
  require('../../images/animals/agamaKocincinska/02-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Agama kočinčinská neboli <Text style={styles.italic}>Physignathus cocincinus</Text>, pro Angličany <Text style={styles.italic}>chinese water dragon</Text>, tedy čínský vodní drak, je plaz dlouhý kolem tří čtvrtin metru, přičemž přibližně dvě třetiny délky agamy tvoří ocas. (Je proto s&nbsp;podivem, že agam nejsou plné učebnice matematiky; byly by z&nbsp;nich krásné příklady.)
        </AnimalText>
        <AnimalText>
          Agamy kočinčinské obývají jihovýchod Asie, oblast takzvané Kočinčíny, tedy jih Vietnamu. Kromě toho je možné je potkat v&nbsp;Číně, Thajsku a Laosu. Žijí na místech, kde je vlhko a teplo – pro milovníky čísel to znamená až 80% vlhkost a teploty 29&nbsp;±&nbsp;3&nbsp;°C. V&nbsp;takovýchto oblastech pobývají u&nbsp;vody na keřích nebo malých stromech. K&nbsp;nebezpečí se agamy otáčejí zády – vrhají se do vody, ve které jsou jako doma, a dovedou se potápět na desítky minut.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Co se potravy týče, nejčastěji si agamy pochutnávají na hmyzu. Čas od času si smlsnou i&nbsp;na drobných obratlovcích včetně ryb. Jen výjimečně okoštují i&nbsp;něco zeleného, většině agam totiž vegetariánství dvakrát nevoní. A proč by také mělo, když mají předpoklady k&nbsp;tomu být vynikajícími lovci – kromě plavání dokážou agamy také utíkat pouze po zadních nohou.
        </AnimalText>
        <AnimalText>
          V&nbsp;naší zoo žije jeden sameček a dvě samičky. Samečka lze poznat podle toho, že je barevnější, má na hřbetě větší hřeben a má žlutooranžově zbarvený spodek krku. Jinak jsou všechny agamy svrchu zelené, trochu do hněda a mají světlá bříška. (Mimochodem, hřeben mají i samičky; samečci je do něj kousají během kopulace.)
        </AnimalText>
        <AnimalText>
          Agamy jsou vejcorodé. Snůšku kladou samičky do jamky v&nbsp;zemi, mláďata se líhnou po dvou až dvou a půl měsících, záleží na okolní teplotě. Délka života agam je 10–15 let.
        </AnimalText>
        <AnimalText>
          A zajímavost na závěr: Agamy mají tři oči. Na temeni hlavy, mezi „normálníma“ očima, mají skvrnu, tzv. pineální oko, kterým vnímají změny intenzity světla. To jim jednak pravděpodobně pomáhá s&nbsp;termoregulací (slouží pro nalezení místa k&nbsp;vyhřívání) a jednak je chrání před nebezpečím. Spící agamy totiž tímto okem pravděpodobně dokážou poznat rozdíl v&nbsp;intenzitě světla, když nad nimi například letí dravec.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
