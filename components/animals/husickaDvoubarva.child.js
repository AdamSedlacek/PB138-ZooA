import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/husickaDvoubarva/01.jpg'),
  require('../../images/animals/husickaDvoubarva/02.jpg'),
  require('../../images/animals/husickaDvoubarva/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/husickaDvoubarva/01-thumb.jpg'),
  require('../../images/animals/husickaDvoubarva/02-thumb.jpg'),
  require('../../images/animals/husickaDvoubarva/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj kamarádi,
        </AnimalText>
        <AnimalText>
          jmenuji se husička dvoubarvá. Dvoubarvá proto, že mám nejvíc hnědého a černého peří, ale určitě dokážete na mém těle objevit i&nbsp;jinou barvu. Třeba zobák a nohy mám šedé. Někdy mi říkají husička bažinná, protože se s&nbsp;kamarády rádi bahníme v&nbsp;jezerech, řekách i&nbsp;bažinách, především v&nbsp;Americe. Držíme se hlavně u&nbsp;břehu, nejčastěji v&nbsp;hustém rákosí, kde si vytváříme hnízda. Pokud je to ale nutné, využijeme i&nbsp;velké dutiny stromů nebo opuštěná hnízda jiných ptáků. Jsme trochu lenoši, ale komu by se chtělo stavět hnízdo, když už ho někdo udělal?
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Stejně jsme ale nejraději u&nbsp;velké vodní plochy, ulovíme si tam něco na zub. Taková rostlinka nebo malý vodní živočich, to je pochutina! A že toho sníme, většinou nás totiž zahlédnete v&nbsp;několikatisícových hejnech. Ale nejsme jen tak obyčejné husičky, my jme totiž velké seriálové herečky a hvězdy. No opravdu, zahrály jsme si v&nbsp;seriálu Hvězdná brána – video, kde nás Hank Landry dokonce imituje, najdete na internetu. Klidně se hned podívejte.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Tak se mějte krásně, příště spolu můžeme třeba natočit film.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
