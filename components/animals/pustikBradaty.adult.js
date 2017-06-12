import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/pustikBradaty/01.jpg'),
  require('../../images/animals/pustikBradaty/02.jpg'),
  require('../../images/animals/pustikBradaty/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/pustikBradaty/01-thumb.jpg'),
  require('../../images/animals/pustikBradaty/02-thumb.jpg'),
  require('../../images/animals/pustikBradaty/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Sovy s&nbsp;kulatou hlavou, šedivou tváří a žlutýma očima. Vidíte bílá peříčka v&nbsp;půlkruzích z&nbsp;vnitřní strany kolem očí až pod zobák? To jsme my, puštíci bradatí. Jelikož bílá peříčka pod zobákem připomínají bradku, někdy se nám též přezdívá vousatí. Anglicky nám v&nbsp;překladu říkají velké šedé sovy. Jsme největší z&nbsp;puštíků a rozpětí křídel máme až metr.
        </AnimalText>
        <AnimalText>
        Doma jsme v&nbsp;Severní Americe, severní Evropě i&nbsp;Asii. Žijeme v lesích do nadmořské výšky 3&nbsp;200&nbsp;m (což jsou zhruba dvě Sněžky). Dožíváme se okolo 20&nbsp;let, v&nbsp;zoo i&nbsp;40&nbsp;let. Náš největší nepřítel je třeba výr virginský – jen se sami podívejte, jak napruzeně se tváří. Určitě nám závidí, že nám neodstávají uši jako jemu. 
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Slyšeli jste už přirovnání: létat tiše jako puštík? Ne? To proto, že náš let ještě nikdo neslyšel. Haha! Ne, vážně. Lidi o&nbsp;nás mnohdy ví jen díky stopám ve sněhu, poté co jsme byli na lovu. Díky vynikajícímu sluchu dokážeme vypátrat a zaměřit hraboše pohybujícího se pod sněhem v&nbsp;hloubce až 60&nbsp;cm. Aktivní jsme převážně za soumraku, v&nbsp;noci, ale i&nbsp;za svítání. V&nbsp;obě, kdy pečujeme o&nbsp;mláďata, se v&nbsp;případě potřeby letí lovit i&nbsp;za dne. Živíme se převážně drobnými hlodavci, jako jsou hraboši, lumíci, norníci a veverky. Občas ulovíme i&nbsp;větší savce do velikosti zajíce a ptáky do velikosti kachny, případně i&nbsp;žáby.
        </AnimalText>
        <AnimalText>
        Mimo hnízdění jsme samotáři. Samci připravují hnízdečko lásky sami, většinou přestavějí hnízdo nějakého jestřába či vrány, a pak nám podstrojují romantické večeře a předvádějí se v&nbsp;letu, aby si nás získali.  
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Preferujeme hnízda na pahýlech starých stromů nebo v&nbsp;jejich dutinách, kam snášíme obvykle 2–5&nbsp;vajec, pokud se chlap umí postarat a je dost potravy. Někdy náš partner dokonce hladoví, aby svou rodinu nakrmil, takže vydržovat víc partnerek se nevyplatí a žijeme v&nbsp;trvalých párech. O&nbsp;vejce se staráme samy, ale potravu pro vylíhnutá mláďata už zajišťujeme oba. V&nbsp;případě jejich ohrožení neváháme napadnout velkou šelmu i&nbsp;člověka. Takže od hnízda si držte odstup, jasné? Naše zlatíčka opouští hnízdo ve třech až čtyřech týdnech, jakmile se naučí dobře šplhat. 
        </AnimalText>
        <AnimalText>
        Ještě by vás mohlo zajímat něco o&nbsp;našem houkání. Hlubokým „huuu-uuu-uuu-uuu“, které trvá asi 6–8&nbsp;sekund, opakujeme je po 15–30&nbsp;sekundách a je slyšet až 800&nbsp;metrů, si prohlašujeme své teritorium. Máme houkání i&nbsp;pro jiné příležitosti, třeba z&nbsp;radosti, když nám partner přinese jídlo. Ale nemyslete si, že sovy jen houkají! Umíme i&nbsp;řadu dalších zvuků, když nás kolem hnízda něco rozruší nebo nám hrozí nebezpečí. 
        </AnimalText>
        <AnimalText>
        Tak dost povídání, teď je ten správný čas na to přesvědčit se, jestli moje peříčka pod zobákem skutečně připomínají bradku. Co myslíte?
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
