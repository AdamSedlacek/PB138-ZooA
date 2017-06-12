import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/husickaVdovka/01.jpg'),
  require('../../images/animals/husickaVdovka/02.jpg'),
  require('../../images/animals/husickaVdovka/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/husickaVdovka/01-thumb.jpg'),
  require('../../images/animals/husickaVdovka/02-thumb.jpg'),
  require('../../images/animals/husickaVdovka/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Dva samečci a jedna samička husičky vdovky se vylíhli v&nbsp;roce 2014 v&nbsp;zoo v&nbsp;Berlíně. V&nbsp;tom samém roce dorazili k&nbsp;nám.
        </AnimalText>
        <AnimalText>
          Husička vdovka (lat. <Text style={styles.italic}>Dendrocygna viduata</Text>) se vyskytuje v tropických oblastech Afriky a Jižní Ameriky. Jak můžete vidět, i&nbsp;tady v&nbsp;zoo je umístěná v&nbsp;Africké vesnici společně s&nbsp;plameňáky.
        </AnimalText>
        <AnimalText>
          Husička, stejně jako všechny její příbuzné druhy, miluje vodu. Zdržuje se tedy především u bažin, jezer či větších řek. Tyto oblasti jí zároveň poskytují dostatek ochrany v&nbsp;podobě vysoké trávy. Dokáže být velmi společenská a v&nbsp;místech, kde je dostatečné množství potravy, se může opakovaně vyskytovat až několik tisíc jedinců.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Husička vdovka má hnízdo nejčastěji jako prostý důlek v&nbsp;zemi, který je nedaleko vody a zároveň je skrytý hustou vegetací.
        </AnimalText>
        <AnimalText>
          Nejen vzhledem je husička vdovka velmi odlišná od nám dobře známých hus – patří totiž do jiné podčeledi a k&nbsp;husám má stejně daleko jako třeba ke kachnám (v&nbsp;angličtině jí říkají <Text style={styles.italic}>duck</Text>). Má černobílou hlavu. Peří na zádech a křídlech jí přechází od tmavě hnědé do černé barvy. Spodní strana těla je černá stejně jako ocas. Ten je vzhledem k&nbsp;velikosti těla velmi krátký a šedomodré nohy jsou naproti tomu nezvykle dlouhé. Sameček i&nbsp;samička se od sebe vzhledově ani velikostně neliší, avšak mláďata se malinko různí od rodičů svou méně výrazně zbarvenou hlavou.
        </AnimalText>
        <AnimalText>
          Husička vdovka je všežravá a často se potápí, aby si ulovila svoji potravu. Strava se skládá především z&nbsp;vodního hmyzu, vodních měkkýšů, rostlin a semen.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Hnízdění může probíhat jak na zemi v&nbsp;ukrytém důlku, tak na stromě. Samička snese 4–13 &nbsp;vajec a skoro měsíc trvá, než se housata vylíhnou. V&nbsp;sezení se střídají oba rodiče. V&nbsp;této době hnízdění je sameček jediný, kdo se k&nbsp;samičce a vejcím může přiblížit, jinak je samička ke svému okolí značně agresivní a odhání i&nbsp;zástupce svého druhu. Po vyhnízdění přichází perioda, kdy dospělí ptáci pelichají a ztrácí schopnost létat. Jsou tak zranitelnější a musí se více skrývat v&nbsp;husté vegetaci.
        </AnimalText>
        <AnimalText>
          Pozoruhodné je, že se zdá, jako by měla husička kolem hlavy uvázaný černý šátek. Patrně z&nbsp;toho důvodu se jí říká vdovka. Naproti tomu její anglické jméno – <Text style={styles.italic}>white-faced whistling duck</Text> – ji vystihuje ze zcela jiného úhlu pohledu. Zmiňuje její typicky bílou tvář, ale také nám říká, že vydává nápadné hvízdavé zvuky. Obě její jména o&nbsp;ní mnohé napovídají.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
