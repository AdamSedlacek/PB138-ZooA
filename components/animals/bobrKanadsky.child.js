import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/bobrKanadsky/01.jpg'),
  require('../../images/animals/bobrKanadsky/02.jpg'),
  require('../../images/animals/bobrKanadsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/bobrKanadsky/01-thumb.jpg'),
  require('../../images/animals/bobrKanadsky/02-thumb.jpg'),
  require('../../images/animals/bobrKanadsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj kamarádi,
        </AnimalText>
        <AnimalText>
          my jsme bobři kanadští a tady v&nbsp;Bystrci bydlíme od roku 2003. Přivezli nás sem ze Zooparku v&nbsp;Chomutově a celkem nás přijelo pět. Pocházíme ze Severní Ameriky, což je odsud hodně daleko, až za oceánem.
        </AnimalText>
        <AnimalText>
          Naše tělo je pokryto hnědým až černým kožichem a včetně ocásku měří až metr a půl. Možná právě proto se o&nbsp;nás říká, že jsme třetí největší hlodavci na světě! Přesně tak, jsme hlodavci stejně jako například křeček nebo veverka. Chvilkami si však připadáme spíše jako rybičky.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Proč rybičky? Nejraději ze všeho totiž plaveme. Z&nbsp;dlouhého máčení se ve vodě však nikdy nenachladneme. To díky tomu, že naše srst nepropouští vodu. Při plavání si pomáháme ocasem, který nám slouží jako pádlo, a na zadních nohách máme plovací blány.
        </AnimalText>
        <AnimalText>
          Kromě plavání také rádi skotačíme v&nbsp;proudu řek, brousíme si zuby o&nbsp;dřevo, stavíme hráze ze stromů nebo si hrajeme ve svém bobřím hradě. Říkáte si, bobři mají hrad? Ano, z&nbsp;větviček a hlíny!
        </AnimalText>
        <AnimalText>
          Zajímá vás, jestli míváme také bobří mláďátka? Samozřejmě, každý rok se nám narodí zhruba pět miminek (naposledy to byla 4&nbsp;mláďata na konci června 2016), která buď odcestují do jiných zoologických zahrad, nebo zůstávají tady s&nbsp;námi. Jednou si jedno naše mláďátko odvezli dokonce až do Jižní Koreje!
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Rádi mlsáme kůru a pupeny vrby, mňam, jen jak to říkáme, hned bychom si nějaký ten pupen dali!
        </AnimalText>
        <AnimalText>
          Mějte se krásně a zase nás přijďte navštívit,
        </AnimalText>
        <AnimalText>
          pac a bobří pusu!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
