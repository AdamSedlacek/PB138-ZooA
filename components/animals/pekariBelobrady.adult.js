import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/pekariBelobrady/01.jpg'),
  require('../../images/animals/pekariBelobrady/02.jpg'),
  require('../../images/animals/pekariBelobrady/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/pekariBelobrady/01-thumb.jpg'),
  require('../../images/animals/pekariBelobrady/02-thumb.jpg'),
  require('../../images/animals/pekariBelobrady/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Dobrý den vespolek, slyšeli jste už někdy mé jméno? Že vám zní neobvykle? Trochu jako kdybych byl typ kari, viďte? Ale já jsem zvíře. Jsem sudokopytník a patřím k&nbsp;čeledi pekariovitých. Celkem existují tři uznávané druhy pekari. Jistě poznáte, proč jsem zrovna já pekari bělobradý. Bílou skvrnu na bradě mám nejen já jako dospělý, ale mají ji i&nbsp;naše mláďata. Zbytek kožichu mám stejně jako čumák tmavě hnědý. Naše mláďata bývají světle hnědá a čumáky mají růžové.
        </AnimalText>
        <AnimalText>
          Moji rodinu byste nejspíš našli v&nbsp;Jižní Americe – od jižního Mexika až po Argentinu, kde by si lebedila v&nbsp;deštných pralesích. Nicméně tady se mně také líbí. Pečlivě se o&nbsp;nás všechny starají – což je dobře, protože jsme téměř ohrožený druh.
        </AnimalText>
       <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jsem podobný divokému praseti – vyjma mé velikosti. I&nbsp;ocas mám kratší, než má divoké prase. Můj měří jen 5&nbsp;cm. Mám ostré špičáky a štětinatou srst. Dobře slyším a výborně cítím pachy. Jen se zrakem jsem na tom celkem špatně, ale tak to mají všichni pekari. Kromě toho všeho umím velmi rychle běhat – až 35&nbsp;km/h. Ale takto rychle utíkám jen tehdy, pokud si chci zachránit vlastní kožich.
        </AnimalText>
        <AnimalText>
          Většinou žijeme ve skupinách čítajících 50–400&nbsp;jedinců, ale tady v&nbsp;zoo je nás mnohem méně. Přesto, když je potřeba, dokážeme obhájit své teritorium. Naštěstí nám sem nikdo cizí neleze. Ale nemyslete si, jsou tací, co nám závidí naše jídlo a chtějí ho pro sebe. Nejraději máme ovoce a malé obratlovce. Ale jíme také bezobratlé, traviny, různé plody a kořeny. No a když dostaneme jídlo, přece si ho musíme ubránit. Čím bychom potom krmili svá mláďata, kdybychom každému na potkání dali třeba své ovoce?
        </AnimalText>
       <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Naše mláďata se rodí po pěti měsících od početí. Samice může mít jedno až – představte si to – pět mláďat. A musíme je zvládnout uživit! Ale můžeme být ještě rádi – nám příbuzná prasata jich mívají mnohem více. V&nbsp;lidské péči se dožíváme až 24&nbsp;let, takže si svých dětí dostatečně užijeme. Však nám taky dělají radost!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
