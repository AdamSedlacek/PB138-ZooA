import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/cipmankVychodni/01.jpg'),
  require('../../images/animals/cipmankVychodni/02.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/cipmankVychodni/01-thumb.jpg'),
  require('../../images/animals/cipmankVychodni/02-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Čipmank východní (latinsky <Text style={styles.italic}>Tamias striatus</Text>) je malý hlodavec patřící mezi zemní veverky. Pochází ze Severní Ameriky, a jak už napovídá jeho druhové jméno, najdeme ho především ve východní části kontinentu, kde obývá opadavé lesy a městské parky. Přítomnost člověka mu nijak zvlášť nevadí, a tudíž je ho možné zahlédnout i&nbsp;v&nbsp;předměstských oblastech a v&nbsp;zahradách okolo domů.
        </AnimalText>
        <AnimalText>
        Délka těla tohoto zvířátka dosahuje v&nbsp;průměru 11,5–18,6&nbsp;cm a ve srovnání s&nbsp;příbuznými druhy má relativně krátký ocas (7–11,5&nbsp;cm). Jeho šedá až rezavě hnědá srst zaujme především světlými a tmavými pruhy, které se táhnou podél hřbetu a kolem očí. 
        </AnimalText>
        <AnimalText>
        Čipmank je samotářské a teritoriální zvíře, které si energicky brání své území před vetřelci. Na rozdíl od stromových veverek tráví čipmank východní značnou část roku pod zemí, kde si buduje rozsáhlý systém nor. Tyto nory hloubí zejména pod kameny, mezi kořeny stromů nebo pod okrajem budov. Je aktivní přes den a občas je k&nbsp;vidění i&nbsp;na stromech, kam ho láká především čerstvá potrava. Mezi stromy ovšem nepřeskakuje, pouze čiperně běhá po větvích podobně jako plch. Živí se ovocem, semeny, ořechy, pupeny, houbami a hmyzem.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        V&nbsp;zimních měsících (přibližně od listopadu do března) čipmank hibernuje. Na tuto část roku se systematicky připravuje již od konce léta, kdy si v&nbsp;norách začíná shromažďovat zásoby na zimu. K&nbsp;přenášení potravy mu slouží lícní vaky, kterým říkáme torby. Čipmank si tedy nevytváří tukové zásoby na těle jako v&nbsp;případě jiných hibernujících savců. Během zimy se však kvůli krmení často probouzí a za teplejších dnů občas vylézá i&nbsp;ven. 
        </AnimalText>
        <AnimalText>
        Na jaře nastává doba páření. Samičky jsou březí měsíc a během jednoho vrhu přivádí na svět 3–5&nbsp;potomků. Mláďata se rodí slepá a opustit podzemní hnízdo jsou schopná po 5–6&nbsp;týdnech. V&nbsp;divočině se čipmank obvykle dožívá dvou až tří let, v&nbsp;zajetí až osmi let. 
        </AnimalText>
        <AnimalText>
        A&nbsp;jakpak se čipmankům východním daří v&nbsp;Zoo Brno? Tyto neposedné veverky u&nbsp;nás žijí od listopadu 2014. Čipmankové k&nbsp;nám dorazili od soukromého chovatele ve dvou párech. Momentálně je naleznete u&nbsp;voliéry orlů, kde pro ně byla vytvořena speciální expozice s&nbsp;umělou sekvojí. Protože jsou to samotářská zvířata, v&nbsp;pavilonu se obvykle nachází pouze jeden čipmančí pár. Zbylí dva jedinci žijí odděleně v&nbsp;zázemí zoo.
        </AnimalText>
        <AnimalText>
        Jsme první zoologická zahrada v&nbsp;České republice, v&nbsp;níž je možné tento druh zemní veverky zahlédnout. Jejich odchov je všeobecně velmi vzácný. Spousta našich návštěvníků (a zejména ti nejmenší) ale čipmanky již velmi dobře zná. Především díky svému roztomilému vzhledu se stali oblíbenými hrdiny mnoha amerických filmů a seriálů pro děti. Kdo by neznal legendárního Chipa a Dalea z&nbsp;Rychlé roty?
        </AnimalText>
        <AnimalText>
        Zajímavost: Při blížícím se nebezpečí vydávají čipmankové poplašné signály připomínající opakované „čip, čip, čip…“. Odtud pravděpodobně pochází i&nbsp;název tohoto zvířete (anglicky <Text style={styles.italic}>chipmunk</Text>). 
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
