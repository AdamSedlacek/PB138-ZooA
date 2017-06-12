import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/krajtaKobercova/01.jpg'),
  require('../../images/animals/krajtaKobercova/02.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/krajtaKobercova/01-thumb.jpg'),
  require('../../images/animals/krajtaKobercova/02-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Hezký den!
        </AnimalText>
        <AnimalText>
          Jsme krajta a krajťák kobercoví, anglicky nám říkají <Text style={styles.italic}>carpet python</Text>. Je tomu tak nikoliv proto, že se z&nbsp;nás koberce vyrábějí, nýbrž proto, že svým výrazným zbarvením se žlutými a černými skvrnami připomínáme vzory tkaných orientálních koberců.
        </AnimalText>
        <AnimalText>
          Náš druh, krajty diamantové, se dělí na šest různých poddruhů. Každý z&nbsp;nich má specifické zbarvení podle toho, kde žije. My dva patříme k poddruhu <Text style={styles.italic}>Morelia spilotes variegata</Text>, tedy k&nbsp;již zmíněným krajtám kobercovým, a do brněnské zoo jsme se přistěhovali v&nbsp;únoru&nbsp;2014 ze Dvora Králové.
        </AnimalText>
        <AnimalText>
          Ve volné přírodě je naším domovem Austrálie, kde jsme mezi krajtami nejrozšířenějším druhem, a také Nová Guinea. Jsme přizpůsobivé a žijeme na různých místech, můžete nás najít jak v&nbsp;deštných tropických pralesech, tak v&nbsp;suchých křovinách. Tam se nejčastěji skrýváme v&nbsp;opuštěných norách či ve skalních rozsedlinách. V&nbsp;deštných lesích jsou naším oblíbeným úkrytem například díry pod kmeny, je možné nás najít i&nbsp;v&nbsp;rozsochách větví.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />        
        <AnimalText>
          Dorůstáme do délky až 4&nbsp;metrů. I&nbsp;přes svou velikost však máme docela mírnou povahu. Aktivní jsme obvykle v&nbsp;noci, většinu dne trávíme stočeny v&nbsp;korunách stromů či na zemi, kde se podle teploty okolí buď sluníme, nebo jsme schované ve stínu. Naše kousnutí není jedovaté, svou kořist usmrcujeme škrcením. Živíme se převážně hlodavci, ale i&nbsp;králíky a menšími vačnatci. Možná vás překvapí, že nás proto v&nbsp;Austrálii tolerují ve svých domech jako postrach myší a potkanů. Tady v Evropě dáváte před hady přednost spíše kočkám, že? 
        </AnimalText>
        <AnimalText>
          Když se rozhodneme založit rodinu, samička snese 25–30 vajec na dobře krytém místě a stará se o ně 75–80&nbsp;dní, aby byla hezky v&nbsp;teple. Když je potřeba, zahřívají samice svá vejce chvěním, aby měla optimální teplotu, která se pohybuje kolem 30&nbsp;°C. Když se hádě vyklube, má asi 39&nbsp;cm, není to tedy žádné vykraj(t)ovátko.
        </AnimalText> 
        <AnimalText>
          Díky za návštěvu a na viděnou!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
