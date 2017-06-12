import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/pavianAnubi/01.jpg'),
  require('../../images/animals/pavianAnubi/02.jpg'),
  require('../../images/animals/pavianAnubi/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/pavianAnubi/01-thumb.jpg'),
  require('../../images/animals/pavianAnubi/02-thumb.jpg'),
  require('../../images/animals/pavianAnubi/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Exkluzivně vám přinášíme přepis zvukové nahrávky dvou paviánek anubi (<Text style={styles.italic}>Papio anubis</Text>) z&nbsp;Afriky. Je přeložen do češtiny. Všimněte si, že paviáni tvoří hierarchicky uspořádané tlupy. Níže postavení paviáni se snaží získat co největší přízeň výše postavených samic – třeba probíráním srsti. Když se oblíbené samici narodí mládě, její status se ještě posílí…
        </AnimalText>
        
        <AnimalText>
        <Text style={styles.strong}>Anubis:</Text> Papio, vypadáš dnes báječně! <Text style={styles.italic}>(zvuk čumáků třoucích se o&nbsp;sebe na znamení pozdravu)</Text> Jak se daří? Co vůbec dělá ten tvůj obdivovatel?
        </AnimalText>
        
        <AnimalText>
        <Text style={styles.strong}>Papio:</Text> Drahá Anubis, představ si, že zrovna teď zaběhl pro něco k jídlu. Chce se mi zavděčit. Stejně ale neumí shánět žrádlo.
        </AnimalText>
        
        <AnimalText>
        <Text style={styles.strong}>Anubis:</Text> Jak to myslíš?
        </AnimalText>
        
        <AnimalText>
        <Text style={styles.strong}>Papio:</Text> Bydlíme v&nbsp;lese, a tak mi nosí jen ovoce. Když není sezóna, můžeme žrát tak leda pryskyřici. Raději bych šla na trávu jako sousedé ze západu. Povedlo se jim obsadit kus savany.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        <Text style={styles.strong}>Anubis:</Text> Ty si stěžuj! Viděla jsem, jak ti jednou donesl saranče.
        </AnimalText>
        
        <AnimalText>
        <Text style={styles.strong}>Papio:</Text> To bylo výjimečně!
        </AnimalText>
        
        <AnimalText>
        <Text style={styles.strong}>Anubis:</Text> Jede po tobě! <Text style={styles.italic}>(zvuk mrkajícího očního víčka)</Text>
        </AnimalText>
        
        <AnimalText>
        <Text style={styles.strong}>Papio:</Text> Je na mě moc starý!
        </AnimalText>
        
        <AnimalText>
        <Text style={styles.strong}>Anubis:</Text> Pravda, mladší samec je vždycky pro paviánku lepší. Viděla jsi toho mlaďocha, který k&nbsp;nám nedávno přišel z&nbsp;jiné tlupy? Celkem fešák, sotva přestal mutovat.
        </AnimalText>
        
        <AnimalText>
        <Text style={styles.strong}>Papio:</Text> Statná postava, široká ramena, hříva… a špičáky jak cení! V&nbsp;rukou má velkou sílu, a přitom jsou tak jemné, něžné…
        </AnimalText>
        
        <AnimalText>
        <Text style={styles.strong}>Anubis:</Text> Jako bys s&nbsp;ním něco…
        </AnimalText>
        
        <AnimalText>
        <Text style={styles.strong}>Papio:</Text> Včera mi probíral srst!
        </AnimalText>
        
        <AnimalText>
        <Text style={styles.strong}>Anubis:</Text> Aha, tak to tipuju, že máš s&nbsp;výběrem samce jasno. Jsi v&nbsp;tlupě vůdčí samice, tak by to mělo vyjít. Půjčíš mi mládě, až se narodí? Fascinuje mě, že jim roste černá srst. Chtěla bych si ho pohladit.
        </AnimalText>
        
        <AnimalText>
        <Text style={styles.strong}>Papio:</Text> Jsi moje nejlepší přítelkyně. Klidně můžeš být jeho teta! 
        </AnimalText>
        
        <AnimalText>
        <Text style={styles.strong}>Anubis:</Text> Mnohokrát děkuji! <Text style={styles.italic}>(čím dál zřetelnější zvuk vibrujících hlasivek paviánů)</Text> No ne! Už sem oba samci běží! Poperou se o&nbsp;tebe! <Text style={styles.italic}>(zesilující se dusot paviáních tlapek)</Text>
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        …&nbsp;souboj byl bohužel ještě hlasitější než rozhovor paviánek a náš nahrávací přístroj se pro jistotu automaticky vypnul. Bohužel jsme už nikde nedohledali, jestli Papio nakonec zplodila mládě a jestli si udržela oblibu v&nbsp;tlupě.
        </AnimalText>
        <AnimalText>
        Mateřství může totiž pro samice paviánů znamenat velkou výzvu. V&nbsp;roce&nbsp;2000 se v&nbsp;naší zoo narodilo mládě paviánce Polly. Měla vždy výsadní postavení ve skupině, avšak výchovu mláděte jí zkomplikoval oboustranný šedý zákal. Po porodu jí ostatní samice dítě braly a zraňovaly ho. Zoo se proto rozhodla zákal odstranit operačně. Zákrok se zdařil a Polly opět zaujala ve skupině místo první dámy. 
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
