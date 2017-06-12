import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/rysKanadsky/01.jpg'),
  require('../../images/animals/rysKanadsky/02.jpg'),
  require('../../images/animals/rysKanadsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/rysKanadsky/01-thumb.jpg'),
  require('../../images/animals/rysKanadsky/02-thumb.jpg'),
  require('../../images/animals/rysKanadsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Rys kanadský, latinsky <Text style={styles.italic}>Lynx canadensis</Text>, je severoamerická kočkovitá šelma žijící převážně v&nbsp;Kanadě. V&nbsp;naší zoo najdete dva zástupce, samce a samičku. Samce jsme získali v&nbsp;roce 2003 z&nbsp;ostravské zoo a samici, jež se narodila ve Spojených státech, jsme roku 2009 obdrželi od soukromého chovatele.
        </AnimalText>
        <AnimalText>
        Oproti u&nbsp;nás známému rysu ostrovidovi (<Text style={styles.italic}>Lynx lynx</Text>) je rys kanadský trochu menší a lehčí. Na délku dosahuje zhruba jednoho metru a v&nbsp;kohoutku mívá okolo půl metru. Vážit může až 17&nbsp;kg, běžná je ale váha mezi 8 a 11&nbsp;kg. Dožívá se 15&nbsp;let.
        </AnimalText>
        <AnimalText>
        Přirozeným domovem rysa kanadského je tajga. Vyskytuje se tedy na většině území Kanady a Aljašky a řídce i&nbsp;v&nbsp;přiléhajících oblastech Spojených států. Tomu odpovídá jak jeho vzhled, tak i&nbsp;obvyklá potrava. Na rozdíl od rysa ostrovida má jeho kanadský kolega výrazně hustší a delší srst a nemá na ní žádné výrazné značky. Její zbarvení se mění s&nbsp;ročním obdobím, v&nbsp;zimě je stříbřitě hnědá a v&nbsp;létě může mít načervenalý odstín hnědé. Packy má kanadský rys širší, aby mohl chodit i&nbsp;v&nbsp;místech, kde je hluboký sníh.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Přestože je rys kanadský zvyklý na tuhé zimy, je to pořád kočka, a tudíž má rád sluníčko. V&nbsp;naší zoo se rysové nejraději vyhřívají ve svém výběhu hned u&nbsp;cesty, takže na ně dobře uvidíte, nebo na svazích prvních dvou kopců opodál.
        </AnimalText>
        <AnimalText>
        Co se potravy týče, tvoří ji z&nbsp;60–97&nbsp;% zajíc měnivý (<Text style={styles.italic}>Lepus americanus</Text>). Průměrná spotřeba rysa jsou jeden až dva zajíci denně.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Zajímavá je kolísavost početnosti populace rysů. Ta je způsobena tím, že podobně kolísá i&nbsp;populace zajíců měnivých, a faktem, že potrava je jediným zásadním regulátorem početnosti rysů. Pravidelnost tohoto kolísání lze dohledat až do raného 19.&nbsp;století v&nbsp;záznamech o&nbsp;obchodu s&nbsp;kožešinami, pro něž je rys dodnes loven (nyní však již řízeně, takže tím jeho populace není ohrožena). Pro ilustraci, populace zajíců, jimiž se rys živí, dosahuje ve špičkách 2&nbsp;300 jedinců na kilometr čtvereční a pouhých 12 jedinců na kilometr čtvereční v&nbsp;době propadu. Početnost populace rysa kanadského se pak pohybuje mezi jedním a 45 na 100&nbsp;kilometrů čtverečních v&nbsp;závislosti na stavu zajíců.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
