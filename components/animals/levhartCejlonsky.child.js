import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/levhartCejlonsky/01.jpg'),
  require('../../images/animals/levhartCejlonsky/02.jpg'),
  require('../../images/animals/levhartCejlonsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/levhartCejlonsky/01-thumb.jpg'),
  require('../../images/animals/levhartCejlonsky/02-thumb.jpg'),
  require('../../images/animals/levhartCejlonsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj kamarádi,
        </AnimalText>
        <AnimalText>
          jmenuji se Daan a jsem levhart cejlonský. Hned na úvod vám musím říct, že já a moje kamarádka Nayana patříme k&nbsp;jednomu z&nbsp;největších poddruhů levhartů. Na Srí Lance, odkud pocházíme, jsme dokonce největší kočkovité šelmy. Přesto je náš poddruh ohrožený a počet našich kamarádů stále klesá. V&nbsp;přírodě se dožíváme 10&nbsp;let, v&nbsp;zoo až 23&nbsp;roků.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Naši kluci váží kolem 60&nbsp;kilogramů a holky okolo 30&nbsp;kilogramů. Proto můžete mě a Nayanu snadno rozlišit. Náš ocásek může mít až jeden metr. Omotal by vás celé kolem dokola jako šála. A je krásně zbarvený, stejně jako zbytek našeho kožíšku. Celý ho máme posetý skvrnami, abychom se mohli v&nbsp;divočině schovávat a nikdo nás neviděl. Každý z&nbsp;nás má díky genetice skvrny trošku jiné. Tak jako vy máte třeba vlasy po tatínkovi a oči po mamince, my dědíme po svých rodičích skvrny.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Oplýváme výborným sluchem, zrakem i&nbsp;čichem. Umíme moc dobře plavat, vyskočíme až nad hlavy vašich rodičů a běhat dokážeme stejně rychle jako auto jedoucí v&nbsp;obci. Díky tomu jsme skvělí lovci – dokážeme ulovit nejen malé ptáky a plazy, ale i&nbsp;větší zvířata, jako jsou třeba jelen, divoké prase, nebo výjimečně dokonce i&nbsp;dospělý buvol. Nejraději lovíme v&nbsp;noci.
        </AnimalText>
        <AnimalText>
          Jsme samotáři, proto jsme tady ve výběhu jen my dva, to abychom se moc nehádali.
        </AnimalText>
        <AnimalText>
          Mějte se pěkně a přijďte se na nás zase podívat.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
