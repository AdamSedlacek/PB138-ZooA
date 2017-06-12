import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/orelVychodni/01.jpg'),
  require('../../images/animals/orelVychodni/02.jpg'),
  require('../../images/animals/orelVychodni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/orelVychodni/01-thumb.jpg'),
  require('../../images/animals/orelVychodni/02-thumb.jpg'),
  require('../../images/animals/orelVychodni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
       Orel východní neboli kamčatský je nejtěžším dravcem na světě a je také největším orlem planety. Nejen kvůli těžbě ropy a zemního plynu a s&nbsp;tím souvisejícím okolnostem patří k&nbsp;ohroženým druhům – je klasifikován jako zranitelný. Původem je z&nbsp;východní Asie. Hnízdí blízko u&nbsp;vodních toků na Kamčatském poloostrově a v&nbsp;pobřežních oblastech Ochotského moře. Na zimu se přesouvá na jih k&nbsp;Japonsku, kde se vyskytuje hlavně na ostrově Hokkaidó. 
        </AnimalText>
        <AnimalText>
        Samec i&nbsp;samice, které máme u&nbsp;nás v&nbsp;zoo, pochází z&nbsp;volné přírody. Orel je vysoký asi jeden metr a rozpětí křídel může mít až 2,5&nbsp;metru. 
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Samice orla bývá větší než samec a jednou ročně klade zelenobílá vejce. Obvykle snese do hnízda jedno až tři vejce. Hnízda si orli vytváří z&nbsp;různých větví, které přes sebe skládají. Vypadají tedy spíše jako hromady dřeva než jako malé misky, které vídáme u&nbsp;zpěvných ptáků v&nbsp;českých lesích. Svá hnízda si orli staví vysoko ve větvích, kam se dostane jen málo predátorů. Přirozeného nepřítele orli nemají, největším nebezpečím jsou pro jejich vajíčka ostatní orli. 
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Z&nbsp;vajíček se mláďata vylíhnou během dvou měsíců. Mají peří a zobáky šedé a samice i&nbsp;samec jim nosí potravu. Orli se živí masem – převážně rybami a vodními ptáky. Avšak ani mršinou nepohrdnou. Orli se starají o&nbsp;svá mláďata asi čtyři roky. Když dospějí, opustí hnízdo a začnou si žít svým vlastním orlím životem.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
