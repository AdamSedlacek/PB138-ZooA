// je potřeba zarovnat na střed

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
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>s              s</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>s     s</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>ss</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>ss</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>ss</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Sssssssssss!
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Někdo nás sleduje!
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        …Sympaťák…
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>ssss</Text> Asi nás slyší přes sklo. <Text style={styles.strong}>ssss</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>ssss</Text> On se snad o nás zajímá?! <Text style={styles.strong}>ssss</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Tak to se mu s radostí představíme:
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>JSME KRAJTY KOBERCOVÉ.</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Sameček a samička.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>SSSSssssSSSS!</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Neštiť se nás.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Nejsme slizké.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>SSSSssssSSSS!</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Pyšníme se
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        hnědavým zbarvením.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Kůži nám zdobí
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        zubaté tmavé pásky.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Když se smotáme,
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        vypadáme trochu jako
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        orientální koberce.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>SSSSSssssssssSSSSS!</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Máme dokonce i kostru.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Žádné žížaly, jasné?
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Jsme dlouzí plazi.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Dorůstáme
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        do více než dvou metrů!
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>SSSSSssssssssSSSSS!</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Často lezeme
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        na stromy.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Sluníme se.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Lenošíme.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Dokud ovšem
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        nedostaneme hlad.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>SSSSsssssssSSSS!</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Žereme maso.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Smlsneme si
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        na menších
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        savcích,
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        ptácích.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>SSSsssSSS!</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Jsme škrtiči.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Neusmrcujeme jedem.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Vyčkáváme v záloze na oběť.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        V pravý čas se na ni rychle vymrštíme.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Obtočíme ji smyčkami svalnatého těla a škrtíme.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>Umíš rozevřít ústa tak, že by se ti tam vlezlo celé kuře?</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        My to dokážeme díky pružně propojeným čelistem.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>KDYŽ SEŽEREME NĚCO VELKÉHO, MŮŽEME BÝT CHVÍLI PĚKNĚ TLUSTÉ.</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Zvíře totiž nekoušeme. Spolkneme ho prostě jako jedno sousto.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Postupně všechno strávíme a zase zhubneme.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Někteří lidé nám to závidějí.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>SSSSsssSSSS!</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Na čelistech
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        máme
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        tepločivné jamky.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Je to něco jako nos.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Cítíme teplotu okolí,
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        a tak poznáme
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        kořist i ve tmě.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>SSSSssssSSSS!</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Klademe vajíčka.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Třeba třicet.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Zahříváme je
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        třesem svalů.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>Když je ti zima,</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>třeseš se podobně.</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        <Text style={styles.strong}>SsssssssssssS!</Text>
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Jsme celkem společenské.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Lezeme k lidem na návštěvy.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Když jsou na nás hodní,
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        chytáme jim myši.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Žijeme
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        u protinožců
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        v Austrálii.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Samy
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        ale
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        nohy
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        ne-
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        má-
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        me.
        </AnimalText>
        <AnimalText style={{textAlign: 'center'}}>
        Ts!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
