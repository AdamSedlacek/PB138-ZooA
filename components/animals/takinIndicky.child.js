import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/takinIndicky/01.jpg'),
  require('../../images/animals/takinIndicky/02.jpg'),
  require('../../images/animals/takinIndicky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/takinIndicky/01-thumb.jpg'),
  require('../../images/animals/takinIndicky/02-thumb.jpg'),
  require('../../images/animals/takinIndicky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Takin indický je velmi pozoruhodné zvíře. Podobá se totiž hned několika zvířatům najednou. Jeho hlava připomíná ovci, naopak jeho široké, zavalité tělo se podobá bizonovi, avšak nenechme se zmást. Svojí hbitostí a obratností se vyrovná i&nbsp;kamzíkovi. Klenuté, tlusté a špičaté rohy se podobají rohům pakoně a na vrcholku hlavy srůstají. Mají je jak samci, tak samice. Takin má krátké, podsadité nohy, které zakončují široká kopyta. Ta mu pomáhají pohybovat se po nerovném terénu. Jeho tělo produkuje maz, který je pro něj velmi užitečný, protože ho chrání proti vlhkosti, mlhám a dešti. Takin vidí lépe do stran než rovně a je spíše dalekozraký. Má také dosti krátký ocas – je dokonce kratší než jeho rohy.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Takin je býložravec, což znamená, že spásá různé listy, větvičky a trávu. Má ve zvyku pást se brzy ráno a později odpoledne. Někdy se postaví i&nbsp;na zadní, aby dosáhl pro ty nejšťavnatější lístečky stromu.
        </AnimalText>
        <AnimalText>
          Samici takina indického se obvykle rodí jen jedno mládě. Je ze začátku tmavší než jeho rodiče, avšak jeho srst po jednom měsíci začne světlat. Mládě je do tří dnů od narození schopné chodit a následovat svoji matku. Do půl roku mu začnou růst rohy.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          I&nbsp;když takin může působit těžce a nemotorně, dokáže se velmi obratně pohybovat po skalách a jiných nerovnostech. Zvládne dokonce utíkat až překvapivě vysokou rychlostí – ovšem jen na krátké vzdálenosti.
        </AnimalText>
        <AnimalText>
          Takin obvykle žije v&nbsp;menších stádech a nejinak je tomu i&nbsp;v&nbsp;brněnské zoo.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
