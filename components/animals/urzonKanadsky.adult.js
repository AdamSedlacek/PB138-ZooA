import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/urzonKanadsky/01.jpg'),
  require('../../images/animals/urzonKanadsky/02.jpg'),
  require('../../images/animals/urzonKanadsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/urzonKanadsky/01-thumb.jpg'),
  require('../../images/animals/urzonKanadsky/02-thumb.jpg'),
  require('../../images/animals/urzonKanadsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Urzoni kanadští, latinsky <Text style={styles.italic}>Erethizon dorsatum</Text>, jsou hlodavci obývající převážně smíšené lesy Severní Ameriky. Ačkoliv vzhledem připomínají dikobraza, mají s&nbsp;ním jen málo společného.
        </AnimalText>
        <AnimalText>
          Jsou to samotáři, dny tráví spánkem ve skalních rozsedlinách či dutinách stromů, noci potom sháněním potravy. Jako býložravci se živí například pupeny, květy, výhonky, listím, jehličím, plody a kůrou stromů. Za potravou však nechodí daleko, v&nbsp;létě okolo 100&nbsp;metrů, v&nbsp;zimě mnohem méně. Používají stále ty samé vyšlapané cestičky a vyhýbají se kontaktu s&nbsp;jinými příslušníky svého druhu. Samotu porušují jen v&nbsp;období páření, které probíhá na podzim nebo v&nbsp;zimě. K&nbsp;plození potomků patří rituál, kdy samec svou vybranou samici označí tím, že ji pomočí. Samice jsou v&nbsp;říji jen pár hodin; pokud během té doby nedojde k oplodnění, přibližně po měsíci se dostanou do říje podruhé. Po 7&nbsp;měsících březosti se rodí jedno vyvinuté mládě. Jeho tělo již v&nbsp;tu dobu pokrývají měkké ostny, které do pár hodin po narození ztvrdnou. Již druhý den je schopno šplhat po stromech jako jeho rodiče. Samice svá mláďata kojí 2&nbsp;týdny až 2&nbsp;měsíce v závislosti na tom, kolik potravy mají k&nbsp;dispozici. Urzoni dospívají přibližně ve 3–4&nbsp;letech, dožívají se až 20&nbsp;let.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Svůj nepříliš vyvinutý zrak si urzoni kompenzují vynikajícím čichem a sluchem. Silné ostré drápy jim umožňují bez sebemenších obtíží šplhat po stromech. Dospělí jedinci měří přibližně 65–86&nbsp;centimetrů a váží 4–7&nbsp;kilogramů. Jejich největší předností je však 30&nbsp;tisíc dutých ostnů o&nbsp;délce 10–15&nbsp;centimetrů, kterými mají pokryta záda a ocas. Ačkoliv urzoni neútočí, jsou skvělí obránci – v&nbsp;případě potíží za sebe nechají mluvit právě tyto ostny. Útočníci si své záměry většinou rychle rozmyslí. Pokud však neutečou a zdrží se v&nbsp;blízkosti urzonů, ti do nich začnou svými ostny nacouvávat. Původní útočník, nyní oběť, se v&nbsp;tu ránu dostane do ohrožení života. Urzoní ostny jsou totiž zakončeny mikroskopickými háčky, které se z&nbsp;těla špatně vytahují, a když se dostanou až do svalů, za pomoci svalových stahů se posunují hlouběji a hlouběji, což může mít pro oběť někdy až smrtelné následky. Kvůli této dovednosti jsou urzoni ve své domovině často v&nbsp;nemilosti – chodí za potravou k&nbsp;lidským obydlím, kde se dostávají do konfliktu s&nbsp;domácími mazlíčky, kteří si ne vždy stihnou nebezpečí dlouhých ostnů uvědomit. Pokaždé však urzony ostny nezachrání – proti jejich obraně se naučili bojovat například rosomáci či kuny rybářské. Jednoduše urzona převrátí na záda a zaútočí na jeho nekryté břicho.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          V&nbsp;naší zoo chováme hned dva urzony – samce Bodláčka, který k&nbsp;nám přijel v&nbsp;roce 2014 a pochází ze soukromého chovu, a samici Liaru, která k&nbsp;nám o&nbsp;necelý rok později přicestovala ze zoo v&nbsp;Nizozemsku.
        </AnimalText>
        <AnimalText>
          Přestože tato zvířata pochází ze severských oblastí a na chladno jsou zvyklá, s&nbsp;naší zimou těžce bojují – hlavně tedy s&nbsp;vlhkem, které ji doprovází. Proto zimní období tráví urzoni schovaní v&nbsp;zázemí a čekají, až se zase oteplí a vzduch se vysuší. Z&nbsp;téhož důvodu je velmi obtížné je v&nbsp;našich podmínkách rozmnožovat. O&nbsp;to větší úspěch jsme zaznamenali 9.&nbsp;července 2016, kdy se v&nbsp;naší zoo narodil malý urzoní sameček.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
