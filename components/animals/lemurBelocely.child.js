import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/lemurBelocely/01.jpg'),
  require('../../images/animals/lemurBelocely/02.jpg'),
  require('../../images/animals/lemurBelocely/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/lemurBelocely/01-thumb.jpg'),
  require('../../images/animals/lemurBelocely/02-thumb.jpg'),
  require('../../images/animals/lemurBelocely/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Milé děti,
        </AnimalText>
        <AnimalText>
          seznamte se s&nbsp;Karlíkem, naším lemurem běločelým, který v&nbsp;zoo žije od roku 2000. Tento malý neposeda pochází z&nbsp;Madagaskaru, velkého ostrova, který leží až u&nbsp;jihovýchodu Afriky.
        </AnimalText>
        <AnimalText>
          Možná si vzpomínáte na pohádku Madagaskar, ve které se to různými druhy lemurů jen hemžilo. Až ji budou příště zase dávat v&nbsp;televizi, pozorně sledujte, jestli tam třeba nezahlédnete i&nbsp;lemury běločelé. Poznáte je podle hnědošedého zbarvení srsti. Lemuří kluci mají navíc i&nbsp;sněhově bíle zbarvené bříško a hlavu.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Ovoce, listy, květy, větvičky, hmyz – tak vypadá běžný jídelníček lemurů. Většinu dne tráví skotačením v&nbsp;korunách stromů. Na zem slézají jen občas, především kvůli shánění potravy.
        </AnimalText>
        <AnimalText>
          Lemuří samičky jsou březí čtyři měsíce. Po narození se malé „lemuřátko“ neustále drží na břiše své maminky. Jakmile trochu povyroste, máma jej vysadí na hřbet, kde ho dál přenáší, dokud se nenaučí samo chodit.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Zajímavé je, že jméno „lemur“ pochází ze staré římské mytologie a znamená noční duch. Že vám toto roztomilé zvířátko ducha ani trochu nepřipomíná? To jste ho ovšem neviděli v noci! Lemurům totiž ve tmě svítí oči, a navíc občas vydávají děsivé zvuky připomínající pláč. Ale nebojte se, lemuři jsou ve skutečnosti plaší a zcela neškodní.
        </AnimalText>
        <AnimalText>
          Nezapomeňte, že v&nbsp;naší zoo najdete kromě lemura běločelého i&nbsp;další dva druhy – lemury černé a známější lemury kata. Pokud jste je ještě nebyli pozdravit, tak to honem napravte, ať jim to není líto.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
