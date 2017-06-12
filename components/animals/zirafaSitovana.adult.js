import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/zirafaSitovana/01.jpg'),
  require('../../images/animals/zirafaSitovana/02.jpg'),
  require('../../images/animals/zirafaSitovana/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/zirafaSitovana/01-thumb.jpg'),
  require('../../images/animals/zirafaSitovana/02-thumb.jpg'),
  require('../../images/animals/zirafaSitovana/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Společně s&nbsp;dalšími žirafami patří i&nbsp;ty síťované k&nbsp;nejvyšším savcům na Zemi. Mohou vyrůst až do výšky přes pět metrů. Proč je žirafa tak vysoká, vysvětloval Charles Darwin tím, že se snažila dosáhnout na potravu v&nbsp;místech, kde jí ji nikdo nesní. Vzhledem k&nbsp;tomu, že se žirafy obvykle stravují listím a větvemi zhruba ve výši jejich „ramen“, nedá se vyloučit, že se Darwin mýlil, ačkoliv mnozí odborníci s&nbsp;ním souhlasí. Jedna z&nbsp;hypotéz tvrdí, že důvod, proč mají žirafy tak dlouhý krk, je boj o&nbsp;samice. Samci spolu totiž bojují tak, že se bijí hlavami – a když mají delší krk, zvládnou pádnější úder. A samice si vybírají toho nejsilnějšího samce. (Nikoli ovšem ve smyslu váhy, která se u&nbsp;žiraf pohybuje mezi 600 až 1&nbsp;900&nbsp;kilogramy.)
        </AnimalText>
        <AnimalText>
          Žirafy síťované jsou africký druh, obývají savany a lesy v&nbsp;Etiopii, Somálsku a Keni. Tvoří stáda o&nbsp;několika desítkách jedinců (do zhruba 40). Dospělí jedinci nemají mnoho přirozených predátorů. I&nbsp;lvi si na žirafu troufnou jen ve skupině, možná proto, že plně vzrostlá žirafa dokáže jediným kopem lva zabít (a občas i&nbsp;dekapitovat). V&nbsp;případě potřeby dokáží žirafy vyvinout rychlost přes 50&nbsp;kilometrů v&nbsp;hodině, dlouhý krk jim ale nedovolí udýchat dlouhé tratě, jejich obvyklé tempo je kolem 14&nbsp;km/h.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Co se vzhledu týče, žirafy jsou (jak je na první pohled patrné) skvrnité, a to i&nbsp;na nohou. Zajímavé na tom je, že každá žirafa má skvrny uspořádané specificky. Je dobře, že se žirafy nevyvinuly na úroveň lidí, protože žirafí vyšetřovatelé by měli s&nbsp;identifikací žiraf podle tvaru skvrn asi poněkud větší problémy než ti lidští s&nbsp;otisky prstů.
        </AnimalText>
        <AnimalText>
          Při pozorování žiraf vás určitě zaujme jejich jazyk. Tmavě zbarvený je proto, aby si ho žirafy nespálily na slunci, když si jím čistí uši a nos nebo jej používají podobně jako sloni chobot k&nbsp;uchopení potravy. Dlouho se předpokládalo, že jsou žirafy němé, ale ukázalo se, že jen komunikují infrazvukem, tedy tak hluboko, že to lidské ucho nedokáže zachytit.
        </AnimalText>
        <AnimalText>
          Každá žirafa má problém s&nbsp;pitím. Ne kvůli závislosti na alkoholu, ale kvůli své výšce. Aby se mohla napít, musí se doširoka rozkročit. Navíc mají žirafy speciálně vyvinuté žilní chlopně, které zachytávají krev, aby se jim při sklonění hlavy nepoškodil mozek. Být žirafou je z&nbsp;lidského pohledu vůbec únavné, žirafy – jako ostatní přežvýkavci – obvykle spí vestoje, případně vsedě. I&nbsp;porod po 15měsíční březosti probíhá vestoje, mládě dopadne na zem z&nbsp;dvoumetrové výšky (naštěstí jsou k&nbsp;tomu mláďata uzpůsobena, měří obvykle necelé dva metry). Vlastně jediná situace, kdy žirafa leží, je, když je mrtvá. Žirafy se dožívají 20–25&nbsp;let, v&nbsp;lidské péči i&nbsp;30&nbsp;let.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Mimochodem, pokud byste jeli do Maastrichtu a koukali se tam z&nbsp;hradeb, mohli byste vidět sochu dívky, která truchlí nad ležící žirafou. Při špatné viditelnosti se může zdát, že v&nbsp;dáli leží skutečná žirafa.
        </AnimalText>
        <AnimalText>
          Věděli jste, že žirafy pomohly vědcům z&nbsp;NASA při problematice cestování do vesmíru? Lidské tělo není uzpůsobeno k&nbsp;existenci ve stavu beztíže, může při něm dojít k&nbsp;řadě komplikací včetně problémů s&nbsp;oslabováním žil v&nbsp;dolních končetinách, protože vypumpovat krev z&nbsp;nohou není tak obtížné jako na Zemi. Žirafy se učí stát hned po narození díky tomu, že mají speciálně uzpůsobené, rozšířené žíly. Když to vědci zjistili, byli schopni přijít s&nbsp;udělátkem, které způsobí v&nbsp;zásadě to, že se astronautům žíly rozšíří a nezleniví. (Pokud vás zajímají detaily, hledejte <Text style={styles.italic}>Lower Body Negative Pressure process</Text>.)
        </AnimalText>
        <AnimalText>
          (Zajímavost: žirafí samičky čurají samcům do tlamy a ti podle chuti moči poznají, jestli jsou samice těhotné, nebo jestli se s&nbsp;nimi budou ochotné rozmnožovat.)
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
