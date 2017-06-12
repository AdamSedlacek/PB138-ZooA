import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/paovceHrivnata/01.jpg'),
  require('../../images/animals/paovceHrivnata/02.jpg'),
  require('../../images/animals/paovceHrivnata/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/paovceHrivnata/01-thumb.jpg'),
  require('../../images/animals/paovceHrivnata/02-thumb.jpg'),
  require('../../images/animals/paovceHrivnata/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj děti! Jmenuji se Stará, a to proto, že jsem jednou z&nbsp;paovcí, které obývají náš brněnský výběh nejdéle. Ráda bych se vám představila spolu se svými kamarádkami Maďarkou a Rohatou, které jsou tady stejně dlouho jako já. Už tedy něco pamatujeme a můžeme o&nbsp;našem druhu a ostatních paovečkách tady v&nbsp;zoo směle vypravovat.
        </AnimalText>
        <AnimalText>
          Máme se tu moc dobře, denně spořádáme hromadu výborné travičky, a když na ně dosáhneme, tak také lístky ze stromků nebo keřů. Dokonce vydržíme nějakou dobu i&nbsp;bez pití, stačí nám bohatě voda, která je obsažená v&nbsp;listech a v&nbsp;trávě. Právě po takové zdravé stravě máme svou karamelově zbarvenou srst krásně lesklou a zdravou. A že nemáme srst jako ostatní ovečky? Všimli jste si, že vlastně nevypadáme vůbec jako ovečky, ale spíš jako kozy nebo kamzíci? Inu, to máte naprostou pravdu. Jsme zvláštní, vlastně něco mezi ovcí a kozou, a právě proto se nám říká paovce. Od přírody jsme obdařené jinou srstí a celkově jiným vzhledem než naše evropské příbuzné, které znáte z&nbsp;políček a pastvin. Jak už naše druhové jméno napovídá, máme na spodní straně krku, hrudníku a na horní straně předních nohou krásnou hřívu. A jsme na ni patřičně hrdé! Jen se na nás někdy podívejte, jak se pyšně neseme výběhem a dáváme svou krásu na odiv.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Kromě vzhledu máme s&nbsp;kozami a kamzíky společné také to, že máme nejraději skalnatá místa v&nbsp;horských oblastech, ideálně v&nbsp;severní Africe, odkud původně pocházíme. Žádný jiný druh divoké ovce se v&nbsp;celé Africe volně nevyskytuje – a přitom to odtud není tak daleko, jen asi dvě až tři hodinky letadlem. Tam v&nbsp;horách dovedeme šikovně vyšplhat na skály vysoké až 4&nbsp;kilometry, což je stejně vysoko jako dvě a půl Sněžky postavené na sebe!
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          A jak že rozeznáte nás samičky od našich milých samečků? Není to tak těžké, i&nbsp;když na první pohled vypadáme dost podobně. Všichni máme na hlavě zahnuté rohy, ale samečci je mají větší, tlustší a hrbolatější. Samečci jsou navíc mnohem větší a taky těžší než my holky, někdy i&nbsp;jednou tolik, a to pak váží klidně přes metrák. Navíc mají delší a výraznější hřívu na spodní straně těla.
        </AnimalText>
        <AnimalText>
          Kdo se vám líbí víc, jestli kluci nebo holky, to už posuďte sami, naši malí návštěvníci. My si zatím schroupeme trochu trávy. Ta nám totiž zpevní zdraví a nás paovce to moc baví!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
