import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/orelBelohlavy/01.jpg'),
  require('../../images/animals/orelBelohlavy/02.jpg'),
  require('../../images/animals/orelBelohlavy/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/orelBelohlavy/01-thumb.jpg'),
  require('../../images/animals/orelBelohlavy/02-thumb.jpg'),
  require('../../images/animals/orelBelohlavy/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Ahoj děti, jsem orlice bělohlavá, narodila jsem se v&nbsp;březnu roku&nbsp;1988 v&nbsp;německém Frankfurtu a do Brna jsem přiletěla z&nbsp;liberecké zoo v&nbsp;červnu roku&nbsp;2014, když mi bylo 26&nbsp;let. O&nbsp;necelý rok později jsem snesla vajíčko, ze kterého se vylíhla moje dcerka. Žijeme spolu ve své vlastní voliéře, jakou byste jinde stěží našli, a většinu času trávíme ve velkém hnízdě. Prohlédnout si nás můžete, kdykoliv se vám zamane, a nemusíte se nás bát, jsme sice lovci, ale dovolujeme si jen na své chovatele.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        My orlové jsme velcí, až metr vysocí draví ptáci, když roztáhneme svá křídla, od levého k&nbsp;pravému můžeme měřit téměř 2,5&nbsp;metru, což je například výška medvěda grizzlyho vestoje. Jsme velmi dobří letci, když se do toho opřeme, dosahujeme rychlosti až 160&nbsp;kilometrů za hodinu. Za takovou rychlost už bychom mohli mít v&nbsp;Česku i&nbsp;problémy se zákonem. Ve volné přírodě nás můžete spatřit především poblíž větších jezer, rybníků a na mořských pobřežích, a to hlavně v&nbsp;Kanadě, Americe a na severu Mexika. Jsme známí jako národní pták Spojených států amerických a také jako symbol svobody. 
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Své druhové jméno – bělohlavý – jsme si vysloužili proto, že máme na hlavě a ocasu peří bílé, zatímco na zbytku těla hnědé. Naše mláďata však mají až do svých pěti let hnědé peří s&nbsp;bílými skvrnami. Zobák, pařáty a oči máme svítivě žluté. Naše pařáty jsou neopeřené a máme na nich krátké silné prsty s&nbsp;velkými drápy, kterými chytáme svoji kořist. Vážíme až 6&nbsp;kilogramů a dokážeme za letu unést potravu stejné váhy. 
        </AnimalText>
        <AnimalText>
        V lidské péči se dožíváme až 50&nbsp;let. Nejraději jíme ryby, ale klidně sníme cokoliv, co vypadá aspoň trochu k&nbsp;jídlu, proto o&nbsp;nás naši chovatelé říkají, že jsme tak trochu jako popelnice.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
