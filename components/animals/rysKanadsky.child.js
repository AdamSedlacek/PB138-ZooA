import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/rysKanadsky/01.jpg'),
  require('../../images/animals/rysKanadsky/02.jpg'),
  require('../../images/animals/rysKanadsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/rysKanadsky/01-thumb.jpg'),
  require('../../images/animals/rysKanadsky/02-thumb.jpg'),
  require('../../images/animals/rysKanadsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Rozhlédni se, vidíš všude kolem ty kopce a stromy? Vypadá to tu jako na místě, odkud pocházím. Kopce, kameny, listnaté a jehličnaté stromy – taková krajina se vyskytuje na severu zeměkoule, konkrétně hlavně v&nbsp;Kanadě, Spojených státech amerických či na Aljašce, kde je velká zima. Naštěstí mě můj kožíšek dostatečně chrání před mrazem, myslím, že hlavně díky němu vypadám jako obrovská šelma. Ve skutečnosti se ale pod hromadou chlupů skrývá ještě menší kočka, než je můj známější příbuzný, rys ostrovid. Mě nazývají podle místa, kde nás najdeš nejvíce, a to je v&nbsp;Kanadě – rys kanadský. Tedy, já jsem vlastně rysí slečna (ryska, že?). Ahoj, těší mě!
        </AnimalText>
        <AnimalText>
        Na rozdíl od rysa ostrovida mám delší nejen štětičky na uších, ale i&nbsp;licousy, to jsou ty bílé vousky na tvářích. Také nás můžeš rozeznat podle skvrn. U&nbsp;mě nejsou téměř vidět. Zvláštní je, že v&nbsp;létě je má srst šedohnědá, někdy i&nbsp;trošku rezavá. V&nbsp;zimě mi kožich zhoustne o&nbsp;další vrstvu, která má světlou barvu, takže to vypadá, jako by malinko zesvětlal.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Jen si protáhnu tlapičky a hned budeme pokračovat. A&nbsp;to se mi děti občas diví, proč mám tak velké tlapky. Mám chuť jim odpovědět, že velké tlapky mám proto, abych je lépe chytla, a velké uši proto, abych je lépe slyšela, ale mohlo by je potom napadnout šťouchat mi do bříška a hledat Karkulku. To tak. To byl vlk, já jsem rys. K&nbsp;obědu mám raději zajíce. Také ti tak chutnají? Tlapky mám tak vyvinuté, abych se mohla stejně lehce pohybovat jak v&nbsp;hlubokém sněhu, tak v&nbsp;trávě. Jako rysí slečně mi na tom samozřejmě záleží. 
        </AnimalText>
        <AnimalText>
        Abych pokračovala. Tady v&nbsp;zoo je tu se mnou ještě jeden rys, takže si mám s&nbsp;kým hrát. Povídal, že pochází z&nbsp;Ostravy. Já jsem cizinka ze Spojených států amerických.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Otázka pro zvídavé hlavičky: jak se správně nazývají členové rysí rodiny? Vyber z&nbsp;nabídky. 
        </AnimalText>
        <AnimalText>
        Tatínek je ... (rysák, rys, rysí sameček, rysí tatínek, rysek, rýs, rysic) 
        </AnimalText>
        <AnimalText>
        Maminka je ... (rysačka, rys, ryska, rysí samička, rysí slečna, rysí maminka, ryska, rýsa, rysice) 
        </AnimalText>
        <AnimalText>
        Děťátko je ... (rysátko, rys, rýše, rysí děťátko, rysáče, rýsátko, rýsáče, rysí mládě)
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
