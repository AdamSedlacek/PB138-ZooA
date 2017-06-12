import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/kozorozecSibirsky/01.jpg'),
  require('../../images/animals/kozorozecSibirsky/02.jpg'),
  require('../../images/animals/kozorozecSibirsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/kozorozecSibirsky/01-thumb.jpg'),
  require('../../images/animals/kozorozecSibirsky/02-thumb.jpg'),
  require('../../images/animals/kozorozecSibirsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          A heleme se, lidské mládě! Neboj se a pojď k&nbsp;nám blíž, rádi bychom se ti představili. Říkají nám kozorožci sibiřští a jsme jedním z&nbsp;druhů divokých koz. Bystré hlavičky už možná z&nbsp;našeho jména rozluštily, že se vyskytujeme na Sibiři – to je oblast v&nbsp;Rusku, kde je opravdu ukrutná zima. Nám to ale nevadí, před chladem nás chrání naše teplá srst. Mimo Sibiř je naší domovinou například Čína, Mongolsko, Afghánistán, dokonce i severní Indie. 
        </AnimalText>
        <AnimalText>
          Jsme k&nbsp;vidění především vysoko v&nbsp;horách a na loukách. Už z&nbsp;dálky nás poznáš podle velkých rohů, které jsou naší největší chloubou. Až si je budeš prohlížet zblízka, všimni si, jaké na nich máme ozdobné prstence. Podle nich se dá poznat, jak jsme staří.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Hlavním znakem, podle kterého můžeš rozeznat samečka od samičky, je právě velikost rohů. Už asi tušíš, že samci mívají rohy mnohem delší. Podobné je to i&nbsp;s&nbsp;délkou naší bradky, tu samičky často nemají vůbec.
        </AnimalText>
        <AnimalText>
          Stejně jako ostatní kozy jsme i&nbsp;my býložravci. Máme rádi trávu, byliny, mechy… no zkrátka vše, co je zelené a roste v&nbsp;horách. Také čas od času lížeme sůl, která nám do těla dodává důležité minerály.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          V&nbsp;našem brněnském stádečku se malí kozorožci rodí každý rok na jaře. Mláďátka přicházejí na svět bez rohů, růst jim ale začnou velice rychle, většinou už tři týdny po narození. Dokud jsou ještě malí, žijí naši potomci ve stádech se svými maminkami. Na život dospěláka jsou připraveni ve dvou letech.
        </AnimalText>
        <AnimalText>
          To je z&nbsp;dnešní lekce vše. Doufáme, že jsme tě zaujali a že ses dozvěděl něco nového. Budeme se na tebe těšit zase příště!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
