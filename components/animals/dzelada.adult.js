import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/dzelada/01.jpg'),
  require('../../images/animals/dzelada/02.jpg'),
  require('../../images/animals/dzelada/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/dzelada/01-thumb.jpg'),
  require('../../images/animals/dzelada/02-thumb.jpg'),
  require('../../images/animals/dzelada/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Dželady jsou opice, které jsou blízké příbuzné paviánů. Od nich se však liší červenou lysinou na prsou. Díky tomuto charakteristickému znaku se dželadám přezdívá „paviáni s&nbsp;krvácejícím srdcem“.
        </AnimalText>
        <AnimalText>
          Jejich průměrná délka života v&nbsp;zajetí bývá 30&nbsp;let, v&nbsp;přírodě se odhaduje na 24&nbsp;let. Volně se vyskytují jen na horských loukách etiopských skalnatých masivů. Jsou na toto prostředí dokonale adaptované, noci tráví schoulené na okraji strmých svahů. Může se to sice jevit nebezpečně, ale velkou výhodou je, že se k&nbsp;nim nedostanou téměř žádní predátoři. Vysokohorskému prostředí se dželady přizpůsobily mimo jiné i&nbsp;svým pozadím, které je velmi podobné tomu lidskému. Sedací partie těchto savců jsou ideálně uzpůsobeny vysedávání na ostrých skalách. Evoluční biologové uvažují, zda mohly v&nbsp;podobných podmínkách vzniknout i&nbsp;naše sedací partie.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Po zemi se pohybují po všech čtyřech končetinách. Jejich protistojný palec jim pomáhá při hledání a zpracování potravy, umožňuje dokonalé třídění trávy a travních semen. Krátké a robustní prsty jim zároveň umožňují v&nbsp;období sucha vyhrabávat hlízy a kořínky. Krmí se vsedě, tudíž mají obě ruce volné. Jednou rukou třídí a v&nbsp;druhé shromažďují potravu, dokud si nevytvoří sousto vhodné ke žvýkání a spolknutí.
        </AnimalText>
        <AnimalText>
          U&nbsp;těchto opic také můžeme pozorovat různé expresivní výrazy, například přivírání očních víček k&nbsp;vyjádření dominance. Při pocitu strachu či ohrožení ohrnují horní ret až téměř k&nbsp;nosu, vyzývají tak také oponenta ke konfliktní situaci. Mezi další osvojenou mimiku patří zívání, upřené pohledy, strnulé zírání, a dokonce pohyby rtů. Komunikují spolu i&nbsp;akusticky, tedy pomocí varovných signálů, jako je například vřískání, mručení či štěkání. Pachovou komunikaci užívají v&nbsp;průběhu páření samice. Hmatová komunikace je určena většinou k&nbsp;posílení sociálních vztahů. Jedinci si navzájem probírají srst či jako jistou formu pozdravu třou nosy o&nbsp;sebe. Stejně jako většina primátů používají fyzický kontakt také při péči o&nbsp;mláďata.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Další zajímavostí je fakt, že samci tohoto druhu jsou sice větší a silnější, ale samice jsou dominantnější. Pokud už samec na svou roli v&nbsp;tlupě nestačí, vyberou si samice jeho následníka. Tito samci, kteří o&nbsp;své místo v&nbsp;tlupě přišli, nebo na něj naopak teprve čekají, si vytváří vlastní, samčí skupiny. S&nbsp;rodinami se pak často spojují do větších tlup o&nbsp;mnoha desítkách členů. Zatím největší pozorovaná skupina dželad měla 670&nbsp;členů.
        </AnimalText>
        <AnimalText>
          Tímto živočišným druhem se pyšní pouze patnáct evropských zoologických zahrad a naše zoo patří právě mezi ně. A to se třemi samci, kteří se jmenují Heiko, Helge a Asrak. Heiko i Helge pochází z&nbsp;Rheine (Německo) a oba nový domov poznali 25.&nbsp;11. 2005. Heiko se narodil 21.&nbsp;10. 2000 a Helge 11.&nbsp;11. 1999. Třetí samec Asrak se narodil 26.&nbsp;7. 2000 ve Wilhelma Zoo (Stuttgart) a k&nbsp;nám dorazil 30.&nbsp;11. 2008.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
