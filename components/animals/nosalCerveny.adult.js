import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/nosalCerveny/01.jpg'),
  require('../../images/animals/nosalCerveny/02.jpg'),
  require('../../images/animals/nosalCerveny/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/nosalCerveny/01-thumb.jpg'),
  require('../../images/animals/nosalCerveny/02-thumb.jpg'),
  require('../../images/animals/nosalCerveny/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Nosál červený (lat. <Text style={styles.italic}>Nasua nasua</Text>) je jihoamerická šelma z&nbsp;čeledi medvídkovitých, která se vyznačuje především výborným čichem. V&nbsp;naší zoo najdete těchto zvířátek hned několik. Nejmladší ze samečků se jmenuje Rudolf, nejstarší samičku pak chovatelé oslovují Zuzko.
        </AnimalText>
        <AnimalText>
          Tvrdé životní podmínky deštných pralesů a dalších míst, v&nbsp;nichž nosálové žijí, mají za následek nadprůměrně vyvinuté smysly i&nbsp;inteligenci těchto malých šelem. Jak jsme již naznačili, čich je u&nbsp;nosálů vyvinutý nejlépe. Rypáčkovitý čenich dokážou nosálové ohýbat až do úhlu 45&nbsp;°, a jsou tak schopni prošmejdit kdekteré zákoutí a vyčenichat si i&nbsp;dobře skrytou potravu. Tou mohou být různé plody, mláďata i&nbsp;vajíčka ptáků a malí i&nbsp;větší hlodavci. Nalezenou kořist pak nosálové dokážou vyhrabat i&nbsp;z&nbsp;úzkých nor díky silným drápům na předních tlapkách.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Vedle čichu mají nosálové také výborný smysl pro rovnováhu. Díky němu umí dobře šplhat po stromech, na nichž také občas tráví své noci a hledají potravu. Zajímavá je i&nbsp;jejich vysoká inteligence. Ta je zřejmě podobně jako zostřené smysly též vynucena podmínkami, které panují v přirozeném habitatu nosálů. Pro svou bystrost byli nosálové velmi oblíbení už u&nbsp;původních jihoamerických kmenů, které si ochočovaly povětšinou samice.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Samice jsou na rozdíl od samců velmi družné a žijí ve skupinách až o&nbsp;30&nbsp;jedincích. Samci jsou po dovršení dvou let života ze skupiny vyhnáni a od té doby žijí samotářským životem. K&nbsp;samičkám se mohou přiblížit pouze v&nbsp;době páření, která je pro všechny samice smečky ve stejnou dobu. Samičky se obvykle páří s&nbsp;více než jedním samcem a po 77&nbsp;dnech porodí až sedm mláďat, o&nbsp;která se pak starají o&nbsp;samotě mimo svou mateřskou skupinu, k&nbsp;níž se po čase zase vrátí. Obecně mají samice tendenci zůstávat u&nbsp;své skupiny po celý život, naproti tomu samci se oddělují a žijí nezávisle.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
