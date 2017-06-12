import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/skunkPruhovany/01.jpg'),
  require('../../images/animals/skunkPruhovany/02.jpg'),
  require('../../images/animals/skunkPruhovany/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/skunkPruhovany/01-thumb.jpg'),
  require('../../images/animals/skunkPruhovany/02-thumb.jpg'),
  require('../../images/animals/skunkPruhovany/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Skunk je šelma, která se v&nbsp;přírodě dožívá 2–3&nbsp;let a v&nbsp;lidské péči 6–10&nbsp;let. U&nbsp;nás chováme tři skunky – dvě samičky a jednoho samečka. Samec je zpravidla větší než samice, ale samice má zase delší ocas.
        </AnimalText>
        <AnimalText>
        Dříve, když ještě byly v&nbsp;módě kožešiny, byl kožich skunka velmi cenný. V&nbsp;současné době už tento trend naštěstí pominul. A&nbsp;jak takový kožíšek skunka pruhovaného vypadá? Jak už název napovídá, na husté černé srsti září dva bílé pruhy. Ty vedou od hřbetu po ocas. Když je skunkův ocas svěšený na zem, ani byste si nevšimli, že nějaký má. A&nbsp;přitom je jeho ocas stejně dlouhý jako samotné tělo. Když je skunk klidný, vypadá jako veliká chlupatá kulička. Ale běda, když ho naštvete nebo vylekáte! Skunk zvedne svůj načepýřený ocas nahoru tak, aby vypadal dvojnásobně větší. Nohy má skunk krátké, a kvůli tomu se pohybuje velmi pomalu. Na nohou mu rostou velké a ostré drápy. Ty používá při vyhrabávání nory, ve které spí. Nicméně pokud najde noru, kterou si vyhrabalo jiné zvíře, nebo přírodou vytvořenou díru, rád si do ní vleze. Čumák i&nbsp;uši skunka jsou tmavé a holé jako u&nbsp;myši či potkana. Čich skunka je velice dobrý – používá ho, aby si našel potravu.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Skunk je noční tvor. Přes den spí zalezlý v&nbsp;noře a na lov chodí v&nbsp;noci. Samci jsou samotáři a loví si vlastní potravu. Samice se většinou zdržují ve skupinkách se svými mláďaty a ostatními samicemi. Samice mívají pět až šest mláďat, která se narodí po dvou měsících březosti. Čerstvě narození skunkové jsou hluší a slepí, proto se o&nbsp;ně samice starají. Mláďata mohou zůstat s&nbsp;matkou v&nbsp;noře až jeden rok.
        </AnimalText>
        <AnimalText>
        Skunkové jsou všežravci, jejich jídelníček se řídí místem, na kterém se právě nachází. Mohou žít na otevřených prostranstvích, v&nbsp;obydlených oblastech nebo v&nbsp;lese. V&nbsp;obydlených oblastech se nejčastěji zdržují pod domy a v&nbsp;garážích. Jsou velice přizpůsobiví. U&nbsp;nás v&nbsp;zoo jim dáváme k&nbsp;jídlu hmyz, mršiny i&nbsp;rostliny. Někteří skunkové dokonce dokážou ulovit malého ptáka či savce.
        </AnimalText>
        <AnimalText>
        Skunkové jsou velmi inteligentní a také se umí velmi dobře bránit. Primárně se spoléhají na své výstražné zbarvení, které potencionálního protivníka od útoku odradí. Avšak někdy je protivník agresivní, a tehdy se musí skunk bránit. Nejprve začne hrozit. To znamená, že dupe předníma nohama. Pokud to nezabírá, použije skunk svou nejsilnější zbraň – pach. Jistě jste už o&nbsp;tom slyšeli, ne bezdůvodně se skunkovi přezdívá smradlavý.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Když chce skunk na někoho zaútočit, otočí se k&nbsp;němu zády a vystříkne sekret pachových žláz. Ač je skunk otočen zády, umí mířit přesně na protivníka. Pokud se strefí do jeho očí, způsobí mu velkou bolest, a může mu způsobit dokonce i&nbsp;dočasnou slepotu. Samotný sekret velice zapáchá a jde těžko smýt. Odstranit se dá rajčatovou šťávou nebo jablečným moštem. Takto skunk útočí nejen na lidi, ale samozřejmě i&nbsp;na své přirozené predátory. Těmi jsou lišky, kojoti, výři, draví ptáci nebo třeba psi.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
