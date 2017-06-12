import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/varanKomodsky/01.jpg'),
  require('../../images/animals/varanKomodsky/02.jpg'),
  require('../../images/animals/varanKomodsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/varanKomodsky/01-thumb.jpg'),
  require('../../images/animals/varanKomodsky/02-thumb.jpg'),
  require('../../images/animals/varanKomodsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Bylo, nebylo… Za devatero horami, devatero řekami a devatero lesy žil jeden drak. Pocházel z&nbsp;rodu indonéských komodských draků, takzvaných varanů, a jmenoval se Rototom.
        </AnimalText>
        <AnimalText>
          Ten drak nebyl vůbec obyčejný, jak by se mohlo zdát. Na rozdíl od ostatních draků neměl tři hlavy ani nechrlil oheň, dokonce ani nejedl princezny. Ale nic z&nbsp;toho mu neubíralo na jeho pohádkové hrůze.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Bájemi opředený drak Rototom se dlouho vyhýbal vědcům a badatelům. Snad právě proto si vybudoval pověst krvelačné příšery, která nechybí v&nbsp;žádné pohádce. Tradovalo se o&nbsp;něm, že je veliký jak obr a princezny zabíjí jen pouhým dechem plným bakterií ze svých nečištěných zubů. Proto se ho všichni báli a vyhýbali se mu.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Až teprve nedávno se objevil udatný Honza, který odhalil drakova tajemství. Tak předně – Rototom i&nbsp;jeho příbuzní dají před princeznami přednost spíše mršinám, nebo dokonce svým druhům. Vlastně je můžeme označit spíš za kanibaly než princeznožrouty. Ale nejraději ze všeho mají čerstvou stravu, kterou si sami uloví – od ptáků a plazů až po savce o&nbsp;velikosti buvola. A kořist nezabíjí smrdutým dechem, ale hezky si na ni počíhají, zakousnou se a vyloučí do jejího těla jed. Ten jednak zabrání srážlivosti krve, proto napadené zvíře postupně vykrvácí, a taky působí jako prášky na spaní. Tudíž je oběť unavená a zanedlouho se vysílí natolik, že už pro tyto draky není nejmenší problém ji ideálně celou nebo po větších kusech spolknout. A pak tráví a tráví a nechávají si zdát pohádky o&nbsp;trojhlavých dracích. Ale bez princezen, ty jsou na jejich vkus moc hubené.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
