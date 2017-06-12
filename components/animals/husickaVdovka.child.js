import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/husickaVdovka/01.jpg'),
  require('../../images/animals/husickaVdovka/02.jpg'),
  require('../../images/animals/husickaVdovka/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/husickaVdovka/01-thumb.jpg'),
  require('../../images/animals/husickaVdovka/02-thumb.jpg'),
  require('../../images/animals/husickaVdovka/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          V&nbsp;naší zoo si husičky vdovky žijí společně s&nbsp;plameňáky. Mají pro sebe velké jezírko. Plameňáci jsou jejich kamarádi, podávají husičkám informace o&nbsp;všem, co se kde děje. To proto, že jsou větší a více toho vidí.
        </AnimalText>
        <AnimalText>
          Husička miluje plavání ve vodě, proto se zdržuje především u&nbsp;jezer, bažin či větších řek. Taková místa jsou pro ni výhodná, protože tam roste vysoká, hustá tráva, kam chodí ráda odpočívat. Často si tam udělá svoje hnízdo, které je jenom jednoduchým důlkem v&nbsp;zemi.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Děti, jestli z&nbsp;domova, od babičky nebo alespoň z&nbsp;učebnice znáte husu domácí, musíte uznat, že tahle je úplně jiná, taková menší a drobnější. Má velmi krátký ocas a moc dlouhé nohy. Dokonce nejsou ani oranžové, ale šedomodré. Také má úplně jinak zbarvené peří. Čím to je? Tím, že to vlastně ani husa není, jen má podobné jméno, ale k husám má stejně daleko jako třeba ke kachnám.
        </AnimalText>
        <AnimalText>
          Samečka a samičku husičky vdovky od sebe nerozeznáte, protože mají úplně stejně barevné peří. Jenom jejich mláďata ho mají na hlavě méně nápadné.
        </AnimalText>
        <AnimalText>
          Husička vdovka je všežravá a často se potápí do jezírka, aby si ulovila svoji potravu. Její strava se skládá především z&nbsp;vodního hmyzu, vodních měkkýšů, rostlin a semen.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Když sameček a samička chtějí mláďátka, samička snese 4–13&nbsp;vajec do hnízda na zemi nebo na stromě. Pak skoro měsíc trvá, než se housata vylíhnou. V&nbsp;sezení se střídají oba rodiče, aby vejce byla neustále v&nbsp;teple. Když se jim vylíhnou malá housátka, rodiče začnou trochu pelichat – ztrácet peří. Nějaký čas proto nemohou létat, musí počkat, než jim dorostou pírka nová a krásná.
        </AnimalText>
        <AnimalText>
          Všimněte si, děti, že peří na hlavě husičky vypadá, jako by měla kolem hlavy uvázaný černý šátek. A když se zaposloucháte, možná také uslyšíte, že vdovka vydává nápadné hvízdavé zvuky. Díky jejímu zbarvení peří a tomuto hvízdání ji vždycky zaručeně poznáte.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
