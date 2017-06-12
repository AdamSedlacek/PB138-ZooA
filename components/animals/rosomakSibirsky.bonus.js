import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/rosomakSibirsky/01.jpg'),
  require('../../images/animals/rosomakSibirsky/02.jpg'),
  require('../../images/animals/rosomakSibirsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/rosomakSibirsky/01-thumb.jpg'),
  require('../../images/animals/rosomakSibirsky/02-thumb.jpg'),
  require('../../images/animals/rosomakSibirsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        <Text style={styles.strong}>Rosomáčí braková činohra o&nbsp;dvou jednáních aneb Je nutno všechno přerýt</Text>
        </AnimalText>
        <AnimalText>        
        </AnimalText>
        <AnimalText>
        Jednání první
        </AnimalText>
        <AnimalText>
        <Text style={styles.italic}>Dobře zařízený, prostorný výběh. Po bocích skaliska ozdobená zelenými trsy exotické trávy, vpravo vodopád. Na stěnách bohaté elektrické hrazení. V&nbsp;pozadí je vidět několik vzrostlých stromů. V&nbsp;přední části se rozprostírá udržované jezírko. Podlaha přírodní, hliněná. Polena, klády a roští tvoří uprostřed výběhu neútulný přístřešek. Vlahé jarní ráno, východ slunce.</Text>
        </AnimalText>
        <AnimalText>
        </AnimalText>
        <AnimalText>
        <Text style={styles.italic}>Rosomák Ivan nese v zubech kus masa. Rosomačka Nataša se mlčky dívá na svůj odraz ve vodě.</Text>
        </AnimalText>
        <AnimalText>
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan</Text> <Text style={styles.italic}>(pomlaskávaje)<Text><Text style={styles.strong}>:</Text> Natašo, co žes dnes po ránu tak tichá?
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša</Text> <Text style={styles.italic}>(nepomlaskávajíc)</Text><Text style={styles.strong}>:</Text> Och, Ivane, trápí mě sen, jenž se mi v&nbsp;noci prohnal hlavou. Jako to nejdelší paví péro zlechtal mé synapse, a teď nevím, vskutku nevím, jak si jej mám vyložit.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan:</Text> Zapomeň na vše, ty moje severní hyenko, a nabídni si kousku šťavnatého masa. Pohleď, tady mám zrovna jeden pěkný.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša</Text> <Text style={styles.italic}>(odvracejíc se od masa)</Text><Text style={styles.strong}>:</Text> Ó&nbsp;ne, právě tak jen zesiluješ mé největší trápení.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan:</Text> Co že tě, lesní duchu, toliko rozplačtilo? Jen pověz, co ve snách ti před očima proběhlo.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša:</Text> Ivánku, rozvažovals někdy nad tím, jaké by to bylo žít někde jinde?
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan:</Text> Ó&nbsp;ne, snad nemáš nějakého problému s&nbsp;naším obydlím?
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša:</Text> Nikoli, Ivánku, postaráno o&nbsp;nás je nadprůměrně. Však přesto mi zde něco chybí. Nějaký velký… čin! Jenže takové tu nemožno dělat a jediný zdejší samec jen polehává a žere. Vždyť i&nbsp;maso ti létá přímo pod čumák!
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan:</Text> A to ti vadí? Tobě též maso létá pod čumáček jako ptáček.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša:</Text> Víš, chtěla bych tě jednou vidět, jak skolíš velikého losa. O&nbsp;tom sen můj byl. <Text style={styles.italic}>(zasněně, pateticky)</Text> Krásnooký rosomák, široké tlapy, běhá po běloskvoucím ledu. Žene před sebou statného losa. Utíkají dnem i&nbsp;nocí, až nakonec kopytník padá k&nbsp;zemi a rosomákovy pevné čelisti svírají hrdlo toho parohatého. Osmatřicet zubů zarývá se do výživné šíje a připravuje pokrm pro milou rosomákovu. <Text style={styles.italic}>(konec silně patetické pasáže, následuje méně, avšak stále patetická pasáž)</Text>
        </AnimalText>
        <AnimalText>
        Ivánku, takový ty kdybys byl. Jenže nic takového pro mě neuděláš a já se mohu jen zahalit do tmavého kožichu a lkát.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan:</Text> Však láska naše stále přetrvává, a to je hlavní, Nataško.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša:</Text> Žádná láska nepřetrvá, nedokážeš-li mi, žes též statný samec, jenž skoliti losa schopen jest.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan</Text> <Text style={styles.italic}>(nevěřícně hledě před sebe)</Text><Text style={styles.strong}>:</Text> A jak to pro tě mohu udělat, když s&nbsp;přežvýkavci nesdílíme výběh?
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša:</Text> Ó,&nbsp;ty kdybys zubisky svými přetrhal ten elektrický plot či se podhrabal pod skalou vspod, to lásku by nám navrátilo a potomky snad i&nbsp;v&nbsp;lůno nadělilo.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan:</Text> Však žádný z&nbsp;nás nemá na medvěda z&nbsp;výběhu sousedního. Já losů skolím pro tě snad tisíce, však obří medvěd, dle pověstí snad i&nbsp;náš otec, zastihl by nás kletbou zlou, že do teritoria mu lezeme.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša:</Text> Víš dobře, že praotec Rosomák nám celý svět stvořil. Ó,&nbsp;kdyby viděl, jak si žijeme nyní. Ani doupě v&nbsp;zemi nemáme, jen vprostřed nachází se otřesné přístřeší.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan</Text> <Text style={styles.italic}>(po dlouhém zamyšlení)</Text><Text style={styles.strong}>:</Text> Slyšelas o&nbsp;tom, jak se v světě protestuje? Což tak roznosit polena všude okolo? Což vyhrabat doupata?
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša:</Text> Ó,&nbsp;jak to bych ocenila, míti zde pohodlné doupě.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan:</Text> Udělám vše, co přát si budeš. Slibuješ pak, že láska se nám obnoví? Pak možná potomstvo zplodíme a stvoříme si zde nový svět.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša:</Text> <Text style={styles.italic}>(šťastně přikyvuje)</Text>
        </AnimalText>
        <AnimalText>      
        </AnimalText>
        <AnimalText>
        Jednání druhé
        </AnimalText>
        <AnimalText>        
        </AnimalText>
        <AnimalText>
        <Text style={styles.italic}>Uplynuly týdny, měsíce a v&nbsp;létě norský rosomák Ivan dokončil výkop padesáti nor. Výsledek oslavuje s&nbsp;Natašou. Roznášejí polena a roští z&nbsp;neútulného přístřešku a dekorují výběh.</Text>
        </AnimalText>
        <AnimalText>      
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša</Text> <Text style={styles.italic}>(spolu s&nbsp;Ivanem si připíjí z&nbsp;jezírka)</Text><Text style={styles.strong}>:</Text> Ó,&nbsp;Ivane, tys nezklamal. Vím, nikdy nedokážeš svou sílu skolením losa. Jsi však velký architekt s&nbsp;velkými pracovitými tlapami, a to je pro mě mnohem více.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan:</Text> V&nbsp;těch tlapách svých si tě teď toužím pochovat.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša:</Text> <Text style={styles.italic}>(skáče do náručí Ivanovi)</Text>
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan:</Text> Och, ty má nekonečně krásná matrjoško! Jak dlouho jsem už netěžkal třináct spanilých kilogramů na svém klíně!
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša:</Text> Och, vždyť já mohu být ještě nekonečnější! Tvůj metrový trup, ten korpus svěcený, unese jistě o&nbsp;kilogram víc. Což pořídit si mládě jedno?
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan:</Text> Klidně pět jich unesu!
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša:</Text> Ó,&nbsp;jak plesá srdce mé! Teď v létě je pro to nejlepšího času!
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan:</Text> Ó,&nbsp;zajisté!
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša:</Text> Ó,&nbsp;Gulo!
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Ivan:</Text> Gulo!
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Nataša:</Text> Gulo!
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>Společně</Text> <Text style={styles.italic}>(pomlaskávajíce)</Text><Text style={styles.strong}>:</Text> Gulo, gulo, gulo!
        </AnimalText>
        <AnimalText>        
        </AnimalText>
        <AnimalText>
        <Text style={styles.italic}>Pomalu se zešeřuje. Do ticha občas zazní slova ruských lingvistů zkoumajících alternace vokalických hlásek v&nbsp;jazyce rosomáků.</Text>
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
