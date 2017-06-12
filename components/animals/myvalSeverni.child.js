import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/myvalSeverni/01.jpg'),
  require('../../images/animals/myvalSeverni/02.jpg'),
  require('../../images/animals/myvalSeverni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/myvalSeverni/01-thumb.jpg'),
  require('../../images/animals/myvalSeverni/02-thumb.jpg'),
  require('../../images/animals/myvalSeverni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
            <Text style={styles.strong}> Milí člověčí kamarádi, těší nás, že jste zavítali k&nbsp;našemu výběhu! Jsme mývali severní a rádi bychom vám povykládali krátký mývalí příběh. </Text>
          </AnimalText>
          <AnimalText>
            Za devatero horami, devatero řekami a jedním Atlantským oceánem, na kontinentu zvaném Amerika, bydlela taková malá roztomilá šelma. Srst měla šedou a její huňatý ocas zdobily tmavé kroužky. Vzrůstem tato šelma jen trochu převyšovala domácí kočky, zato čenich se jí protáhl tak, že dokázala vyčmuchat kdejakého špindíru. Snad proto žila u&nbsp;vody a pečlivě umývala nejen sebe, ale i&nbsp;všechno, co chtěla sežrat. Nikdo jí neřekl jinak než princezna Mývalka.
          </AnimalText>
          <AnimalText>
            Princeznu neohrožoval žádný drak ani čert. A k&nbsp;tomu neuměla kouzlit. Až jednou, když si tak umývala žábu k&nbsp;obědu, připlaval k&nbsp;ní z&nbsp;protějšího břehu princ Mýval. Byl stejně čistotný jako ona, a tak se skamarádili. Měli spolu spoustu dětí a nadále vedli svůj nezajímavý život, pustý draků, čertů a kouzel. Inu, i&nbsp;takhle nudné mohou princezny být.
          </AnimalText>
          <AnimalText>
            Mezitím se rod mývalů rozrůstal a rozšířil se do mnoha koutů světa. Dnes je naleznete dokonce i&nbsp;v&nbsp;Česku, avšak musíte si uvědomit, že ne všichni jsou svatoušci…
          </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Když na les padne tma, vydávají se na lov mývalí loupežníci. Oči skrývají pod černými škraboškami – to aby nebylo vidět, jak moc se jim oči hladem blyští. Mývali sice neumějí moc rychle běhat, ale hbitě šplhají po stromech a přepadávají ptačí hnízda. Milují vajíčka. Ptáčkům vždy pohrozí svými nezatažitelnými drápy, šikovnými prstíky zašmátrají v&nbsp;hnízdě a kořist je jejich. Když si vajíčko ochutí oříšky nebo si k&nbsp;němu přikousnou kousek hmyzu, jsou na vrcholu blaha.
          </AnimalText>
          <AnimalText>
            Ale znáte to, někdy se ani člověku nechce nic dělat, natož aby se vyčerpával lovem. Mývalí loupežnická banda si to moc dobře uvědomuje. Její členové jsou vysoce inteligentní, a tak si našli snadnější kořist – popelnice. Dají se z&nbsp;nich vyhrabat všelijaké delikatesy, zbytky ovoce počínaje, kousky šťavnatého masa konče. Bohužel ale mývali nemají takový smysl pro čistotu, jaký kdysi mívali. Kolem popelnic dělají nepořádek, navíc z&nbsp;kožichu vytřepávají všemožné kousavé breberky.
          </AnimalText>
          <AnimalText>
            To se lidem vůbec nelíbí. Rozhodli se, že pošlou na loupežnické mývaly myslivce, aby jim ukázali, zač je toho loket.
          </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Některých hodných mývalů se ale lidem zželelo a začali je chovat v&nbsp;zajetí. Tihle mývali už nemusejí krást. Dostávají žrádlo skoro do postele. Už si zase můžou připadat jako princezny a princové.
          </AnimalText>
          <AnimalText>
          <Text style={styles.strong}> Ani my, mývali v&nbsp;brněnské zoo, si nestěžujeme. Máme útulný výběh s&nbsp;místy, kde si můžeme hrát na schovávanou, a pan chovatel nám připravuje spousty dobrot. </Text>
          </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
