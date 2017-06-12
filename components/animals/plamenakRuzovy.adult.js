import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/plamenakRuzovy/01.jpg'),
  require('../../images/animals/plamenakRuzovy/02.jpg'),
  require('../../images/animals/plamenakRuzovy/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/plamenakRuzovy/01-thumb.jpg'),
  require('../../images/animals/plamenakRuzovy/02-thumb.jpg'),
  require('../../images/animals/plamenakRuzovy/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Plameňák růžový je díky své barvě obvykle definovaný jako velký růžový pták. Dorůstá velikosti nadprůměrného hobita, tedy zhruba 120–145&nbsp;cm. Jeho křídla mají v rozepjatém stavu od 140&nbsp;do&nbsp;165&nbsp;cm (kdyby se postavil na špičku křídla, převyšoval by sebenadprůměrnější trpaslíky). Jako správný pták je ale na svůj vzrůst velmi lehký – jeho váha se pohybuje v rozmezí 2&nbsp;až&nbsp;4&nbsp;kg.
        </AnimalText>
        <AnimalText>
          Plameňáci růžoví jsou společenský druh, žijí v&nbsp;koloniích po stovkách i&nbsp;tisících jedinců. Najít plameňáky je možné ve Středomoří, v&nbsp;Asii (ve dvou velkých „pruzích“ – na jihozápadním pobřeží Saúdské Arábie a v&nbsp;dlouhém pásu od Iráku přes Írán do Pákistánu a Indie), v&nbsp;Africe (na mapě tvoří jejich osídlení véčko, na západě je možné nalézt je v&nbsp;pruhu kolem pobřeží od Konga až do Jihoafrické republiky, ze které se táhne druhá nožička „V“ až do Etiopie a Eritrey) a na Madagaskaru.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Na všech těchto místech vyhledávají místa s dostatkem potravy a vody do výšky zhruba jednoho metru. Sídlí obvykle ve slaných nebo alkalických jezerech (pro chemiky možno dodat, že až do pH&nbsp;11). Potravu shání ve dne i&nbsp;v&nbsp;noci, a to svým vlastním specifickým způsobem – v zobáku filtrují vodu, kterou nabírají u&nbsp;dna, a tak loví korýše, měkkýše, červy či plankton. Své mladé krmí ale sekretem z&nbsp;volete, tzv.&nbsp;„voletním mlékem“.
        </AnimalText>
        <AnimalText>
          Plameňáci hnízdí v koloniích – z&nbsp;bahna nebo drobného kamení a naplavenin si staví hnízda, která jsou od sebe vzdálena méně než půl metru. Hnízdí, stejně jako nocují, na písečných březích, na mělčinách nebo ostrůvcích ve větších vodních plochách.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Do zmiňovaných hnízd snáší plameňáci obvykle po jednom vejci. Mláďata nevyrůstají jako rozmazlení jedináčci, ale šedivá plameňátka tvoří jakési školky. Už ve dvou týdnech se jim zakřivuje zobák, což je zásadní, aby mohla přijímat potravu. Když se dobře živí, vyrostou z&nbsp;nich pořádně růžoví plameňáci, což je důležité pro jejich další rozmnožování. Vybledlého plameňáka s&nbsp;nedostatkem karotenů, které způsobují typickou růžovou barvu, si žádná samička nevybere. A to vysvětluje, proč se v seriálu Kauzy z&nbsp;Bostonu právníci rádi parádí jako plameňáci.
        </AnimalText>
        <AnimalText>
          Mimochodem, plameňáčí výška dala pěkně zabrat Johnu Audubonovi, který si vzal za své malovat ptáky v&nbsp;životní velikosti. Jelikož v&nbsp;roce 1832, kdy maloval plameňáka, nebylo možné sehnat papír ve větším formátu než A2, musel plameňáka růžového pořádně pokrčit.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
