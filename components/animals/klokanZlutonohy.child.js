import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/klokanZlutonohy/01.jpg'),
  require('../../images/animals/klokanZlutonohy/02.jpg'),
  require('../../images/animals/klokanZlutonohy/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/klokanZlutonohy/01-thumb.jpg'),
  require('../../images/animals/klokanZlutonohy/02-thumb.jpg'),
  require('../../images/animals/klokanZlutonohy/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Zdravím, človíčata,
        </AnimalText>
        <AnimalText>
          jsem tu jen na skok. Jmenuji se Moonie a stejně jako moje starší kamarádka Corowa jsem do Brna přijela v&nbsp;roce 2015 z&nbsp;francouzské zoo v&nbsp;Mulhouse. V&nbsp;květnu 2016 se k&nbsp;nám připojil i&nbsp;Thutamba, tehdy roční sameček z Bristolu, města v Anglii. Říkají nám klokani žlutonozí, nejspíš proto, že máme přední stranu nohou žlutočerveně zbarvenou. Podobně barevné jsou i&nbsp;naše ocasy, ale mají na sobě navíc tmavé pruhy. Ocas je naší největší chloubou, může být dokonce delší než celé naše tělo. Nemáme ho ale jen na ozdobu, pomáhá nám udržovat rovnováhu. Hlavně při doskoku je to neocenitelný pomocník. A když nám zrovna není do skoku, složíme si ho pěkně za záda, a proto nám vůbec nepřekáží.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />        
        <AnimalText>
          Jako každý správný klokan původně pocházíme z&nbsp;Austrálie, hlavně z&nbsp;její jižní a střední části. Řadíme se ke klokanům skalním, jelikož vyhledáváme kamenité svahy a prudké srázy. Na život v&nbsp;takových podmínkách jsme dobře připraveni. Na zadních nohách máme drsné polštářky porostlé hustými chlupy, aby nám to neklouzalo, a dráp čtvrtého prstu máme kratší než ostatní klokani. Dokážeme dokonce i&nbsp;vylézt na strom a při té příležitosti si pochutnat na listech nebo pupenech, většinou si ale vystačíme s&nbsp;obyčejnou trávou.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />        
        <AnimalText>
          Když o&nbsp;tom tak přemýšlím, asi si skočím pro něco k&nbsp;snědku. Tak se mějte!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
