import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/mandelikHajni/01.jpg'),
  require('../../images/animals/mandelikHajni/02.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/mandelikHajni/01-thumb.jpg'),
  require('../../images/animals/mandelikHajni/02-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj děti, my jsme mandelíci hajní. Jsme nádherně zbarvení ptáci. Celí jsme azurově modří s&nbsp;červenohnědým hřbetem, pravoúhle zastřiženým ocasem, dlouhými křídly, silným zobákem a krátkýma nohama. Je na nás prostě krásný pohled. Naše délka těla je 29 až 32&nbsp;centimetrů, rozpětí křídel máme 52 až 58&nbsp;centimetrů a vážíme 120 až 190&nbsp;gramů. Místo zpěvu vydáváme drsné zvuky: „Krak, krak, krak.“ Slováci nás podle nich pojmenovali krakľa belasá.
        </AnimalText>
        <AnimalText>
          Hnízdíme v&nbsp;jižní, střední a jihovýchodní Evropě, západní a střední Asii a v&nbsp;severní Africe. Ze všech mandelíků jsme jediný druh hnízdící v&nbsp;Evropě. Jelikož je nám tady v&nbsp;zimě chladno, odlétáme v&nbsp;září do střední a jižní Afriky, odkud se vracíme obvykle během dubna a května, aby nám bylo pěkně teplo. Bydlíme v&nbsp;řídkých lesích a na lučinách, ovocných sadech, říčních údolích, příležitostně se zabydlíme i&nbsp;ve zříceninách. V&nbsp;zimovištích pak máme rádi suché stromovité savany a křovinaté savany.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />        
        <AnimalText>
          Živíme se převážně hmyzem, který dokážeme ulovit i&nbsp;za letu, také nepohrdneme drobnými hlodavci, žábami či ještěrkami. Občas sníme i&nbsp;malé ptáčky, které lovíme na zemi. Rádi ale sezobneme i&nbsp;plody, v&nbsp;našich zemích nejčastěji vinné hrozny. A jak to vypadá s&nbsp;našimi mláďaty? Maminka naklade přibližně ve druhé polovině května nebo počátkem června 4 až 6&nbsp;vajec, ze kterých se do 3&nbsp;týdnů vylíhnou naši potomci. Mladí jedinci nemají břicho azurové, ale zelenohnědé, tatínek a maminka se zbarvením neliší. O&nbsp;krmení se starají oba. Do jednoho měsíce pak mláďata hnízdo v&nbsp;dutinách opouštějí, aby se vydala za svým vlastním dobrodružstvím.
        </AnimalText>
        <AnimalText>
          Víte, jak vzniklo naše jméno? Rádi číháme na kořist na vyvýšených místech, jako jsou stromy, dráty, sloupy nebo právě mandele obilí. A co je ta mandel? Je to seskupení asi o&nbsp;patnácti snopech, do něhož se skládá obilí na poli.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
