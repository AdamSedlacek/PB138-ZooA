import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/orelBelohlavy/01.jpg'),
  require('../../images/animals/orelBelohlavy/02.jpg'),
  require('../../images/animals/orelBelohlavy/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/orelBelohlavy/01-thumb.jpg'),
  require('../../images/animals/orelBelohlavy/02-thumb.jpg'),
  require('../../images/animals/orelBelohlavy/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
       Orel bělohlavý (lat. <Text style={styles.italic}>Haliaeetus leucocephalus</Text>) patří v&nbsp;Zoo Brno k&nbsp;největším chloubám naší ptačí kolekce. Tento nádherný dravec pochází ze Severní Ameriky, kde byl v&nbsp;18.&nbsp;století prohlášen za národního ptáka a státní symbol Spojených států amerických. Stal se ikonou svobody, krásy i&nbsp;síly a v&nbsp;tradičních indiánských kulturách je ctěn jako posel mezi bohy a lidmi.
        </AnimalText>
        <AnimalText>
        I&nbsp;přes jeho veškerou majestátnost a vznešenost se orel bělohlavý ocitl v&nbsp;polovině 20.&nbsp;století na pokraji vyhynutí. Otrava pesticidy a nelegální lov patřily mezi hlavní příčiny zápisu tohoto zvířete na seznam ohrožených druhů. Po mnohých ochranářských opatřeních se však početní stavy orlů bělohlavých podařilo opět zvýšit. V&nbsp;divočině se průměrně dožívají 28&nbsp;let, v&nbsp;zajetí až 36&nbsp;let.
        </AnimalText>
        <AnimalText>
        Jak už druhové jméno napovídá, hlava tohoto dravce je pokryta bílým peřím, což výrazně kontrastuje s&nbsp;tmavě hnědým tělem a křídly. Ocas má taktéž bílý a jeho pařáty, zobák a duhovky jsou naopak zářivě žluté. Celková délka těla orla bělohlavého dosahuje v průměru 70–102&nbsp;cm a rozpětí křídel 168–244&nbsp;cm. Zajímavé je, že samice přerůstají samce, a to až o&nbsp;25&nbsp;%. U&nbsp;dravců je to ovšem pravidlem.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Orel bělohlavý si vyhledává místa především u&nbsp;velkých vodních ploch. Je možné ho zahlédnout na břehu moře, oceánu, u&nbsp;velkých jezer či řek. Není tedy žádným překvapením, že jeho hlavní potravou jsou ryby. Živí se také savci, ptáky a obojživelníky. Je to od přírody výborný letec, což mu lov potravy výrazně usnadňuje. Při vodorovném letu dosahuje maximální rychlosti 70&nbsp;km/h, při chytání ryb a střemhlavém ponoření až 160&nbsp;km/h.
        </AnimalText>
        <AnimalText>
        Většina orlů bělohlavých si vytváří partnerství na celý život. V&nbsp;případě zmizení nebo úmrtí jednoho z&nbsp;páru si však opuštěný jedinec hledá partnera nového. Orlí námluvy často připomínají pozoruhodnou vzdušnou akrobacii, při níž pár létá střemhlav k&nbsp;zemi, nahání se a předvádí nejrůznější přemety.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Během doby páření si staví orli hnízda, která patří k&nbsp;vůbec největším ptačím hnízdům na světě (hloubka 4&nbsp;m a průměr až 2,5&nbsp;m). Bývají umístěna vysoko na stromech nebo na skalních římsách a orlům mohou sloužit až pět let. Samička ročně snáší jedno až tři vejce, jejichž inkubační doba je kolem 35&nbsp;dnů. Na vejcích střídavě sedí samice i&nbsp;samec. Jen málokdy se ovšem podaří přivést na svět všechna mláďata.
        </AnimalText>
        <AnimalText>
        V&nbsp;Zoo Brno se můžete s&nbsp;těmito dravci seznámit doslova tváří v&nbsp;tvář v&nbsp;unikátní volně průchozí voliéře, která byla slavnostně otevřena v&nbsp;roce&nbsp;2014. Momentálně jsou zde dva jedinci – matka s&nbsp;dcerou. Orlí matka, která do Brna dorazila z&nbsp;liberecké zoo, se narodila ve Frankfurtu nad Mohanem v&nbsp;roce 1988 (je to tedy již opravdová dáma v&nbsp;orlích letech). Její dcera se vylíhla v&nbsp;roce&nbsp;2015 v&nbsp;brněnské zoo, což považujeme za velký úspěch, neboť odchov těchto dravců v&nbsp;zajetí je všeobecně velmi složitý. 
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
