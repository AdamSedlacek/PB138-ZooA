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
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj děti,
        </AnimalText>
        <AnimalText>
          my jsme nosálové červení. Že nás neznáte? Rádi se vám představíme. Já jsem Hubert a žiji zde se svou kamarádkou Zuzkou, kamarádem Rudolfem a dalšími.
        </AnimalText>
        <AnimalText>
          Patříme do čeledi medvídkovitých šelem. Jsou pro nás typické kroužky na ocase a tmavá maska na obličeji. Vážíme obvykle 3&nbsp;až 7&nbsp;kilogramů a dorůstáme délky 35&nbsp;až 89&nbsp;centimetrů. Naše těla jsou pokryta hustou zlatavou srstí, která může postupně přecházet v&nbsp;tmavě hnědou, na koncích prstů až černou. Na předních a zadních končetinách máme pět prstů se silnými drápy, které nám pomáhají v&nbsp;lezení a vyhrabávání potravy ze země. Prsty máme částečně srostlé. Ocas nám slouží k&nbsp;udržování rovnováhy, když se pohybujeme v&nbsp;korunách stromů, a měří téměř tolik, co naše tělo. Nejzajímavější na nás je dlouhý nos, díky kterému jsme dostali své jméno. Je velmi pohyblivý a můžeme s&nbsp;ním otáčet do stran v úhlu 45&nbsp;stupňů. Neustále jím pátráme kolem sebe a strkáme ho všude možně. Jsme prostě zvídaví. A taky máme skvělý čich, což je s&nbsp;takovým nosem skoro samozřejmé.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Obýváme deštné a suché (opadavé) tropické lesy a savany v&nbsp;Jižní Americe, především v&nbsp;oblastech Venezuely, Kolumbie, Argentiny a Brazílie, tedy v&nbsp;zemích daleko za mořem. Skvěle šplháme, na stromech si hledáme nejen potravu, ale také tu nocujeme. Bydlíme v&nbsp;dutinách stromů nebo si vyhrabeme noru v&nbsp;půdě v&nbsp;okolí lidských obydlí. A čím se živíme? Jsme všežravci, nejvíce si ovšem pochutnáme na hmyzu, ptačích vejcích, plodech, půdních živočiších a také na ovoci a zelenině.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Naše mláďata žijí po narození v&nbsp;hnízdě na stromě nebo v&nbsp;jeho dutině, matka je kojí asi měsíc. Po šesti týdnech od narození se mláďata připojují k&nbsp;tlupě. Po několika týdnech jsou schopna šplhat po stromech. Mláďata jsou v&nbsp;úzkém kontaktu s&nbsp;rodiči minimálně jeden rok, aby se naučila lovu a sběru potravy. Po tuto dobu také spí v blízkosti svých matek, aby se nestala snadnou kořistí predátorů.
        </AnimalText>
        <AnimalText>
          Jestliže nás nevidíte, naleznete nás nejspíše v&nbsp;korunách stromů nebo v&nbsp;našich úkrytech. Podívali jste se pořádně?
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
