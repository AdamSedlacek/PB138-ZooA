import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/vlkHrivnaty/01.jpg'),
  require('../../images/animals/vlkHrivnaty/02.jpg'),
  require('../../images/animals/vlkHrivnaty/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/vlkHrivnaty/01-thumb.jpg'),
  require('../../images/animals/vlkHrivnaty/02-thumb.jpg'),
  require('../../images/animals/vlkHrivnaty/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          <Text style={styles.strong}>Hledám dlouhonohou krásku, která bude smrdět jako já!</Text>
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          <Text style={styles.italic}>Má tělo jako vlk, ale vlk to není.</Text>
        </AnimalText>
        <AnimalText>
          <Text style={styles.italic}>Má tvář jako liška, ale liška to není.</Text>
        </AnimalText>
        <AnimalText>
          <Text style={styles.italic}>Má nohy jako jelen, ale jelen to také není, seňorito!</Text>
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          Jsem to já, vlk hřivnatý. Říkají mi také pes hřivnatý či méně lichotivě skunčí vlk, podle toho, že mé území je pořádně cítit. Mezi mé koníčky patří orientační běh ve vysoké trávě a mimochodem, jsem mimochodník – používám zároveň obě pravé či levé nohy. Pocházím z&nbsp;Jižní Ameriky a jsem jednou z&nbsp;nejvyšších psovitých šelem. Procestoval jsem bažinaté i&nbsp;suché oblasti od střední Brazílie po sever Argentiny až sem, abych Tě našel.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Co nabízím?
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          Rád si s&nbsp;Tebou zaběhnu na králíka či rybu a jako dezert si můžeme dát nějaké ovoce. Třeba fruta-do-lobo, kterému se říká vlčí jablko, je to super na ledviny. Jsem introvert, samotář, nejsem fanda velkých smeček a hledám lásku na celý život. Randit spolu můžeme od dubna do června, pak ode mě budeš mít rok pokoj. Říká se, že moje pravé oko nosí štěstí při hře, ale Tebe budu s&nbsp;láskou sledovat oběma. Náhrdelník z&nbsp;mých zubů prý chrání před dentálními problémy, ale Tebe i&nbsp;naše mladé svými zuby a drápy ochráním před vším zlým.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Pokud toužíš po vysokém zrzkovi, co se umí postarat o&nbsp;rodinu, jsem ten pravý. Ozvi se, sejdeme se za soumraku či svítání.
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          Pac a pusu
        </AnimalText>
        <AnimalText>
          Tvůj Vlkouš &lt;3
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
