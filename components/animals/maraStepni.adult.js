import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/maraStepni/01.jpg'),
  require('../../images/animals/maraStepni/02.jpg'),
  require('../../images/animals/maraStepni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/maraStepni/01-thumb.jpg'),
  require('../../images/animals/maraStepni/02-thumb.jpg'),
  require('../../images/animals/maraStepni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          REPORTÉR: Vážení čtenáři, věřte nebo ne, právě dnes máte tu čest seznámit se s&nbsp;báječnou a jedinečnou <Text style={styles.italic}>Dolichotis patagonum</Text> čili marou stepní. Dozvíte se úžasné detaily z&nbsp;jejího života a nahlédnete pod pokličku jejího soukromí. Dámy a pánové, přichází mara stepní!
        </AnimalText>
        <AnimalText>
          MARA PRVNÍ: Děkuju, vy lichotníku. Já vím, že jsem k&nbsp;sežrání.
        </AnimalText>
        <AnimalText>
          REPORTÉR: Cože? Aha, vy narážíte na tu pokličku. Ale to jsem tak… No to je jedno. Tak co nám o&nbsp;sobě povíte, slečno?
        </AnimalText>
        <AnimalText>
          MARA PRVNÍ: Paní! Víte, já už jsem narazila na toho pravého (no, je sice trošku levý, ale nevadí) a strávíme spolu celý život.
        </AnimalText>
        <AnimalText>
          REPORTÉR: Tak to vám blahopřeji. Jestlipak spolu už máte i&nbsp;nějaké děti?
        </AnimalText>
        <AnimalText>
          MARA PRVNÍ: No jéje! Průměrná dvojčata dvakrát až třikrát do roka! Rozumějte, průměrní oni nejsou, to by mi dali, ale nejčastěji se rodí po dvou.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          REPORTÉR: Panečku, to je dětí. To je zvládáte všechny uživit?
        </AnimalText>
        <AnimalText>
          MARA PRVNÍ: To si pište. Máme na to vypracovaný systém.
        </AnimalText>
        <AnimalText>
          REPORTÉR: Vždyť vidíte, že si to všechno píšu. Jaký je to tedy systém?
        </AnimalText>
        <AnimalText>
          MARA PRVNÍ: Máme na to pořadník. Svoje mláďata může vždycky krmit jenom jedna máma.
        </AnimalText>
        <AnimalText>
          MARA DRUHÁ: Maruš, pospěš, děti mají hlad!
        </AnimalText>
        <AnimalText>
          MARA PRVNÍ: Promiňte, povinnosti volají. Totiž manžel. Však on vám to dovysvětlí. Tak se mějte.
        </AnimalText>
        <AnimalText>
          REPORTÉR: Vy taky, těšilo mě. Tak, pane maro, jak je to tedy s&nbsp;tím krmením?
        </AnimalText>
        <AnimalText>
          MARA DRUHÁ: Máme v&nbsp;tom řád. To víte, pořádek musí být, aby se všichni pořádně najedli a žádný neřád nám to nezmařil, tak držíme pořadí a ostatní hlídají. Proto ani já v&nbsp;tuhle chvíli nespouštím z&nbsp;manželky oči.
        </AnimalText>
        <AnimalText>
          REPORTÉR: Pořád?
        </AnimalText>
        <AnimalText>
          MARA DRUHÁ: No, pořád jsme ve střehu, ale ne tolik. Přes den jsou děti zalezlé v norách, které jim hloubí mámy nebo které si vypůjčíme například od pásovců.
        </AnimalText>
        <AnimalText>
          REPORTÉR: To jsou tak slabé?
        </AnimalText>
        <AnimalText>
          MARA DRUHÁ: To zase ne, už odmalička jsou docela vyvinuté, dokonce hned kouknou a vidí, ale ohlídat pár takových čiperů, to by byla marná snaha. Jsme radši, když jsou hezky v&nbsp;bezpečí. Na tom otevřeném prostranství by se těžko ubránily.
        </AnimalText>
        <AnimalText>
          REPORTÉR: Chápu, ty jihoamerické stepi a polopouště asi nejsou ideální místo pro děti.
        </AnimalText>
        <AnimalText>
          MARA DRUHÁ: To ne, ale jinak si je nemůžeme vynachválit. Hezky se sluníme, natažení na předních jako kočky, a naše sluníčka zatím odpočívají.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          REPORTÉR: A to sucho vám nevadí?
        </AnimalText>
        <AnimalText>
          MARA DRUHÁ: Vůbec ne, jsme na něj zvyklí. Máme dostatek vody z&nbsp;potravy, trávy, listů, plodů.
        </AnimalText>
        <AnimalText>
          REPORTÉR: Takže jste výhradně býložraví?
        </AnimalText>
        <AnimalText>
          MARA DRUHÁ: Zelenožraví.
        </AnimalText>
        <AnimalText>
          REPORTÉR: Jistě, jistě. Poslyšte, pořád se nemůžu zbavit dojmu, že mi někoho připomínáte…
        </AnimalText>
        <AnimalText>
          MARA DRUHÁ: To slýchám často. Jsme příbuzní s&nbsp;jednou celebritou, říká si morče.
        </AnimalText>
        <AnimalText>
          REPORTÉR: To by mohlo být ono, přesto… No ano, tuším tam králíka nebo zajíce a náznak srnky.
        </AnimalText>
        <AnimalText>
          MARA DRUHÁ: Vy lidé máte ale představivost.
        </AnimalText>
        <AnimalText>
          REPORTÉR: To mi povídejte. Úplně vidím ten srnčí hřbet. Mám z&nbsp;toho hlad. Ale ještě mi povězte, dočetl jsem se, že někdo z&nbsp;vás přišel z&nbsp;drážďanské a někdo z&nbsp;belgické zoo. Nezpůsobilo to nějaké komunikační bariéry?
        </AnimalText>
        <AnimalText>
          MARA DRUHÁ: Ale vůbec ne, jen se podívejte, jak si pěkně rozumíme.
        </AnimalText>
        <AnimalText>
          MARA TŘETÍ: Tati, tati, já se jdu zahrabat!
        </AnimalText>
        <AnimalText>
          MARA DRUHÁ: Jen utíkej, Marečku. Hodný kluk. Polední klid musí být.
        </AnimalText>
        <AnimalText>
          REPORTÉR: Tak vám moc děkuju a ať se vám maří. Já jdu na ten srnčí hřbet.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
