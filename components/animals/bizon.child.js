import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/bizon/01.jpg'),
  require('../../images/animals/bizon/02.jpg'),
  require('../../images/animals/bizon/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/bizon/01-thumb.jpg'),
  require('../../images/animals/bizon/02-thumb.jpg'),
  require('../../images/animals/bizon/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Herdek pazneht, co to slyší mé bizoní uši? Naši vzácní hosté už jsou tady. To abychom přestali vířit prach, aby si nás mohli prohlédnout!
        </AnimalText>
        <AnimalText>
        Jistěže mluvíme o&nbsp;vás, milí návštěvníci. Vyčmuchali jsme vás už ve chvíli, kdy jste vstupovali do brány zoo, protože čich máme vskutku výborný. Ani se sluchem na tom nejsme zle. Jen prohlédnout si vás moc nedokážeme, protože zrak máme celkem slabý a brýle pro bizony ještě nikdo nevymyslel.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Kochejte se pohledem na náš krásný výběh, ale nechoďte k&nbsp;němu moc blízko, a už vůbec ne dovnitř. Mohlo by se stát, že vás omylem kopneme zadní nohou nebo šťouchneme svými rohy. Naši mohutnou postavu zdůrazňuje hrb, který tvoří výběžky obratlů a svaly. Přestože vypadáme těžkopádně, běžet dokážeme tak rychle, že bychom si na městské silnici museli dávat velký pozor, aby nám policisté nedali pokutu. Žereme jen trávu, výhonky a větvičky, takže nemusíme lovit a svoji sílu si šetříme na souboje. Každý bizon se totiž snaží poprat o&nbsp;dámu, která by uměla dobře pečovat o&nbsp;tele po dobu až čtyř roků.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Bizoni se často objevují třeba v&nbsp;knížkách o&nbsp;Vinnetouovi, a tak byste si mohli myslet, že je nás v&nbsp;Americe hodně. Kdysi se nás na Divokém západě proháněly opravdu miliony, ale když přijeli před dvěma sty lety osadníci z&nbsp;Evropy, náš počet se hodně snížil. Dnes už se situace zlepšuje a najdete nás v&nbsp;některých amerických národních parcích a v&nbsp;ohraničených oblastech divočiny.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
