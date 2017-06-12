import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/maraStepni/01.jpg'),
  require('../../images/animals/maraStepni/02.jpg'),
  require('../../images/animals/maraStepni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/maraStepni/01-thumb.jpg'),
  require('../../images/animals/maraStepni/02-thumb.jpg'),
  require('../../images/animals/maraStepni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj mláďátka,
        </AnimalText>
        <AnimalText>
          my jsme mary stepní, možná znáte naše příbuzné morčata, nebo dokonce kapybaru, největšího hlodavce vůbec. Tak velké my sice nejsme, ale šlapeme jí na paty. Na délku míváme asi sedmdesát centimetrů. Přestože jeden z&nbsp;nás sem přišel z&nbsp;německých Drážďan a dvě holky z&nbsp;Belgie, rozumíme si moc dobře.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Když se na nás pořádně podíváte, určitě vám připomeneme některé ze zvířátek, která znáte. Tělo máme podobné srnce, hlavu zase spíš králíkům. A představte si, když odpočíváme a vyhříváme se na sluníčku, často si leháme na přední jako kočky. Jsme šedohnědě zbarvené a máme dlouhé silné nohy se čtyřmi prsty na předních a třemi na zadních. Dokážeme se odrážet všema nohama najednou, takže je nám pořád do skoku. Navíc umíme běžet až skoro padesátikilometrovou rychlostí, takže bychom byly schopné dohonit i&nbsp;auto ve městě.
        </AnimalText>
        <AnimalText>
          Milujeme slunění a vůbec nám nevadí, když je s&nbsp;tím spojené sucho. Takové stepi a polopouště, jako jsou v&nbsp;jihoamerické Argentině, jsou pro nás ideální. Důležité je mít dostatek travin, keřů a plodů, které nám poskytnou zásobu vody.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jako rodiče jsme velmi zodpovědní. Maří mámy pro svá mláďata hloubí nory nebo si vypůjčí již vyhrabané (třeba po pásovcích). V&nbsp;norách pak přespává celá rodina a malé mary tam zůstávají, dokud nepřijde čas krmení. Ale nemyslete si, i&nbsp;v&nbsp;tom máme řád – na krmení jsou u&nbsp;nás pořadníky! Dávat svým mláďatům najíst může v&nbsp;jednu chvíli vždy jen jedna maminka, ostatní musejí počkat. Tatínek se mezitím stará o&nbsp;to, aby si všichni drželi odstup, a spolu s&nbsp;ostatními marami dává pozor, aby jeho milé nikdo neohrozil.
        </AnimalText>
        <AnimalText>
          A vyplácí se to, jen se podívejte, kolik nás tu je! Ale teď už nás omluvte, rodičovské povinnosti volají.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
