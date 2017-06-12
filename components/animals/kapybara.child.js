import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/kapybara/01.jpg'),
  require('../../images/animals/kapybara/02.jpg'),
  require('../../images/animals/kapybara/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/kapybara/01-thumb.jpg'),
  require('../../images/animals/kapybara/02-thumb.jpg'),
  require('../../images/animals/kapybara/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
           <Text style={styles.italic}>Milí posluchači, v&nbsp;rozhlasovém pořadu Přerostlá zvířata se teď spojíme s&nbsp;naší reportérkou Mrkví Mrkývkovou, která je tu opět s&nbsp;novou senzací. Slyšíme se?</Text>
        </AnimalText>
        <AnimalText>
          Hohohó! Mrkev zdraví z&nbsp;Jižní Ameriky! Přesně tak, dnes mám pro vás naprostou bombu! Stojím po kolena ve vodě a vedle mě už se rochní obří morče zvané kapybara! Paní kapybaro, jak jste vlastně velká?
        </AnimalText>
        <AnimalText>
          „Kvíí!“
        </AnimalText>
        <AnimalText>
          Pardon, teď jsem vám moc nerozuměla, ale v&nbsp;knize o&nbsp;hlodavcích jasně čtu, že dorůstáte délky kolem jednoho metru a vážíte asi jako sedmdesát kilo mrkví. Lidičky, jen si to představte! Morče velké jako prase! Paní kapybaro, cítíte se jako prase?
        </AnimalText>
        <AnimalText>
          „Krúúú!“
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Nechám vás, abyste se chvíli rozmyslela, a mezitím prozradím posluchačům další perličku. Nebudete tomu věřit, ale paní kapybara má na předních nohách čtyři prsty, na zadních jen tři a mezi všemi prsty má blány! Takové prasokachnomorče! Kdo byl vlastně váš pradědeček?
        </AnimalText>
        <AnimalText>
          „Kuikuikui!“
        </AnimalText>
        <AnimalText>
          Dobře, přejděme raději k&nbsp;další otázce. Potkala jsem vás na souši, ale pro rozhovor jste zvolila jezírko. Udržujete se v&nbsp;kondici plaváním?
        </AnimalText>
        <AnimalText>
          „Chrocht!“
        </AnimalText>
        <AnimalText>
          Vy mi toho asi moc neřeknete, že? No dobrá, mám tu napsané, že jste velmi dobrý plavec a v&nbsp;jezírku jste jako ryba ve vodě. Divím se, že se v&nbsp;ní nescvrknete. Prý vydržíte být celá ponořená až pět minut! Řeknu vám, taky jsem to jednou zkoušela, ale vyplavala jsem hned nahoru. To se prostě nedá udýchat.
        </AnimalText>
        <AnimalText>
          Moment, co mi to děláte? Posluchači, vy to nevidíte, ale teď se o&nbsp;mě kapybara otírá čumákem. To lechtá! Paní kapybaro, takhle si značkujte svoje území, ne mě.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Raději se vraťme k&nbsp;vašemu vztahu k&nbsp;vodě. Slyšela jsem, že do vody skočíte vždycky, když jste v&nbsp;nebezpečí. Nejste tak trochu zbabělec?
        </AnimalText>
        <AnimalText>
           „Grrrž!“
        </AnimalText>
        <AnimalText>
          Oj! To jsem se lekla! Vy máte ale velké přední zuby! Co vlastně žerete? Možná právě z&nbsp;potravy jste tak vyrostla. Co na mě ty řezáky tolik ceníte? Pomoc! Ta dobře běhá! Všemocná nati, zachraň mě! Uááá!
        </AnimalText>
        <AnimalText>
          „Chramst! Tak to máte, milí posluchači. Mrkvové reportérky jsou nejen otravné, ale taky moc chutné. Kromě mrkví si smlsnu i&nbsp;na trávě a vodních rostlinách. Nevím, co si o&nbsp;mně paní reportérka myslela, ale nejsem tak docela přerostlé morče, jen jsem jeho blízká příbuzná. V&nbsp;Amazonii je nás spousta, dokonce často žijeme ve stádech. Na některých místech nás lidé úplně vyhubili, třeba kvůli masu nebo koženým rukavicím. Hodní lidé si nás ale klidně mohou ochočit jako psa.“
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
