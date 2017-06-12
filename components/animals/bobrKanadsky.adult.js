import React, { Component } from 'react';
import { Text } from 'react-native';

import AnimalText from '../animalText';
import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
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
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Bobr kanadský, latinsky <Text style={styles.italic}>Castor canadensis</Text>, anglicky <Text style={styles.italic}>american beaver</Text>, je největší severoamerický hlodavec. Vyskytuje se převážně v&nbsp;jezerech a pomalých tocích Severní Ameriky. Uměle byl vysazen také do Finska, Argentiny a Ruska.
        </AnimalText>
        <AnimalText>
          Jejich chov v&nbsp;naší zoologické zahradě započal v&nbsp;roce 2003, když jsme si jich pět přivezli ze Zooparku Chomutov. Měli jsme pro ně připravený zbrusu nový výběh s&nbsp;jezírkem, z&nbsp;něhož vede nora přímo do bobřího hradu.
        </AnimalText>
        <AnimalText>
          Jsou to opravdu zajímavá zvířata, která mají spoustu vlastností společných s&nbsp;lidmi. Ptáte se, co mohou mít bobři společného s&nbsp;člověkem? Tak například je pro ně velmi důležitý tělesný kontakt. Často se něžně dotýkají a pečují o&nbsp;sebe, což se projevuje třeba tím, že si vzájemně pročesávají srst. Navíc spí pevně přitisknuti k&nbsp;sobě. Jsou věrní a vytvářejí monogamní páry na celý život, což je mezi hlodavci unikátní. Také mají velmi silné rodinné vazby a v&nbsp;jejich noře je důležitá především všeobecná pohoda. To ale neznamená, že se nehádají. Své případné konflikty řeší tak, že spolu prostě nemluví. Navenek se to projevuje tím, že se momentálně odstrčené zvíře drží nějaký čas stranou. Jejich potřeba tělesného kontaktu je však mnohem silnější, a tak je večer zase vídáme spát společně v&nbsp;hromadě těl.
        </AnimalText>
        <AnimalText>
          Mláďata bývají velmi roztomilá. Pokud se jim však něco nelíbí, dokážou naříkat skoro stejně jako ta lidská. V&nbsp;bobří rodině hrají důležitou roli. Do jejich péče se zapojují všichni, především však pomáhají mladí. To je praktické, vyzkouší si totiž výchovu ještě předtím, než opustí rodinu, aby si založili svou vlastní.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Bobři jsou převážně vodní zvířata. Mají až 120&nbsp;cm dlouhé svalnaté tělo podobné spíše suchozemským savcům. Před chladem je chrání hustý, jemný, lesklý kožich kaštanové až téměř černé barvy. Podsada, obvykle zabarvená do tmavě šeda, má mezi chlupy vzduch, a tak udržuje tělesné teplo. Díky ní zůstává kůže stále suchá, a to i&nbsp;při pobytu ve vodě. Pozoruhodným orgánem je však bobří ocas, který je zploštělý a šupinatý. Slouží jako kormidlo při plavání a bobři se o&nbsp;něj také opírají, když se chystají pokácet strom za pomoci robustních předních zubů. V&nbsp;nose a v&nbsp;uších mají klapky, které mohou být pod vodou uzavřeny. Malé oči mají transparentní víčko, tzv.&nbsp;mžurku. Velké drápy na předních nohách bobrům umožňují dobrou manipulaci s&nbsp;potravou. Umějí plavat ihned po narození, ale kvůli provzdušněné kožešině se zpočátku neumějí potápět. Než se to naučí, pohybují se po hladině jako kus korku s&nbsp;větší částí těla vynořenou. Jejich pohyb kormidluje pouze maličký ocas.
        </AnimalText>
        <AnimalText>
          A co bobrům stačí ke spokojenosti? Vodní nádrž na plavání, z&nbsp;ní nora vedoucí do doupěte a samozřejmě také potrava. Nejraději mají kůru a pupeny vrb, ale nepohrdnou ani kořeny, dřevem a některými bylinami.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Všichni je známe jako mistrné budovatele rozsáhlých přehrad. Jsou totiž velmi cílevědomí a pracovití. Mají velkou sílu, dokážou si poradit i&nbsp;s&nbsp;těžkými kusy dřeva a zvládnou také přemístit obrovské množství hlíny. Mnozí lidé si myslí, že jejich činnost v&nbsp;přírodě je destruktivní. Opak je ale pravdou, bobři mají prostě jen odlišný názor na to, jak by měla krajina vypadat. Navíc například v&nbsp;Kanadě regulují vodní toky, což má pozitivní vliv na přítomnost vody v&nbsp;krajině. Dále mokří biotopy, kterým by jinak chyběla vláha, zpomalením toku také zmírňují erozi půdy a v&nbsp;neposlední řadě přednostně kácejí rychle rostoucí stromy a keře. Tím vytvářejí prostor pro pomaleji rostoucí dřeviny a zabezpečují větší druhovou pestrost, kterou ocení jiní živočichové.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
