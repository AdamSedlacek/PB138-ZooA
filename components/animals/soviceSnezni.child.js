import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/soviceSnezni/01.jpg'),
  require('../../images/animals/soviceSnezni/02.jpg'),
  require('../../images/animals/soviceSnezni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/soviceSnezni/01-thumb.jpg'),
  require('../../images/animals/soviceSnezni/02-thumb.jpg'),
  require('../../images/animals/soviceSnezni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj, jmenujeme se Helga a Hugo a jsme sovice sněžní. Jsme velké sovy, největší z&nbsp;nás sovic mají rozpětí křídel až 150&nbsp;centimetrů. Naše křídla by tedy mohla v&nbsp;pohodě jezdit v&nbsp;autě na předním sedadle. Na výšku ale máme jen něco přes půl metru.
        </AnimalText>
        <AnimalText>
          U&nbsp;vás lidí je běžné, že kluci jsou větší. U&nbsp;nás sov je to ale naopak, větší bývají holky. To ale není jediné, čím se od sebe navzájem lišíme. Hugo je jako všichni samečci bílý, jen s&nbsp;několika černými skvrnami; Helga je tmavší, kropenatá. (Pokud si opravdu dobře pamatujete Harryho Pottera, poznáte podle zbarvení, že ve filmu měl Harry spíš než sovu Hedviku sováka Hedvika.)
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          I&nbsp;když asi víte, že sovy loví v&nbsp;noci, my jsme výjimka, běžně lovíme i&nbsp;ve dne. Nejraději se živíme lumíky, což jsou hlodavci – takové větší myši s&nbsp;krátkým ocasem. Ale když je lumíků málo, lovíme i&nbsp;jiná zvířata. 
        </AnimalText>
        <AnimalText>
          Žijeme na severu, v&nbsp;tundře, kde je zem pořád zmrzlá a nerostou tam žádné stromy. Proto někdy létáme za polárními liškami, a když něco uloví, obereme je o&nbsp;jejich kořist. Říká se sice „mazaný jako liška“, ale na nás si jen tak nepřijdou! I&nbsp;když občas nás lišky pozlobí taky. Stavíme si totiž hnízda buď ve skalách, nebo přímo na zemi. A z&nbsp;nich nám pak kradou vejce.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Vajíček klademe zhruba pět. Trvá asi měsíc, než se z&nbsp;nich vyklubou malá sovátka. Další tři týdny nejsou ještě dost velká na to, aby opustila teplo peřím vystlaného hnízda. I&nbsp;pak se o&nbsp;ně ale ještě chvíli staráme, sama totiž dokážou naše mláďata lovit až v&nbsp;šesti týdnech.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
