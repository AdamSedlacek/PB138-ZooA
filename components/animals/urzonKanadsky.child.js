import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/urzonKanadsky/01.jpg'),
  require('../../images/animals/urzonKanadsky/02.jpg'),
  require('../../images/animals/urzonKanadsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/urzonKanadsky/01-thumb.jpg'),
  require('../../images/animals/urzonKanadsky/02-thumb.jpg'),
  require('../../images/animals/urzonKanadsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj děti, my jsme urzoni kanadští. Že nás neznáte? Rádi se vám představíme. Já se jmenuji Bodláček a žiji se svojí kamarádkou Liarou. Pobývám zde od roku 2014 a Liara od roku 2015, kdy byla přivezena z&nbsp;Nizozemska, které je odsud dost daleko. V&nbsp;červenci 2016 se nám narodilo první mládě. Je to kluk jak buk a ty bodliny – celý táta!
        </AnimalText>
        <AnimalText>
          Jsme podobní našemu vzdálenému příbuznému – dikobrazovi. Oba dva máme tělo pokryté ostny, ovšem žijeme na jiných kontinentech a máme rozdílný způsob života.
        </AnimalText>
        <AnimalText>
          Já i&nbsp;Liara máme robustní postavu a vážíme obvykle 4&nbsp;až 7&nbsp;kilogramů. Někteří z&nbsp;nás však mohou vážit až 18&nbsp;kilogramů. Svrchní část našich těl je pokryta dutými ostny, které slouží jako ochrana před predátory. Horní část těla máme obvykle tmavě hnědou až černou a na spodní jsou tmavé chlupy bez ostnů. Ocas je krátký a silný. Na tlapkách máme vpředu čtyři prsty, vzadu pět a na nich mohutné zahnuté drápy, které nám pomáhají v&nbsp;lezení po stromech.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Obýváme lesy Severní Ameriky, která je daleko za mořem. Nejraději jsme ve smíšených lesích, ale nevadí nám jehličnaté ani listnaté. Zdržujeme se především v&nbsp;korunách stromů, kde je nám úplně nejlépe. V&nbsp;nich si dokážeme vytvořit jednoduché obydlí. Skrýše si také budujeme v&nbsp;pařezech, dutých stromech nebo třeba v&nbsp;půdních rozsedlinách. V&nbsp;korunách stromů lezeme pomalu, ale velmi jistě. Neskáčeme z&nbsp;větve na větev, to dělají jenom opice a veverky. Pohybujeme se ovšem i&nbsp;na zemi, kde míváme několik úkrytů, a jsme také výbornými plavci.
        </AnimalText>
        <AnimalText>
          Živíme se především listím, výhonky a různými kořínky. Na zemi pátráme po kostech a paroží, které ohlodáváme, abychom si doplnili minerály v&nbsp;těle. Za potravou na zem se vydáváme pouze v&nbsp;noci. To dá rozum, když jsme noční tvorové, ne?
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Naše mláďata jsou dobře vyvinutá, váží přibližně 340&nbsp;až 640&nbsp;gramů. Kůži mají pokrytou dlouhými černými chlupy a měkkými krátkými ostny, které do několika hodin od narození ztvrdnou. Téměř ihned po narození jsou naše mláďata schopna následovat svoji maminku. Ve věku dvou dnů už lezou po stromech.
        </AnimalText>
        <AnimalText>
          Jestliže nás nevidíte, budeme nejspíše ve svých úkrytech. Podívali jste se pořádně?
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
