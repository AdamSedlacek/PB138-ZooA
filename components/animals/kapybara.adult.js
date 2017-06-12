import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/kapybara/01.jpg'),
  require('../../images/animals/kapybara/02.jpg'),
  require('../../images/animals/kapybara/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/kapybara/01-thumb.jpg'),
  require('../../images/animals/kapybara/02-thumb.jpg'),
  require('../../images/animals/kapybara/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Vlastníte mokřad a chcete ho vysušit, abyste na jeho místě mohli pást dobytek? Hodláte zlikvidovat svůj znečistěný zahradní bazén, protože se v&nbsp;něm už nikdo nechce koupat? Nedělejte to a pořiďte si pár kapybar! 
        </AnimalText>
        <AnimalText>
          Největší hlodavci světa vám zkrátí trávu kvalitněji a efektivněji než jakákoliv ovce či kůň. Mají vysoce výkonné a neustále dorůstající řezáky, jimiž pomohou sochařům opracovat dřevo i&nbsp;kámen.
        </AnimalText>
        <AnimalText>
          Jste zahrádkář a potřebujete kratší hadici? Trápí vás prodlužovací kabely, jež vám partner roztahal po bytě? Nemusíte si kupovat nůžky, také vám kapybara se vším pomůže.
        </AnimalText>
        <AnimalText>
          Rádi sportujete? Vědci z&nbsp;Masarykovy univerzity zjistili, že život s&nbsp;kapybarou motivuje k&nbsp;lepším běžeckým výkonům. Stometrovou trať uběhne zvíře rychlostí 35&nbsp;km/h (tj. o&nbsp;20&nbsp;km/h rychleji než průměrný člověk). Předežeňte svoji kapybaru a přibližte se tak rekordu Usaina Bolta!
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Naše kapybary z&nbsp;kvalitního voděodolného materiálu se bez vody neobejdou. Vysoko položené nozdry, oči a malá ouška umožňují co největší ponor bez omezení dýchání nad hladinou. Ohrozí-li vaše kapybary jaguár od sousedů, kapybary se pravděpodobně ponoří celé, ale nezoufejte! Při celkovém ponoru vydrží pod hladinou až pět minut, a to už si jaguár dávno najde jinou kořist. Voda slouží kapybarám také k&nbsp;relaxaci a poskytuje ideální místo k&nbsp;páření. Ne náhodou prý kapybaru v&nbsp;16.&nbsp;století církev označila za rybu, delikátní maso nabízené i&nbsp;v&nbsp;období půstu.
        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>Jak kapybary získáte?</Text>
        </AnimalText>
        <AnimalText>
          Zvíře si obstarejte v&nbsp;Jižní Americe. Při odchytu si dejte pozor na rozdíl v&nbsp;pohlaví. Samec má oproti samici na vrchu čumáku černou neosrstěnou pachovou žlázu, jíž vylučuje lepkavou tekutinu. Za chybné rozlišení pohlaví neručíme.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
         <AnimalText>
          Kapybary jsou zvyklé žít nejen ve dvojicích, ale i&nbsp;ve velkých stádech o&nbsp;10 až 30 jedincích. Dokážou se tak lépe bránit vetřelcům a matky si mohou navzájem kojit mláďata. Jsou zaznamenány i&nbsp;případy, kdy se v&nbsp;období sucha několik stád dočasně spojilo dohromady a vytvořilo tak jedno velké stádo o&nbsp;stovce jedinců. Nabídněte svým kapybarám společnost, aby si užily party u&nbsp;bazénu!
        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>Jak nenaletět překupníkovi?</Text>
        </AnimalText>
        <AnimalText>
          Všimněte si, že kapybara má:
        </AnimalText>
        <AnimalText>
          - zadní nohy o&nbsp;trochu delší než přední,
        </AnimalText>
        <AnimalText>
          - 4 prsty na předních nohách, 3 na zadních,
        </AnimalText>
        <AnimalText>
          - mezi prsty malé plovací blány,
        </AnimalText>
        <AnimalText>
          - konečky prstů opatřeny drápy, které vypadají jako kopýtka.
        </AnimalText>
        <AnimalText>
          Dále se ujistěte, že si kapybara nedokáže potravu přidržet předníma nohama jako ostatní hlodavci.
        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>UPOZORNĚNÍ</Text>
        </AnimalText>
        <AnimalText>
          Kapybaru nedoporučujeme chovat dohromady s&nbsp;jaguárem, ocelotem, pumou či anakondou.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
