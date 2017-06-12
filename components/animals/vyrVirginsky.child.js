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
        Milé děti, jsme výři. Nepleťte si nás prosím s&nbsp;víry nebo viry, my jsme celkem obyčejní ptáci. Jak jste si určitě všimly, jmenujeme se virginští. Možná víte, že Virginie je stát ve Spojených státech amerických, nenechte se ale zmást, my netroškaříme a žijeme v&nbsp;lesích v&nbsp;celé Americe – Severní, Střední i&nbsp;Jižní. Nás, výry virginské, poznáte od ostatních výrů podle toho, že máme hnědý obličej, pod ním bílou skvrnu, pak máme kousek kropenatý jako slepice. Na většině těla máme ale žlutohnědé vlnky, které trošičku připomínají tygry.
        </AnimalText>
        <AnimalText>
        Abychom neměli hlad, lovíme v&nbsp;lesích všemožná zvířata, hlavně různé myši. Někdy se nám podaří chytit veverku nebo netopýra, občas ulovíme i&nbsp;zajíce. Na lov se vydáváme v&nbsp;noci, máme totiž výborný sluch. Jak velká zvířata lovíme, závisí na tom, jak jsme sami velcí. Většinou máme kolem půl metru, ale čím dál bydlíme od rovníku, tím větší jsme. (A&nbsp;pokud nás chcete od sebe poznat tady v&nbsp;zoo, tak větší z&nbsp;nás dvou je samička. To je totiž u&nbsp;sov obvyklé.) Vážíme asi jeden a půl kila, což odpovídá pytlíku a půl mouky. Na naši velikost je to docela málo, ale musíme být lehcí, aby nás unesla křídla.
        </AnimalText>
        <AnimalText>
        Nakonec vám povíme něco o&nbsp;našich mláďatech. Vajíčka klademe většinou v&nbsp;lednu nebo únoru do opuštěných hnízd. Pak se o&nbsp;ně oba dva, maminka i&nbsp;tatínek, 5&nbsp;týdnů staráme, aby se nám vyklubala zdravá výřata.
        </AnimalText>
        <AnimalText>
        Tak, teď už o&nbsp;nás víte všechno podstatné. Proto se s&nbsp;vámi loučíme naším výřím "hu&nbsp;hu-hu-hú".
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
