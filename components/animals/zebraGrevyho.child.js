import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/zebraGrevyho/01.jpg'),
  require('../../images/animals/zebraGrevyho/02.jpg'),
  require('../../images/animals/zebraGrevyho/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/zebraGrevyho/01-thumb.jpg'),
  require('../../images/animals/zebraGrevyho/02-thumb.jpg'),
  require('../../images/animals/zebraGrevyho/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Kdo to tady na nás kouká? Nemysli si, že tě nevidíme. My jen děláme, že si tě nevšímáme. Přitom tě bedlivě pozorujeme. Ne, že bychom vás, lidi, neměly rády. Ale jste nám podezřelí. Každý člověk, který tudy projde, vypadá jinak a má různě barevný kožich. Představte si, že my bychom pokaždé vypadaly jinak. Jednou bychom byly černé s&nbsp;bílými pruhy, podruhé zelené s&nbsp;modrými pruhy... Vždyť to se nedělá!
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          	My jsme se ještě nepředstavily, že? Jsme zebry Grévyho. Ne, že bychom panu Grévymu patřily. Jen nás po něm pojmenovali – byl to francouzský prezident. Určitě jsi na první pohled poznal, že jsme zebry. Vypadáme jako koně v&nbsp;pruhovaných pyžamech, že? Náš nos je šedý a máme krátkou, ale pěknou hřívu. Na nohou máme kopyta, takže když běžíme, je slyšet dusot. Víš, že je nás víc druhů a poddruhů? Tady v&nbsp;zoo bydlí ještě jeden zebří poddruh – zebra Chapmanova. Ve srovnání s&nbsp;ní jsme větší a máme více pruhů. Ale nemusíš nám je počítat, stačí nám věřit. Na bříšku žádné pruhy nemáme. Nevíme proč, ale maminka nám říkala, že si z&nbsp;toho nemáme nic dělat. 
        </AnimalText>
        <AnimalText>
          	Původem jsme z&nbsp;Afriky, což je velice daleko. Pěšky bychom tam nejspíš nedošly. Žirafy říkaly, že v&nbsp;Africe je veliké teplo a roste tam plno různých stromů a keřů. Jejich listy jí nejspíš všechny zebry v&nbsp;Africe. Když je tam těch stromů hodně, proč ne. Vysvětlovalo by to, proč nám taktéž chutnají listy stromů.
        </AnimalText>
        <AnimalText>
          	Tady v&nbsp;Brně bývá přes léto také hodně teplo. Ještě že dostáváme dost vody. Pijeme několikrát za den, když můžeme. Ale kdyby nám voda došla, vydržíme bez ní i&nbsp;několik dnů!
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          	Když se nám líbí místo, na kterém žijeme, a jsme spokojené, nebojíme se přivést na svět svá mláďata. Tady v&nbsp;zoo se narodilo už hodně malých zeber. Umíš si představit, jak takové mládě vypadá? Jak nejspíš tušíš, je menší než my, dospělé zebry. Ale tak to je se všemi mláďaty, dokonce i&nbsp;ty jsi menší než dospělý člověk. Co je u&nbsp;malé zebry zajímavé – není černobílá, ale hnědobílá. Až postupem času barva ztmavne. O&nbsp;mladou zebru se stará její maminka. Když jí jsou tři roky, stane se dospělou. 
        </AnimalText>
        <AnimalText>
          	Znáte zebru Martyho z&nbsp;filmu Madagaskar? Mezi námi zebrami je známý. Vyslovil totiž nahlas myšlenku, nad kterou každá zebra přemýšlí: Jsme černé s&nbsp;bílými pruhy, nebo bílé s&nbsp;černými pruhy? A záleží na tom vůbec? Nejspíš ne. My zebry budeme vždy držet pospolu, ať jsme jakékoliv.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
