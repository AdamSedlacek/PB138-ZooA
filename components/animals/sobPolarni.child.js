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
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Ahoj kamaráde!
        </AnimalText>

        <AnimalText>
        Jmenuji se Karel. Jelikož jsem se v&nbsp;této zoo narodil a znám ji jako svá kopyta, představím ti naši rodinku. Protože jsem společenský tvor, v&nbsp;zahradě žiji s&nbsp;několika dalšími samci i&nbsp;samičkami. Rozeznáš nás od sebe tak, že my kluci jsme obvykle větší a silnější než děvčata. Z&nbsp;nich je nejstarší Dáša, která dorazila z&nbsp;Vídně. Pak tu máme například Pepinu z&nbsp;Finska, Pražandu (hádejte odkud) nebo sobí slečny z&nbsp;Německa.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Chladné počasí nám vůbec nevadí, protože naši předci pocházejí ze severní části planety, kde jsou stále extrémně mrazivé podmínky. Proto musíme být na takovou zimu velmi dobře připraveni. Máme dlouhou srst s&nbsp;dutými chlupy, ve kterých je vzduch, což nám pomáhá udržovat teplo. A&nbsp;chlupatý máme i&nbsp;čenich. Do sněhu se neboříme, protože máme široká kopyta. Ta nám během podzimu a zimy navíc ztvrdnou a vytvoří se na nich ostré hrany, abychom mohli při hledání potravy prolomit led a sníh.
        </AnimalText>
        <AnimalText>
        Jsme býložravci, takže milujeme různé druhy rostlin, trávu, listy a pupeny dřevin, lišejníky, ale i&nbsp;mechy. V&nbsp;zimě dokážeme rostliny najít i&nbsp;pod sněhem, a to díky svému dokonalému čichu. Kvůli potravě se pořádně naběháme, urazíme klidně i&nbsp;5&nbsp;000&nbsp;km ročně, takže bychom přeběhli Evropu od severu k&nbsp;jihu. A&nbsp;to jiný pozemní savec nezvládne!
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Víš, v&nbsp;čem se my sobi od ostatních zvířat s&nbsp;parohy lišíme? Naše sobí slečny mají na hlavě parohy také, i&nbsp;když mnohem menší a jednodušší než kluci. Také jsme jediný jelenovitý druh, kterého si člověk ochočil.
        </AnimalText>
        <AnimalText>
        Určitě znáš z&nbsp;vyprávění našeho kamaráda s&nbsp;červeným nosem. V&nbsp;Americe o&nbsp;Vánocích létá se sáněmi a pomáhá Santovi rozvážet dětem dárky. Ale my jsme v&nbsp;Česku, proto Vánoce trávíme hezky pospolu a čekáme na Ježíška.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
