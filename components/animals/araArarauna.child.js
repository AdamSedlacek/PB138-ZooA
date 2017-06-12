import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/araArarauna/01.jpg'),
  require('../../images/animals/araArarauna/02.jpg'),
  require('../../images/animals/araArarauna/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/araArarauna/01-thumb.jpg'),
  require('../../images/animals/araArarauna/02-thumb.jpg'),
  require('../../images/animals/araArarauna/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Ahoj děti!
        </AnimalText>
        <AnimalText>
        Vzpomínáte si na večerníček o&nbsp;slečně Dorotce a jejím papouškovi? Ten papoušek je můj kamarád, ara ararauna jako já. No vážně!
        </AnimalText>
        <AnimalText>
        Naši předkové pochází z&nbsp;Jižní Ameriky, kde ary osidlují především amazonský prales. V&nbsp;brněnské zoo jsme tři zástupci tohoto druhu. Já se jmenuji Pedro, moje slečna Koko a náš kamarád Eda. Já jsem nejstarší, další v&nbsp;pořadí je Eda, který se narodil v&nbsp;únoru&nbsp;2001, a nejmladší je slečna Koko, ta se narodila až v&nbsp;roce&nbsp;2008. Ptáci jsme poměrně dlouhověcí, v&nbsp;lidské péči se dožíváme až 80&nbsp;let!
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Od ostatních ptáků nás rozeznáte velice snadno. Už z&nbsp;dáli na vás bude svítit naše žluté bříško, modrá křídla a zelená čepička na hlavě. Určitě si také všimnete velkého zahnutého zobáku, kterým rádi louskáme různé oříšky. Pochutnáme si i&nbsp;na pupenech a mladých výhoncích větví různých stromů. Když máme napapaná bříška, můžeme vážit až 1,4&nbsp;kg, to si můžete představit jako pytlík mouky a ještě půlku k&nbsp;tomu. Na výšku měříme až 84&nbsp;cm, to je skoro jako šířka vaší postele. Když roztáhneme křídla, měříme až 112&nbsp;cm. To je jako když roztáhnete ruce, jak nejvíc můžete. 
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Až ary dospějí, většinou si najdou partnera na celý život. Skvělým příkladem jsme já a Koko. I&nbsp;když pak letí páry v&nbsp;hejnu, vždycky se drží u&nbsp;sebe a téměř se dotýkají křídly, podobně jako když se dospělí lidé drží za ruce. 
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
