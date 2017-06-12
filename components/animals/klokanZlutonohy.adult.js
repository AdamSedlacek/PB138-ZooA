import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/klokanZlutonohy/01.jpg'),
  require('../../images/animals/klokanZlutonohy/02.jpg'),
  require('../../images/animals/klokanZlutonohy/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/klokanZlutonohy/01-thumb.jpg'),
  require('../../images/animals/klokanZlutonohy/02-thumb.jpg'),
  require('../../images/animals/klokanZlutonohy/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          „Ahoj, já jsem Moonie a povím vám něco o&nbsp;našem druhu.“
        </AnimalText>
        <AnimalText>
          „A já jsem Corowa.“
        </AnimalText>
        <AnimalText>
          „Jo, ale neskákej mi do řeči. Říkají nám klokani žlutonozí (nebo taky <Text style={styles.italic}>Petrogale xanthopus</Text>), nejspíš proto, že srst na přední straně našich končetin je žlutočerveně zbarvena. Osobně si myslím, že to je ve výsledku oranžová, ale mě se samozřejmě nikdo neptal.“
        </AnimalText>
        <AnimalText>
          „Podobnou barvu mají i&nbsp;naše ocasy, na to nezapomeň.“
        </AnimalText>
        <AnimalText>
          „Můžeš toho nechat? Myslíš, že když jsi o&nbsp;tři roky starší, tak si na mě můžeš vyskakovat? Já bych k&nbsp;tomu došla. Jak říkala tady Corowa, naše ocasy mají podobnou barvu, navíc je ale zdobí tmavé pruhy.“
        </AnimalText>
        <AnimalText>
          „To proto, že se náš prapradědeček šikovně otřel o&nbsp;čerstvě natřený plot.“
        </AnimalText>
        <AnimalText>
          „Ale no tak, nech si těch fórů.“
        </AnimalText>
        <AnimalText>
          „Nesmíš to tak prožívat. Zkus to trochu odlehčeně, s&nbsp;nadhledem. Jsi přece klokan, nemusíš se pořád držet při zemi.“
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />        
        <AnimalText>
          „Dobře, dobře, ale nemám ráda, když si někdo dělá legraci z&nbsp;našeho ocasu. Vždyť je to naše chlouba. Často dokonce delší než celé tělo. Považte, až sedmdesát centimetrů! Samozřejmě ho ale nemáme jen na okrasu, pomáhá nám udržovat rovnováhu. A když ho zrovna nepotřebujeme, prostě ho složíme za záda. Kromě ocasu máme ještě další vychytávky, které nám umožňují život na skalách, kamenitých svazích a prudkých srázech. Řadíme se totiž mezi klokany skalní. Na chodidlech máme drsné polštářky hustě porostlé chlupy, takže hned tak neuklouzneme, a dráp čtvrtého prstu na noze máme kratší než jiné druhy klokanů. Dokonce dokážeme vylézt i&nbsp;na strom, abychom si pochutnali na jeho listech nebo pupenech, většinou si ale vystačíme s&nbsp;obyčejnou trávou. Co jsem to ještě chtěla říct?“
        </AnimalText>
        <AnimalText>
          „Nevím, nemáš v kapse tahák?“
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />                  
        <AnimalText>
          „Nebuď směšná, víš přece, na co máme kapsy. No jistě, mláďata! Obvykle se rodí jedno, a to zhruba po měsíční březosti. To ale přeskakuju, původně jsem chtěla pokračovat něčím jiným. Co to jen bylo? No ano, původ! Jako každý správný klokan pocházíme z&nbsp;Austrálie, konkrétně z&nbsp;jižní a střední, sem jsme ale s&nbsp;Corowou přišly v&nbsp;roce 2015 z&nbsp;francouzské zoo v&nbsp;Mulhouse. V&nbsp;květnu roku 2016 nám sem z&nbsp;Anglie přivezli i&nbsp;samečka Thutambu, to abychom si měly s&nbsp;kým hrát. Ještě na něco jsem zapomněla?“
        </AnimalText>
        <AnimalText>
          „Myslím, že ne, popsala jsi nás opravdu barvitě.“
        </AnimalText>
        <AnimalText>
          „Aby taky ne, vždyť jsme barevně nejvýraznější klokani ze všech. V&nbsp;tom případě se s&nbsp;vámi pro dnešek rozloučím, ale klidně se za námi zase někdy zastavte.“
        </AnimalText>
        <AnimalText>
          „Alespoň na skok.“
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
