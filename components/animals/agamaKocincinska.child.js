import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/agamaKocincinska/01.jpg'),
  require('../../images/animals/agamaKocincinska/02.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/agamaKocincinska/01-thumb.jpg'),
  require('../../images/animals/agamaKocincinska/02-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj děti! Jsem bazilišek a chtěl bych vám povědět něco o&nbsp;svých kamarádech, se kterými tady v&nbsp;zoo bydlím. Jsou to agamy kočinčinské, jeden sameček agamák a dvě samičky. (Samečka poznáte podle toho, že je barevnější, má na hřbetě větší hřeben a má žlutooranžově zbarvený spodek krku. Jinak jsou všechny agamy svrchu zelené, trochu do hněda a mají světlá bříška.)
        </AnimalText>
        <AnimalText>
          Agamy měří zhruba tři čtvrtě metru – takže jsou o&nbsp;něco delší než dvě dlouhá pravítka. Možná si říkáte, že až tak dlouhé nevypadají. To proto, že mají dlouhatánský ocas. Hodí se jim, když lezou po stromech nebo když plavou. Cože? Že jste nevěděly, že agamy umí plavat? No jéje! Agamy jsou ve vodě jako doma, a ještě se umí skvěle potápět. A aby toho nebylo málo, umí agamy taky utíkat jen po zadních nohou. A jak rychle!
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Pokud si teď říkáte, že vás na agamách už nic nepřekvapí, jste na omylu: agamy mají tři oči! Dvě normální, těch jste si určitě všimly, a mezi nimi mají takový puntík, kterým vnímají jen světlo. A to tak dobře, že se dokážou probudit, když nad nimi letí dravec, který by je mohl chtít sníst. Agamy samotné se krmí hlavně hmyzem. Občas si pošmáknou i&nbsp;na nějaké rybce nebo myšce. Zato zelenina jim moc nevoní.
        </AnimalText>
        <AnimalText>
          Jak jsem říkal na začátku, tyhle agamy jsou z&nbsp;Kočinčíny, to je v&nbsp;jihovýchodní Asii. Agamy totiž mají rády teplíčko; potřebují ho, aby mohly naklást vajíčka, která zahrabávají do země. A když je dost teplo, vylíhnou se z&nbsp;vajíček za nějaké dva měsíce malé agamky.
        </AnimalText>
        <AnimalText>
          No a na konec, připomínají vám agamy trochu jedno zlobivé pohádkové zvíře? Nejste samy, Angličané říkají agamám čínský vodní drak.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
