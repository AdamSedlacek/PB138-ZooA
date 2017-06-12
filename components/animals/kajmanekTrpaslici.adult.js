import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/kajmanekTrpaslici/01.jpg'),
  require('../../images/animals/kajmanekTrpaslici/02.jpg'),
  require('../../images/animals/kajmanekTrpaslici/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/kajmanekTrpaslici/01-thumb.jpg'),
  require('../../images/animals/kajmanekTrpaslici/02-thumb.jpg'),
  require('../../images/animals/kajmanekTrpaslici/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          PSYCHIATRICKÝ CHOROBOPIS
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>Jméno:</Text> kajmánek trpasličí (<Text style={styles.italic}>Paleosuchus palpebrosus</Text>)
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>Bydliště:</Text>  Povodí Amazonky 7062
        </AnimalText>
        <AnimalText>
          Oblast Zalesněná
        </AnimalText>
        <AnimalText>
          6&nbsp;915&nbsp;000
        </AnimalText>
        <AnimalText>
          JIŽNÍ AMERIKA
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          --------------------------------
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>Rodinná anamnéza:</Text> Otec se dožil 40&nbsp;let, rozčtvrcená osobnost (střídání synonymních druhových jmen: kajman trpasličí/hladkočelý/malý/oboční); matka přehnané zalíbení ve vodopádech a peřejích.
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>Porod a psychomotorický vývoj:</Text> Samčí pohlaví určeno teplotou vajec. Narozen v&nbsp;hnízdě z&nbsp;rostlin a zeminy, po vylíhnutí téměř všechny znaky dospělce. Matka pomáhala z&nbsp;hnízda.
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>Dětství:</Text> Prožito v&nbsp;tiché oblasti v&nbsp;blízkosti čisté, rychle tekoucí řeky. Rodinná příslušnost k&nbsp;řádu krokodýlů, čeleď aligátorovití. Přezdívku „živoucí fosilie“ hodnotí jako psychotrauma.
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>Zaměstnání:</Text> Nezaměstnaný. Potenciál pro využití v&nbsp;tradiční medicíně – tuk na revmatismus, zuby vhodné jako amulety.
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>Povaha:</Text> Samotář, avšak útočný – způsobuje vážná poranění, při vyprovokování zasazuje ocasem nebezpečné rány (viz přílohu „Zranění způsobená psychiatrům“).
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>Zájmy:</Text> Plavání, odpočinek v&nbsp;noře délky 1,5–3,5&nbsp;m, bahenní koupele.
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>Abusus:</Text> Závislost na rybách.
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          --------------------------------
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          <Text style={styles.strong}>Nynější onemocnění:</Text> „Jsem předurčen být jako Brněnský drak na Staré radnici. /<Text style={styles.italic}>Co vám brání být jako Brněnský drak?</Text>/ Jsem nejmenší z&nbsp;druhů krokodýlů a délkou nepřekročím 170&nbsp;cm, Brněnský drak je třikrát delší. Pociťuji úzkosti a mám pocit, že můj život ztratil smysl. /<Text style={styles.italic}>Kdy potíže začaly a jak dlouho trvají?</Text>/ Hantec se učím od roku 2002, pravdu o&nbsp;své maximální délce jsem se dozvěděl, když jsem byl v 95.&nbsp;lekci, netuším, co je teď za měsíc. /<Text style={styles.italic}>Proč chcete být jako Brněnský drak?</Text>/ Chci viset v&nbsp;průjezdu, kde proudící vzduch připomíná chladnou řeku. Chci, aby se o&nbsp;mně říkaly legendy a aby ke mně lidé vzhlíželi. /<Text style={styles.italic}>Nemůžete být malým drakem?</Text>/ Ne, musím být velký a chci viset v&nbsp;Brně. Navíc mám nekvalitní kůži na břiše a ke konzervaci nechtějí použít drahé technologie.“
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          --------------------------------
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          <Text style={styles.strong}>Psychopatologický rozbor, diagnóza:</Text> Vigilní, lucidní, chybí orientace v&nbsp;čase. Bohatý rejstřík emocí, strnulé pohledy do prázdna střídány agresivitou. Obsese učením se hantecu, chorobné ztotožnění se s&nbsp;Brněnským drakem. Sebevražedné sklony, touha po popularitě. Výběr města podle názvu – koresponduje s&nbsp;pacientovým zalíbením v&nbsp;bahenních koupelích (<Text style={styles.italic}>brnno</Text> = blátivé místo). Chmurné myšlenky způsobeny pobytem ve stísněné noře. Podezření na bipolární afektivní poruchu.
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>Návrh terapie:</Text> Terárium osázené rostlinami pro lepší okysličení, poskytnutí pozornosti lidí, doporučena zoo v&nbsp;Brně.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
