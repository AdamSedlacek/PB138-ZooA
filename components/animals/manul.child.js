import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/manul/01.jpg'),
  require('../../images/animals/manul/02.jpg'),
  require('../../images/animals/manul/03.jpg'),
  require('../../images/animals/manul/04.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/manul/01-thumb.jpg'),
  require('../../images/animals/manul/02-thumb.jpg'),
  require('../../images/animals/manul/03-thumb.jpg'),
  require('../../images/animals/manul/04-thumb.jpg'),  
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Spát a spát, to já mám rád. 
        </AnimalText>
        <AnimalText>
          Když si sklopím uši, nic mě nevyruší. 
        </AnimalText>
        <AnimalText>
          Zbožňuju spánek. Mrúú.
        </AnimalText>
        <AnimalText>
          Počkat, kdo to tu klábosí?
        </AnimalText>
        <AnimalText>
          Kdo si zase umanul mě jen tak bez ohlášení navštívit?
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Abyste věděli, tady platí jen to, co si umanu já, protože jen já se jmenuju <Text style={styles.italic}>manul</Text>. 
        </AnimalText>
        <AnimalText>
          Teď si chci jít trochu schrupnout, takže mě přestaňte otravovat a…
        </AnimalText>
        <AnimalText>
        
        </AnimalText>
        <AnimalText>
        …&nbsp;jejda, to jste vy, přátelé! Pardon, nepoznal jsem vás!
        </AnimalText>
        <AnimalText>
        Přišli jste se podívat na můj huňatý kožich, viďte?
        </AnimalText>
        <AnimalText>
          Jojo, já vím, že mi sluší. Zároveň je dost praktický. V&nbsp;zimě hřeje, v&nbsp;létě chladí, a tak se v&nbsp;něm cítím vždycky příjemně. Pocházím ze stepí ve střední Asii, kde se během dne hodně mění teploty. Kdyby byly takové teploty v&nbsp;Brně, odpoledne byste chodili v&nbsp;plavkách a večer byste se oblékli jako na severní pól.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Kdo že to jsem? Garfield? Nic takového! Říkají mi Manu, jsem míň oranžový a nejsem tlusťoch. To dělá jenom ten kožich, jasné?
        </AnimalText>
        <AnimalText>
          Vybrala mi ho moje manulí kamarádka Rosa, protože ta se v&nbsp;módě vyzná nejlíp. Sice spolu nebydlíme, ale jednou za čas se setkáme a popovídáme si. Kdyby tu se mnou byla pořád, užírala by mi z&nbsp;misky a rozčileně bychom pak na sebe štěkali. Mňoukat totiž moc neumíme. A navíc má teď jiné starosti – pečuje o&nbsp;naše čtyři koťátka.
        </AnimalText>
        <AnimalText>
          Stejně je ale Rosa neobyčejná kočka s&nbsp;krásnýma očima. Černé oční panenky má zrovna tak kulaté jako vy. Až se budete mazlit s&nbsp;nějakou kočkou, všimněte si, že její panenky jsou spíš takové podlouhlé.
        </AnimalText>
        <InPageImage indexes={[3]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Chcete toho o&nbsp;mně vědět víc? Řeknu vám to takhle, kamarádi. Nejsem moc akční. Nejraději se sluním na svém pařezu nebo lovím myši. Když si lehnu k&nbsp;myší díře, vždycky nějaká kořist vyleze a já ji skokem přepadnu. Chce to jen trochu cviku. Nejlepší je lovit ráno a večer, odpoledne se dá tak akorát spát.
        </AnimalText>
        <AnimalText>
          Mrúú. Myslím, že už jsem vám toho pověděl dost.
        </AnimalText>
        <AnimalText>
          Bylo mi ctí se s&nbsp;vámi setkat. 
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
