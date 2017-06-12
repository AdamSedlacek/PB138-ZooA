import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/vyrVirginsky/01.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/vyrVirginsky/01-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Výr virginský, latinsky <Text style={styles.italic}>Bubo virginianus</Text>, je jedním z&nbsp;ptáků, kteří se vyskytují téměř po celé Americe – Severní, Střední i&nbsp;Jižní. To je slušný výkon, vzhledem k&nbsp;tomu, že Virginii tvoří jeden pomenší trojúhelník země na východním pobřeží USA. 
        </AnimalText>
        <AnimalText>
        Průměrný výr virginský dorůstá výšky 56&nbsp;centimetrů, hmotnosti cca 1&nbsp;400&nbsp;gramů a průměrné rozpětí výřích křídel je 127&nbsp;centimetrů. Velikost výra závisí jednak na jeho pohlaví (samičky jsou větší), jednak na místě výskytu (čím dál od rovníku, tím větší pták). Co se vzhledu výrů týče, jejich tvář je hnědá, hrdlo bílé, hruď rezavá a na stranách skvrnitá a zbytek těla mají pokryt vlnkováním v&nbsp;barvě neurčitě hnědožluté.
        </AnimalText>
        <AnimalText>
        Výři se vyskytují v&nbsp;lesích, kde své volné chvíle tráví lovem všelijakých obratlovců, jako jsou myši, krysy, veverky, netopýři či zajíci. Při lovu se orientují sluchem. Navzdory tomu, jak je tento sluch výjimečný, jejich zvukové projevy se omezují na pouhé hu&nbsp;hu-hu-hú.
        </AnimalText>
        <AnimalText>
        V&nbsp;době hnízdění, která nastává v&nbsp;lednu či únoru, si virginští výři nestaví vlastní hnízda, nýbrž kladou vajíčka do hnízd opuštěných jiným ptactvem. Pokud nenajdou volné hnízdo, přivádějí své potomky na svět na skalních římsách. Na vejcích sedí tito výři pět týdnů, přičemž v&nbsp;péči se oba rodiče střídají.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
