import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/sobPolarni/01.jpg'),
  require('../../images/animals/sobPolarni/02.jpg'),
  require('../../images/animals/sobPolarni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/sobPolarni/01-thumb.jpg'),
  require('../../images/animals/sobPolarni/02-thumb.jpg'),
  require('../../images/animals/sobPolarni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Sob polární, latinsky <Text style={styles.italic}>Rangifer tarandus</Text>, je druhem jelenovitých, který je dobře přizpůsoben k&nbsp;životu na mrazivém severu. Obývá Severní Ameriku a Eurasii. Nejseverněji se sobi vyskytují na ostrovech Špicberky v&nbsp;Arktidě.
        </AnimalText>
        <AnimalText>
        U&nbsp;nás v&nbsp;zoo máme sobů, samců i&nbsp;samic, hned několik, protože sob je společenský druh. Občas se ve výběhu objeví i&nbsp;mláďata.
        </AnimalText>
        <AnimalText>
        Divocí sobi se dožívají 15&nbsp;let, u&nbsp;nás v&nbsp;zoo žijí něco málo přes 20. Sob je jediným druhem jelenovitých, který se podařilo člověku ochočit.
        </AnimalText>
        <AnimalText>
        Největší sob, kterého lidé změřili, měl 140&nbsp;cm na výšku a 220&nbsp;cm na délku. Dospělí samci váží i&nbsp;300&nbsp;kg. Samice jsou oproti nim menší, váží pouhých 80&nbsp;kg.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Mají dlouhou srst tvořenou tlustými a trubkovitými chlupy, které drží vrstvu izolačního vzduchu, jež je chrání před chladem. Jejich barva kolísá od skoro černé k&nbsp;čistě bílé. Během zimních měsíců mají srst světlejší. Na rozdíl od mnoha jiných druhů jelenů postrádá srst mláděte skvrny. Samcům roste na spodní části krku hříva. Osrstěný mají i&nbsp;čenich.
        </AnimalText>
        <AnimalText>
        Proto, aby se sobi nebořili do sněhu, mají neobvykle široká kopyta, jež fungují jako sněžnice. Během podzimu a zimy jim ztvrdnou a vytvoří se na nich ostré hrany, kterými při hledání potravy prolamují led. Všimli jste si, že je při chůzi doprovází zvuk? Toto klapání způsobuje šlacha v&nbsp;noze, která při chůzi klouže přes kost.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Nápadným rysem sobů jsou dlouhé a široké parohy, které jim rostou každý rok znova – co jedinec, to originál. Víte, že sobí samičky jako jediný druh jelena je mají také? Parohy samiček jsou však mnohem menší a jednodušší. Samci je používají v&nbsp;období rozmnožování a říje k&nbsp;přehlídkám, hrozbám a bojům. S&nbsp;ostatními tak soutěží o&nbsp;krále harémů, které tvoří 5 až 15 samic.
        </AnimalText>
        <AnimalText>
        Obvykle se sobům rodí pouze jedno mládě, ale víme i&nbsp;o&nbsp;dvojčatech. Mládě může následovat matku už po jedné hodině od narození a po jednom dni předběhne dokonce i&nbsp;člověka.
        </AnimalText>
        <AnimalText>
        Během dne jsou sobi téměř neustále v&nbsp;pohybu. Při běhu dosahují rychlosti 60 až 80&nbsp;km/hod. Při migraci za potravou urazí za rok přes 5&nbsp;000&nbsp;km, což je nejvíce ze všech pozemních savců. A&nbsp;věděli jste, že sob je i&nbsp;vynikající plavec? Při cestování za potravou totiž často překračuje řeky i&nbsp;fjordy.
        </AnimalText>
        <AnimalText>
        Potravu sobů tvoří široká škála rostlin. Vybírají si takové, které jsou nejvýživnější a lehce stravitelné. Na jaře a v&nbsp;létě žerou zelené rostliny, mechy, pupeny a listy. V&nbsp;zimě, díky svému vynikajícímu čichu, hledají pod sněhem lišejníky. Pozoruhodné je, že sobi vidí ultrafialové záření, jež jim během zimy pomáhá najít potravu, ale i&nbsp;rozlišit nepřátele. Například lišejník ve sněhu vnímají jako tmavší objekt, protože absorbuje více UV záření, nebo na sněhové pláni rozpoznají vlka, jehož huňatá kožešina pohlcuje sluneční světlo. I&nbsp;přes svoji mohutnost má sob několik přirozených predátorů, kterými jsou vlci, medvědi a pumy.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
