import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/kiangVychodni/01.jpg'),
  require('../../images/animals/kiangVychodni/02.jpg'),
  require('../../images/animals/kiangVychodni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/kiangVychodni/01-thumb.jpg'),
  require('../../images/animals/kiangVychodni/02-thumb.jpg'),
  require('../../images/animals/kiangVychodni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Kiangové východní (<Text style={styles.italic}>Equus kiang</Text>). Neohrožení kopytníci, kteří den co den putují otevřenou krajinou ve výškách dosahujících až 4&nbsp;800&nbsp;metrů nad mořem. Procházejí rovinami, údolími i&nbsp;kopci. Jsou zvyklí na nomádský styl života, a tak se dennodenně přemisťují tam, kde se nažerou alespoň trochy trávy. Nasyceni se vracejí zpět do prachu rozlehlých plání.
        </AnimalText>
        <AnimalText>
        Největší populace kiangů na světě žije v&nbsp;Tibetu. Naleznete je i&nbsp;na zbytku území Čínské lidové republiky, v&nbsp;menší míře se druh rozšířil také do severní části Pákistánu, Indie a Nepálu.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Jedná se o&nbsp;největší zástupce divokých asijských oslů, ale více než oslům se podobají divokým koním Převalského.
        </AnimalText>
        <AnimalText>
        Zejména někteří samci si svůj život dokážou zařídit vskutku chytře. Bojují spolu a nejlepší z&nbsp;nich může upoutat skupinu samic. Sotva která klisna odolá hřebci barevnému jako latte macchiato, a tak má samec možnost vést a chránit pěti- až dvacetihlavé stádo. Jeho nepřáteli jsou kromě vlků také jiní hřebci, kteří se drží buď v&nbsp;mládeneckých skupinách, nebo vedou samotářský život.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Vůdčí hřebci bývají agresivní i&nbsp;vůči klisnám a mláďatům. Dokonce i&nbsp;v&nbsp;brněnské zoo se stalo, že se samec k&nbsp;narozenému hříběti choval jako ke konkurenci, tudíž musel být na čas od mláděte s&nbsp;matkou oddělen. Po několika týdnech samec mládě přijal. V&nbsp;přírodě se klisny „domácímu násilí“ vyhýbají tak, že se na jaře před porodem vzdálí od stáda. Zpět se vracejí až v&nbsp;létě téhož roku.
        </AnimalText>
        <AnimalText>
        Kiangy se lidem nikdy nepodařilo domestikovat. Číňané je lovili pro kůži a maso, naopak Tibeťané je odedávna uctívali jako posvátná zvířata. Ostatně když vynecháme ve jméně těchto divokých lichokopytníků jedno písmeno, vyjde nám překvapivě anglické slovo „king“. Jsou to prostě takoví „králové“ Tibetské náhorní plošiny. Králové s&nbsp;oslíma ušima, kteří se v&nbsp;případě ohrožení nebojí kousat ani kopat.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
