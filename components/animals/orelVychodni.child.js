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
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Ahoj! Viděli jste nás už někde na obrázcích či v knihách? Vsadím se, že ne. O nás se moc nemluví, nejsme tak známí jako orli bělohlaví nebo sovice sněžní. A&nbsp;to jsme přitom největšími orly na světě! A&nbsp;tak jsme se rozhodli, že se vám představíme sami. 
        </AnimalText>
        <AnimalText>
        Ten menší z&nbsp;nás jsem já – táta orel. A&nbsp;ten větší? To je přece máma orlice. Když roztáhneme křídla, máme je tak dlouhá, jako jsou ruce dospělých lidí. Peří máme tmavohnědé, ale u&nbsp;křídel a u&nbsp;ocasu vidíte sněhově bílé skvrny, které jsou jako obláčky na tmavé obloze. Naše zobáky jsou jako velké banány, které jsou na konci ohnuté dolů. Možná proto to vypadá, že se stále mračíme. Ale to není pravda! 
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Ptáte se, jestli míváme taky děti? Samozřejmě, že ano. Máma orlice snese bílá vajíčka do hnízda, jako to znáte třeba u&nbsp;slepic či jiných ptáků. Své hnízdo míváme vysoko, vysoko ve větvích. To proto, aby nám jej nějaký zvědavec neokukoval. Máma na vajíčkách sedí a zahřívá je, dokud se z&nbsp;nich nevylíhnou malí orli. 
        </AnimalText>
        <AnimalText>
        Malý orel má peří načepýřené a je celý šedý. Dokonce i&nbsp;zobáček má šedý. Já i&nbsp;máma mu sháníme potravu a krmíme ho. Když oslaví čtvrté, páté narozeniny, stává se dospělým. 
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        A&nbsp;víte někdo, co my orli jíme? Že by rohlík s&nbsp;máslem a marmeládou? Nebo řízek s&nbsp;bramborem? To ne. My si pochutnáváme na jiných věcech. 
        </AnimalText>
        <AnimalText>
        Jsme původem z&nbsp;Asie. Nachází se tam hodně řek a jezer, ve kterých najdeme obrovské množství ryb. Chuť na ryby máme prostě od narození. A&nbsp;když zrovna nemáme ryby, spokojíme se s&nbsp;jakýmkoliv jiným masem, ke kterému se dostaneme.  
        </AnimalText>
        <AnimalText>
        Doufáme, že teď už byste nás poznali, kdybyste nás někde znovu viděli. Tak jak říkáme my orli: Křídlu zdar! 
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
