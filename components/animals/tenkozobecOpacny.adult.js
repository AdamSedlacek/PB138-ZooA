import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/tenkozobecOpacny/01.jpg'),
  require('../../images/animals/tenkozobecOpacny/02.jpg'),
  require('../../images/animals/tenkozobecOpacny/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/tenkozobecOpacny/01-thumb.jpg'),
  require('../../images/animals/tenkozobecOpacny/02-thumb.jpg'),
  require('../../images/animals/tenkozobecOpacny/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Mezi ostatními zdejšími bahňáky byste nás měli rozeznat snadno. Jsme ti nohatí, černobílí, s&nbsp;dlouhým tenkým zobákem zahnutým nahoru. Už nás vidíte? Samičky mají zobák kratší než samci a mláďata jsou hnědobílá.
        </AnimalText>
        <AnimalText>
        Jsem tenkozobec opačný, latinsky <Text style={styles.italic}>Recurvirostra avosetta</Text>. V&nbsp;angličtině mi říkají <Text style={styles.italic}>avocet</Text>, což je odvozeno z&nbsp;latiny přes italštinu a francouzštinu od starého názvu ptáka, ale stejně tak by to mohlo být i&nbsp;podle černé čepičky, která připomíná pokrývku hlavy kdysi používanou evropskými advokáty. (Milovníkům Sirotčince slečny Peregrinové pro podivné děti už musí být jasné, kdo je slečna Avocetová.) Tady v&nbsp;Česku mě pojmenovali zase podle zobáku. Skvěle se s&nbsp;ním přehrabuje v&nbsp;bahně a loví pochoutky. Nejradši mám drobné korýše a měkkýše, ve sladkých vodách zase nepohrdnu larvami hmyzu ani rybím potěrem.
        </AnimalText>
        <AnimalText>
        Mám rád společnost svých druhů, ve volné přírodě žijeme v&nbsp;koloniích 10 až 70 párů v&nbsp;mělkých slaných lagunách, bahnitých rybnících a ústích řek. I&nbsp;v&nbsp;Česku nás pár můžete zahlédnout, především na jižní Moravě a v&nbsp;jižních Čechách.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Jsme cestovatelé. Na jaře odlétáme kvůli zakládání rodiny. O&nbsp;vejce máme střídavou péči. Vztah vydrží vždy jen na těch pár měsíců, než mladí vylétnou z&nbsp;hnízda, a pak si letíme po svých, domů se svou partou. V&nbsp;zimě zase míříme na jih, protože ve zmrzlém bahně se špatně žere. Ti, co je drkotání zobáku nevyhání, si můžou zůstat na stejném místě celý rok, ale rodinu zpravidla zakládáme jinde, než jsme se narodili my sami.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Jo a slyšeli jste už o&nbsp;Královské společnosti pro ochranu ptáků (RSPB) ve Velké Británii? Před druhou světovou válkou jsme byli v&nbsp;Anglii téměř vyhynulým druhem, ale díky Dohodě o&nbsp;ochraně africko-euroasijských stěhovavých vodních ptáků (AEWA) a programu, který nám zajistil příjemné a klidné prostředí pro hnízdění, se naše počty zase rozrostly a my se dostali na znak RSPB jako připomínka jejich i&nbsp;našeho úspěchu. Modelem jim stál určitě nějaký můj příbuzný, ha.
        </AnimalText>
        <AnimalText>
        Bahnu zdar!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
