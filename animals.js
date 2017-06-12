export default animalDb = {
  'tygrSumatersky': {
    name: 'Tygr sumaterský',
    contentAdult: require('./components/animals/tygrSumatersky.adult'),
    contentChild: require('./components/animals/tygrSumatersky.child'),
    animal: 'tygrSumatersky',
    neighbours: [
      {animal: 'tygrSumatersky', direction: 'front'},
      {animal: 'rosomakSibirsky', direction: 'right'},
      {animal: 'soviceSnezni', direction: 'right'},
    ]
  },

  'medvedKamcatsky': {
    name: 'Medvěd kamčatský',
    contentAdult: require('./components/animals/medvedKamcatsky.adult'),
    contentChild: require('./components/animals/medvedKamcatsky.child'),
    animal: 'medvedKamcatsky',
    neighbours: [
      {animal: 'medvedKamcatsky', direction: 'front'},
      {animal: 'lachtanMedvedi', direction: 'left'},
      {animal: 'manul', direction: 'left'},
      {animal: 'rosomakSibirsky', direction: 'right'},
    ]
  },

  'rosomakSibirsky' : {
    name: 'Rosomák sibiřský',
    contentAdult: require('./components/animals/rosomakSibirsky.adult'),
    contentChild: require('./components/animals/rosomakSibirsky.child'),
    animal: 'rosomakSibirsky',
    neighbours: [
      {animal: 'rosomakSibirsky', direction: 'front'},
      {animal: 'tygrSumatersky', direction: 'left'},
      {animal: 'medvedKamcatsky', direction: 'right'},
    ]
  },

  'medvedLedni' : {
    name: 'Medvěd lední',
    contentAdult: require('./components/animals/medvedLedni.adult'),
    contentChild: require('./components/animals/medvedLedni.child'),
    animal: 'medvedLedni',
    neighbours: [
      {animal: 'medvedLedni', direction: 'front'},
      {animal: 'rysKanadsky', direction: 'left'},
      {animal: 'orelVychodni', direction: 'back'},
    ]
  },

  'jerabMandzusky' : {
    name: 'Jeřáb mandžuský',
    contentAdult: require('./components/animals/jerabMandzusky.adult'),
    contentChild: require('./components/animals/jerabMandzusky.child'),
    animal: 'jerabMandzusky',
    neighbours: [
      {animal: 'jerabMandzusky', direction: 'front'},
      {animal: 'myvalSeverni', direction: 'left'},
      {animal: 'pustikBelavy', direction: 'right'},
    ]
  },

  'soviceSnezni' : {
    name: 'Sovice sněžní',
    contentAdult: require('./components/animals/soviceSnezni.adult'),
    contentChild: require('./components/animals/soviceSnezni.child'),
    animal: 'soviceSnezni',
    neighbours: [
      {animal: 'soviceSnezni', direction: 'front'},
      {animal: 'tygrSumatersky', direction: 'left'},
      {animal: 'jespakBojovny', direction: 'right'},
      {animal: 'tenkozobecOpacny', direction: 'right'},
      {animal: 'ustricnikVelky', direction: 'right'},
      {animal: 'kulikPisecny', direction: 'right'},

    ]
  },

  'jespakBojovny' : {
    name: 'Jespák bojovný',
    contentAdult: require('./components/animals/jespakBojovny.adult'),
    contentChild: require('./components/animals/jespakBojovny.child'),
    animal: 'jespakBojovny',
    neighbours: [
      {animal: 'jespakBojovny', direction: 'front'},
      {animal: 'tenkozobecOpacny', direction: 'front'},
      {animal: 'ustricnikVelky', direction: 'front'},
      {animal: 'kulikPisecny', direction: 'front'},
      {animal: 'soviceSnezni', direction: 'left'},
      {animal: 'lachtanMedvedi', direction: 'right'},
    ]
  },

  'kulikPisecny' : {
    name: 'Kulík písečný',
    contentAdult: require('./components/animals/kulikPisecny.adult'),
    contentChild: require('./components/animals/kulikPisecny.child'),
    animal: 'kulikPisecny',
    neighbours: [
      {animal: 'kulikPisecny', direction: 'front'},
      {animal: 'jespakBojovny', direction: 'front'},
      {animal: 'tenkozobecOpacny', direction: 'front'},
      {animal: 'ustricnikVelky', direction: 'front'},
      {animal: 'soviceSnezni', direction: 'left'},
      {animal: 'lachtanMedvedi', direction: 'right'},
    ]
  },

  'ustricnikVelky' : {
    name: 'Ústřičník velký',
    contentAdult: require('./components/animals/ustricnikVelky.adult'),
    contentChild: require('./components/animals/ustricnikVelky.child'),
    animal: 'ustricnikVelky',
    neighbours: [
      {animal: 'ustricnikVelky', direction: 'front'},
      {animal: 'jespakBojovny', direction: 'front'},
      {animal: 'tenkozobecOpacny', direction: 'front'},
      {animal: 'kulikPisecny', direction: 'front'},
      {animal: 'soviceSnezni', direction: 'left'},
      {animal: 'lachtanMedvedi', direction: 'right'},
    ]
  },

//  'liskaPolarni' : {
//    name: 'Liška polární',
//    contentAdult: require('./components/animals/liskaPolarni.adult'),
//    contentChild: require('./components/animals/liskaPolarni.child'),
//    animal: 'liskaPolarni',
//    neighbours: [
//      'tygrSumatersky',
//    ]
//  },

  'manul' : {
    name: 'Manul',
    contentAdult: require('./components/animals/manul.adult'),
    contentChild: require('./components/animals/manul.child'),
    animal: 'manul',
    neighbours: [
      {animal: 'manul', direction: 'front'},
      {animal: 'medvedKamcatsky', direction: 'right'},
      {animal: 'lachtanMedvedi', direction: 'back'},
    ]
  },

  'lachtanMedvedi' : {
    name: 'Lachtan medvědí',
    contentAdult: require('./components/animals/lachtanMedvedi.adult'),
    contentChild: require('./components/animals/lachtanMedvedi.child'),
    animal: 'lachtanMedvedi',
    neighbours: [
      {animal: 'lachtanMedvedi', direction: 'front'},
      {animal: 'ustricnikVelky', direction: 'left'},
      {animal: 'jespakBojovny', direction: 'left'},
      {animal: 'tenkozobecOpacny', direction: 'left'},
      {animal: 'kulikPisecny', direction: 'left'},
      {animal: 'medvedKamcatsky', direction: 'left'},
      {animal: 'myvalSeverni', direction: 'right'},
      {animal: 'manul', direction: 'back'},
    ]
  },

  'bobrKanadsky' : {
    name: 'Bobr kanadský',
    contentAdult: require('./components/animals/bobrKanadsky.adult'),
    contentChild: require('./components/animals/bobrKanadsky.child'),
    animal: 'bobrKanadsky',
    neighbours: [
      {animal: 'bobrKanadsky', direction: 'front'},
      {animal: 'myvalSeverni', direction: 'right'},
      {animal: 'vlkArkticky', direction: 'left'},
    ]
  },

  'myvalSeverni' : {
    name: 'Mýval severní',
    contentAdult: require('./components/animals/myvalSeverni.adult'),
    contentChild: require('./components/animals/myvalSeverni.child'),
    animal: 'myvalSeverni',
    neighbours: [
      {animal: 'myvalSeverni', direction: 'front'},
      {animal: 'lachtanMedvedi', direction: 'left'},
      {animal: 'jerabMandzusky', direction: 'right'},
      {animal: 'bobrKanadsky', direction: 'back'},
      {animal: 'pustikBradaty', direction: 'right'},
      {animal: 'rysKanadsky', direction: 'right'},
    ]
  },

  'agamaKocincinska' : {
    name: 'Agama kočinčinská',
    contentAdult: require('./components/animals/agamaKocincinska.adult'),
    contentChild: require('./components/animals/agamaKocincinska.child'),
    animal: 'agamaKocincinska',
    neighbours: [
      {animal: 'agamaKocincinska', direction: 'front'},
      {animal: 'dvojjazycnikHaitsky', direction: 'right'},
      {animal: 'bazilisekZeleny', direction: 'right'},
      {animal: 'anakondaVelka', direction: 'left'},
    ]
  },

  'dzelada' : {
    name: 'Dželada',
    contentAdult: require('./components/animals/dzelada.adult'),
    contentChild: require('./components/animals/dzelada.child'),
    animal: 'dzelada',
    neighbours: [
      {animal: 'dzelada', direction: 'front'},
      {animal: 'paovceHrivnata', direction: 'front'},
      {animal: 'sobPolarni', direction: 'right'},
    ]
  },

  'husickaVdovka' : {
    name: 'Husička vdovka',
    contentAdult: require('./components/animals/husickaVdovka.adult'),
    contentChild: require('./components/animals/husickaVdovka.child'),
    animal: 'husickaVdovka',
    neighbours: [
      {animal: 'husickaVdovka', direction: 'front'},
      {animal: 'lemurKata', direction: 'right'},
      {animal: 'husickaDvoubarva', direction: 'front'},
      {animal: 'plamenakRuzovy', direction: 'front'},
    ]
  },

  'jaguarundi' : {
    name: 'Jaguarundi',
    contentAdult: require('./components/animals/jaguarundi.adult'),
    contentChild: require('./components/animals/jaguarundi.child'),
    animal: 'jaguarundi',
    neighbours: [
      {animal: 'jaguarundi', direction: 'front'},
      {animal: 'lemurBelocely', direction: 'right'},
      {animal: 'variCernobily', direction: 'left'},
    ]
  },

  'klokanZlutonohy' : {
    name: 'Klokan žlutonohý',
    contentAdult: require('./components/animals/klokanZlutonohy.adult'),
    contentChild: require('./components/animals/klokanZlutonohy.child'),
    animal: 'klokanZlutonohy',
    neighbours: [
      {animal: 'klokanZlutonohy', direction: 'front'},
      {animal: 'pandaCervena', direction: 'back'},
      {animal: 'vikuna', direction: 'back'},
      {animal: 'zebraGrevyho', direction: 'front'},
    ]
  },

  'krajtaKobercova' : {
    name: 'Krajta kobercová',
    contentAdult: require('./components/animals/krajtaKobercova.adult'),
    contentChild: require('./components/animals/krajtaKobercova.child'),
    animal: 'krajtaKobercova',
    neighbours: [
      {animal: 'krajtaKobercova', direction: 'front'},
      {animal: 'papousekPatagonsky', direction: 'left'},
      {animal: 'pustikObecny', direction: 'right'},
    ]
  },

  'kunPrevalskeho' : {
    name: 'Kůň Převalského',
    contentAdult: require('./components/animals/kunPrevalskeho.adult'),
    contentChild: require('./components/animals/kunPrevalskeho.child'),
    animal: 'kunPrevalskeho',
    neighbours: [
      {animal: 'kunPrevalskeho', direction: 'front'},
      {animal: 'jakDomaci', direction: 'back'},
    ]
  },

  'lemurKata' : {
    name: 'Lemur kata',
    contentAdult: require('./components/animals/lemurKata.adult'),
    contentChild: require('./components/animals/lemurKata.child'),
    animal: 'lemurKata',
    neighbours: [
      {animal: 'lemurKata', direction: 'front'},
      {animal: 'zebraChapmanova', direction: 'right'},
      {animal: 'zirafaSitovana', direction: 'right'},
      {animal: 'husickaVdovka', direction: 'left'},
      {animal: 'plamenakRuzovy', direction: 'left'},
      {animal: 'husickaDvoubarva', direction: 'left'},
    ]
  },

  'levhartCejlonsky' : {
    name: 'Levhart cejlonský',
    contentAdult: require('./components/animals/levhartCejlonsky.adult'),
    contentChild: require('./components/animals/levhartCejlonsky.child'),
    animal: 'levhartCejlonsky',
    neighbours: [
      {animal: 'levhartCejlonsky', direction: 'front'},
      {animal: 'krkavecVelky', direction: 'back'},
      {animal: 'krajtaKobercova', direction: 'right'},
      {animal: 'pavKorunkaty', direction: 'back'},
      {animal: 'pavianAnubi', direction: 'left'},
    ]
  },

  'mandelikHajni' : {
    name: 'Mandelík hajní',
    contentAdult: require('./components/animals/mandelikHajni.adult'),
    contentChild: require('./components/animals/mandelikHajni.child'),
    animal: 'mandelikHajni',
    neighbours: [
      {animal: 'mandelikHajni', direction: 'front'},
    ]
  },

  'pandaCervena' : {
    name: 'Panda červená',
    contentAdult: require('./components/animals/pandaCervena.adult'),
    contentChild: require('./components/animals/pandaCervena.child'),
    animal: 'pandaCervena',
    neighbours: [
      {animal: 'pandaCervena', direction: 'front'},
      {animal: 'vikuna', direction: 'left'},
      {animal: 'klokanZlutonohy', direction: 'back'},
      {animal: 'zakoSedy', direction: 'right'},
      {animal: 'zakoSedy', direction: 'left'},
    ]
  },

  'plamenakRuzovy' : {
    name: 'Plameňák růžový',
    contentAdult: require('./components/animals/plamenakRuzovy.adult'),
    contentChild: require('./components/animals/plamenakRuzovy.child'),
    animal: 'plamenakRuzovy',
    neighbours: [
      {animal: 'plamenakRuzovy', direction: 'front'},
      {animal: 'lemurKata', direction: 'right'},
      {animal: 'husickaVdovka', direction: 'front'},
      {animal: 'husickaDvoubarva', direction: 'front'},
    ]
  },

  'tamarinZlutoruky' : {
    name: 'Tamarín žlutoruký',
    contentAdult: require('./components/animals/tamarinZlutoruky.adult'),
    contentChild: require('./components/animals/tamarinZlutoruky.child'),
    animal: 'tamarinZlutoruky',
    neighbours: [
      {animal: 'tamarinZlutoruky', direction: 'front'},
      {animal: 'maraStepni', direction: 'left'},
      {animal: 'nosalCerveny', direction: 'right'},
    ]
  },

  'urzonKanadsky' : {
    name: 'Urzon kanadský',
    contentAdult: require('./components/animals/urzonKanadsky.adult'),
    contentChild: require('./components/animals/urzonKanadsky.child'),
    animal: 'urzonKanadsky',
    neighbours: [
      {animal: 'urzonKanadsky', direction: 'front'},
      {animal: 'cipmankVychodni', direction: 'left'},
    ]
  },

  'varanKomodsky' : {
    name: 'Varan komodský',
    contentAdult: require('./components/animals/varanKomodsky.adult'),
    contentChild: require('./components/animals/varanKomodsky.child'),
    animal: 'varanKomodsky',
    neighbours: [
      {animal: 'varanKomodsky', direction: 'front'},
      {animal: 'tamarinPinci', direction: 'right'},
      {animal: 'zelvaUhlirska', direction: 'right'},
      {animal: 'vousivkaPestra', direction: 'right'},
      {animal: 'kuanduObecny', direction: 'left'},
    ]
  },

  'velbloudDvouhrby' : {
    name: 'Velbloud dvouhrbý',
    contentAdult: require('./components/animals/velbloudDvouhrby.adult'),
    contentChild: require('./components/animals/velbloudDvouhrby.child'),
    animal: 'velbloudDvouhrby',
    neighbours: [
      {animal: 'velbloudDvouhrby', direction: 'front'},
      {animal: 'zebraGrevyho', direction: 'left'},
      {animal: 'jakDomaci', direction: 'right'},
      {animal: 'kunPrevalskeho', direction: 'front'},
    ]
  },

  'vlkArkticky' : {
    name: 'Vlk arktický',
    contentAdult: require('./components/animals/vlkArkticky.adult'),
    contentChild: require('./components/animals/vlkArkticky.child'),
    animal: 'vlkArkticky',
    neighbours: [
      {animal: 'vlkArkticky', direction: 'front'},
      {animal: 'bobrKanadsky', direction: 'right'},
      {animal: 'skunkPruhovany', direction: 'left'},
      {animal: 'pustikBelavy', direction: 'back'},
      {animal: 'losEvropsky', direction: 'back'},
      {animal: 'jelenMilu', direction: 'right'},
    ]
  },

  'zebraChapmanova' : {
    name: 'Zebra Chapmanova',
    contentAdult: require('./components/animals/zebraChapmanova.adult'),
    contentChild: require('./components/animals/zebraChapmanova.child'),
    animal: 'zebraChapmanova',
    neighbours: [
      {animal: 'zebraChapmanova', direction: 'front'},
      {animal: 'agapornisFischeruv', direction: 'right'},
      {animal: 'zirafaSitovana', direction: 'front'},
      {animal: 'lemurKata', direction: 'left'},
    ]
  },

  'cipmankVychodni' : {
    name: 'Čipmank východní',
    contentAdult: require('./components/animals/cipmankVychodni.adult'),
    contentChild: require('./components/animals/cipmankVychodni.child'),
    animal: 'cipmankVychodni',
    neighbours: [
      {animal: 'cipmankVychodni', direction: 'front'},
      {animal: 'orelBelohlavy', direction: 'right'},
      {animal: 'urzonKanadsky', direction: 'left'},
    ]
  },

  'jakDomaci' : {
    name: 'Jak domácí',
    contentAdult: require('./components/animals/jakDomaci.adult'),
    contentChild: require('./components/animals/jakDomaci.child'),
    animal: 'jakDomaci',
    neighbours: [
      {animal: 'jakDomaci', direction: 'front'},
      {animal: 'bizon', direction: 'right'},
      {animal: 'velbloudDvouhrby', direction: 'back'},
      {animal: 'kunPrevalskeho', direction: 'left'},
    ]
  },

  'kapybara' : {
    name: 'Kapybara',
    contentAdult: require('./components/animals/kapybara.adult'),
    contentChild: require('./components/animals/kapybara.child'),
    animal: 'kapybara',
    neighbours: [
      {animal: 'kapybara', direction: 'front'},
      {animal: 'tapirJihoamericky', direction: 'front'},
      {animal: 'zelvaNadherna', direction: 'front'},
      {animal: 'vlkHrivnaty', direction: 'right'},
      {animal: 'psounPreriovy', direction: 'left'},
      {animal: 'agutiAzaruv', direction: 'left'},
    ]
  },

  'leskoptevTribarva' : {
    name: 'Leskoptev tříbarvá',
    contentAdult: require('./components/animals/leskoptevTribarva.adult'),
    contentChild: require('./components/animals/leskoptevTribarva.child'),
    animal: 'leskoptevTribarva',
    neighbours: [
      {animal: 'leskoptevTribarva', direction: 'front'},
    ]
  },

  'orelBelohlavy' : {
    name: 'Orel bělohlavý',
    contentAdult: require('./components/animals/orelBelohlavy.adult'),
    contentChild: require('./components/animals/orelBelohlavy.child'),
    animal: 'orelBelohlavy',
    neighbours: [
      {animal: 'orelBelohlavy', direction: 'front'},
      {animal: 'urzonKanadsky', direction: 'right'},
      {animal: 'cipmankVychodni', direction: 'left'},
      {animal: 'skunkPruhovany', direction: 'right'},
    ]
  },

  'orelVychodni' : {
    name: 'Orel východní',
    contentAdult: require('./components/animals/orelVychodni.adult'),
    contentChild: require('./components/animals/orelVychodni.child'),
    animal: 'orelVychodni',
    neighbours: [
      {animal: 'orelVychodni', direction: 'front'},
      {animal: 'rysKanadsky', direction: 'right'},
      {animal: 'medvedLedni', direction: 'back'},
    ]
  },

  'psounPreriovy' : {
    name: 'Psoun prériový',
    contentAdult: require('./components/animals/psounPreriovy.adult'),
    contentChild: require('./components/animals/psounPreriovy.child'),
    animal: 'psounPreriovy',
    neighbours: [
      {animal: 'psounPreriovy', direction: 'front'},
//      {animal: 'zelvaNadherna', direction: 'back'},
      {animal: 'tapirJihoamericky', direction: 'back'},
      {animal: 'kapybara', direction: 'back'},
//      {animal: 'agutiAzaruv', direction: 'right'},
    ]
  },

  'rysKanadsky' : {
    name: 'Rys kanadský',
    contentAdult: require('./components/animals/rysKanadsky.adult'),
    contentChild: require('./components/animals/rysKanadsky.child'),
    animal: 'rysKanadsky',
    neighbours: [
      {animal: 'rysKanadsky', direction: 'front'},
      {animal: 'myvalSeverni', direction: 'right'},
      {animal: 'medvedLedni', direction: 'left'},
      {animal: 'orelVychodni', direction: 'left'},
    ]
  },

  'skunkPruhovany' : {
    name: 'Skunk pruhovaný',
    contentAdult: require('./components/animals/skunkPruhovany.adult'),
    contentChild: require('./components/animals/skunkPruhovany.child'),
    animal: 'skunkPruhovany',
    neighbours: [
      {animal: 'skunkPruhovany', direction: 'front'},
      {animal: 'vlkArkticky', direction: 'right'},
      {animal: 'orelBelohlavy', direction: 'left'},
      {animal: 'urzonKanadsky', direction: 'left'},
    ]
  },

  'snovacRudozoby' : {
    name: 'Snovač rudozobý',
    contentAdult: require('./components/animals/snovacRudozoby.adult'),
    contentChild: require('./components/animals/snovacRudozoby.child'),
    animal: 'snovacRudozoby',
    neighbours: [
      {animal: 'snovacRudozoby', direction: 'front'},
    ]
  },

  'tapirJihoamericky' : {
    name: 'Tapír jihoamerický',
    contentAdult: require('./components/animals/tapirJihoamericky.adult'),
    contentChild: require('./components/animals/tapirJihoamericky.child'),
    animal: 'tapirJihoamericky',
    neighbours: [
      {animal: 'tapirJihoamericky', direction: 'front'},
      {animal: 'kapybara', direction: 'front'},
//      {animal: 'zelvaNadherna', direction: 'front'},
      {animal: 'vlkHrivnaty', direction: 'right'},
      {animal: 'psounPreriovy', direction: 'left'},
//      {animal: 'agutiAzaruv', direction: 'left'},
    ]
  },

  'tenkozobecOpacny' : {
    name: 'Tenkozobec opačný',
    contentAdult: require('./components/animals/tenkozobecOpacny.adult'),
    contentChild: require('./components/animals/tenkozobecOpacny.child'),
    animal: 'tenkozobecOpacny',
    neighbours: [
      {animal: 'tenkozobecOpacny', direction: 'front'},
      {animal: 'jespakBojovny', direction: 'front'},
      {animal: 'ustricnikVelky', direction: 'front'},
      {animal: 'kulikPisecny', direction: 'front'},
      {animal: 'soviceSnezni', direction: 'left'},
      {animal: 'lachtanMedvedi', direction: 'right'},
    ]
  },

  'zebraGrevyho' : {
    name: 'Zebra Grévyho',
    contentAdult: require('./components/animals/zebraGrevyho.adult'),
    contentChild: require('./components/animals/zebraGrevyho.child'),
    animal: 'zebraGrevyho',
    neighbours: [
      {animal: 'zebraGrevyho', direction: 'front'},
      {animal: 'velbloudDvouhrby', direction: 'right'},
      {animal: 'klokanZlutonohy', direction: 'back'},
      {animal: 'kakaduPalmovy', direction: 'back'},
      {animal: 'kiangVychodni', direction: 'left'},
      {animal: 'takinIndicky', direction: 'left'},
    ]
  },

  'maraStepni' : {
    name: 'Mara stepní',
    contentAdult: require('./components/animals/maraStepni.adult'),
    contentChild: require('./components/animals/maraStepni.child'),
    animal: 'maraStepni',
    neighbours: [
      {animal: 'maraStepni', direction: 'front'},
      {animal: 'tygrSumatersky', direction: 'back'},
      {animal: 'surikata', direction: 'left'},
      {animal: 'tamarinZlutoruky', direction: 'right'},
    ]
  },

  'nosalCerveny' : {
    name: 'Nosál červený',
    contentAdult: require('./components/animals/nosalCerveny.adult'),
    contentChild: require('./components/animals/nosalCerveny.child'),
    animal: 'nosalCerveny',
    neighbours: [
      {animal: 'nosalCerveny', direction: 'front'},
      {animal: 'tamarinZlutoruky', direction: 'left'},
 //     {animal: 'konopkaObecna', direction: 'right'},
//      {animal: 'zvonohlikZahradni', direction: 'right'},
//      {animal: 'krepelkaJaponska', direction: 'right'},
    ]
  },

  'lemurBelocely' : {
    name: 'Lemur běločelý',
    contentAdult: require('./components/animals/lemurBelocely.adult'),
    contentChild: require('./components/animals/lemurBelocely.child'),
    animal: 'lemurBelocely',
    neighbours: [
      {animal: 'lemurBelocely', direction: 'front'},
      {animal: 'jaguarundi', direction: 'left'},
//      {animal: 'lemurCerny', direction: 'right'},
    ]
  },

  'losEvropsky' : {
    name: 'Los evropský',
    contentAdult: require('./components/animals/losEvropsky.adult'),
    contentChild: require('./components/animals/losEvropsky.child'),
    animal: 'losEvropsky',
    neighbours: [
      {animal: 'losEvropsky', direction: 'front'},
      {animal: 'takinIndicky', direction: 'right'},
      {animal: 'jelenMilu', direction: 'left'},
      {animal: 'vlkArkticky', direction: 'back'},
    ]
  },

  'surikata' : {
    name: 'Surikata',
    contentAdult: require('./components/animals/surikata.adult'),
    contentChild: require('./components/animals/surikata.child'),
    animal: 'surikata',
    neighbours: [
      {animal: 'surikata', direction: 'front'},
      {animal: 'simpanz', direction: 'right'},
      {animal: 'maraStepni', direction: 'right'},
      {animal: 'tygrSumatersky', direction: 'back'},
      {animal: 'pekariBelobrady', direction: 'left'},
    ]
  },

  'simpanz' : {
    name: 'Šimpanz',
    contentAdult: require('./components/animals/simpanz.adult'),
    contentChild: require('./components/animals/simpanz.child'),
    animal: 'simpanz',
    neighbours: [
      {animal: 'simpanz', direction: 'front'},
      {animal: 'variCernobily', direction: 'right'},
      {animal: 'nosalCerveny', direction: 'back'},
      {animal: 'surikata', direction: 'left'},
    ]
  },

  'krkavecVelky' : {
    name: 'Krkavec velký',
    contentAdult: require('./components/animals/krkavecVelky.adult'),
    contentChild: require('./components/animals/krkavecVelky.child'),
    animal: 'krkavecVelky',
    neighbours: [
      {animal: 'krkavecVelky', direction: 'front'},
      {animal: 'rarohVelky', direction: 'left'},
      {animal: 'levhartCejlonsky', direction: 'back'},
      {animal: 'pavKorunkaty', direction: 'right'},
    ]
  },

  'takinIndicky' : {
    name: 'Takin indický',
    contentAdult: require('./components/animals/takinIndicky.adult'),
    contentChild: require('./components/animals/takinIndicky.child'),
    animal: 'takinIndicky',
    neighbours: [
      {animal: 'takinIndicky', direction: 'front'},
      {animal: 'zebraGrevyho', direction: 'back'},
      {animal: 'kiangVychodni', direction: 'right'},
      {animal: 'losEvropsky', direction: 'right'},
//      {animal: 'wapitiSibirsky', direction: 'left'},
    ]
  },

  'vikuna' : {
    name: 'Vikuňa',
    contentAdult: require('./components/animals/vikuna.adult'),
    contentChild: require('./components/animals/vikuna.child'),
    animal: 'vikuna',
    neighbours: [
      {animal: 'vikuna', direction: 'front'},
      {animal: 'alpaka', direction: 'right'},
      {animal: 'klokanZlutonohy', direction: 'left'},
      {animal: 'pandaCervena', direction: 'left'},
    ]
  },

  'pustikBelavy' : {
    name: 'Puštík bělavý',
    contentAdult: require('./components/animals/pustikBelavy.adult'),
    contentChild: require('./components/animals/pustikBelavy.child'),
    animal: 'pustikBelavy',
    neighbours: [
      {animal: 'pustikBelavy', direction: 'front'},
      {animal: 'vyrVirginsky', direction: 'right'},
      {animal: 'jerabMandzusky', direction: 'left'},
      {animal: 'vlkArkticky', direction: 'back'},
    ]
  },

  'vyrVirginsky' : {
    name: 'Výr virginský',
    contentAdult: require('./components/animals/vyrVirginsky.adult'),
    contentChild: require('./components/animals/vyrVirginsky.child'),
    animal: 'vyrVirginsky',
    neighbours: [
      {animal: 'vyrVirginsky', direction: 'front'},
      {animal: 'vyrVelky', direction: 'right'},
      {animal: 'pustikBelavy', direction: 'left'},
    ]
  },

  'kozorozecSibirsky' : {
    name: 'Kozorožec sibiřský',
    contentAdult: require('./components/animals/kozorozecSibirsky.adult'),
    contentChild: require('./components/animals/kozorozecSibirsky.child'),
    animal: 'kozorozecSibirsky',
    neighbours: [
      {animal: 'kozorozecSibirsky', direction: 'front'},
      {animal: 'pekariBelobrady', direction: 'back'},
      {animal: 'alpaka', direction: 'left'},
    ]
  },

  'pekariBelobrady' : {
    name: 'Pekari bělobradý',
    contentAdult: require('./components/animals/pekariBelobrady.adult'),
    contentChild: require('./components/animals/pekariBelobrady.child'),
    animal: 'pekariBelobrady',
    neighbours: [
      {animal: 'pekariBelobrady', direction: 'front'},
      {animal: 'surikata', direction: 'right'},
      {animal: 'alpaka', direction: 'left'},
      {animal: 'kozorozecSibirsky', direction: 'front'},
    ]
  },

  'vyrVelky' : {
    name: 'Výr velký',
    contentAdult: require('./components/animals/vyrVelky.adult'),
    contentChild: require('./components/animals/vyrVelky.child'),
    animal: 'vyrVelky',
    neighbours: [
      {animal: 'vyrVelky', direction: 'front'},
      {animal: 'pustikBradaty', direction: 'right'},
      {animal: 'vyrVirginsky', direction: 'left'},
      {animal: 'urzonKanadsky', direction: 'back'},
    ]
  },

  'pavKorunkaty' : {
    name: 'Páv korunkatý',
    contentAdult: require('./components/animals/pavKorunkaty.adult'),
    contentChild: require('./components/animals/pavKorunkaty.child'),
    animal: 'pavKorunkaty',
    neighbours: [
      {animal: 'pavKorunkaty', direction: 'front'},
      {animal: 'levhartCejlonsky', direction: 'back'},
      {animal: 'krkavecVelky', direction: 'left'},
      {animal: 'pavianAnubi', direction: 'right'},
    ]
  },

  'paovceHrivnata' : {
    name: 'Paovce hřivnatá',
    contentAdult: require('./components/animals/paovceHrivnata.adult'),
    contentChild: require('./components/animals/paovceHrivnata.child'),
    animal: 'paovceHrivnata',
    neighbours: [
      {animal: 'paovceHrivnata', direction: 'front'},
      {animal: 'dzelada', direction: 'front'},
      {animal: 'sobPolarni', direction: 'right'},
    ]
  },

  'pustikBradaty' : {
    name: 'Puštík bradatý',
    contentAdult: require('./components/animals/pustikBradaty.adult'),
    contentChild: require('./components/animals/pustikBradaty.child'),
    animal: 'pustikBradaty',
    neighbours: [
      {animal: 'pustikBradaty', direction: 'front'},
      {animal: 'myvalSeverni', direction: 'right'},
      {animal: 'vyrVelky', direction: 'left'},
    ]
  },

  'sobPolarni' : {
    name: 'Sob polární',
    contentAdult: require('./components/animals/sobPolarni.adult'),
    contentChild: require('./components/animals/sobPolarni.child'),
    animal: 'sobPolarni',
    neighbours: [
      {animal: 'sobPolarni', direction: 'front'},
      {animal: 'losEvropsky', direction: 'right'},
//      {animal: 'jelenMilu', direction: 'back'},
      {animal: 'paovceHrivnata', direction: 'left'},
      {animal: 'dzelada', direction: 'left'},
    ]
  },

  'rarohVelky' : {
    name: 'Raroh velký',
    contentAdult: require('./components/animals/rarohVelky.adult'),
    contentChild: require('./components/animals/rarohVelky.child'),
    animal: 'rarohVelky',
    neighbours: [
      {animal: 'rarohVelky', direction: 'front'},
      {animal: 'pustikObecny', direction: 'left'},
      {animal: 'krkavecVelky', direction: 'right'},
    ]
  },

  'araArarauna' : {
    name: 'Ara ararauna',
    contentAdult: require('./components/animals/araArarauna.adult'),
    contentChild: require('./components/animals/araArarauna.child'),
    animal: 'araArarauna',
    neighbours: [
      {animal: 'araArarauna', direction: 'front'},
//      {animal: 'konopkaObecna', direction: 'left'},
//      {animal: 'krepelkaJaponska', direction: 'left'},
//      {animal: 'zvonohlikZahradni', direction: 'left'},
      {animal: 'papousekPatagonsky', direction: 'right'},
//      {animal: 'turako', direction: 'left'},
    ]
  },

  'papousekPatagonsky' : {
    name: 'Papoušek patagonský',
    contentAdult: require('./components/animals/papousekPatagonsky.adult'),
    contentChild: require('./components/animals/papousekPatagonsky.child'),
    animal: 'papousekPatagonsky',
    neighbours: [
      {animal: 'papousekPatagonsky', direction: 'front'},
      {animal: 'araArarauna', direction: 'left'},
      {animal: 'krajtaKobercova', direction: 'right'},
    ]
  },

  'pavianAnubi' : {
    name: 'Pavián anubi',
    contentAdult: require('./components/animals/pavianAnubi.adult'),
    contentChild: require('./components/animals/pavianAnubi.child'),
    animal: 'pavianAnubi',
    neighbours: [
      {animal: 'pavianAnubi', direction: 'front'},
      {animal: 'levhartCejlonsky', direction: 'right'},
//      {animal: 'lemurCerny', direction: 'left'},
    ]
  },

  'alpaka' : {
    name: 'Alpaka',
    contentAdult: require('./components/animals/alpaka.adult'),
    contentChild: require('./components/animals/alpaka.child'),
    animal: 'alpaka',
    neighbours: [
      {animal: 'alpaka', direction: 'front'},
      {animal: 'kozorozecSibirsky', direction: 'right'},
      {animal: 'pekariBelobrady', direction: 'right'},
      {animal: 'vikuna', direction: 'left'},
    ]
  },

  'kiangVychodni' : {
    name: 'Kiang východní',
    contentAdult: require('./components/animals/kiangVychodni.adult'),
    contentChild: require('./components/animals/kiangVychodni.child'),
    animal: 'kiangVychodni',
    neighbours: [
      {animal: 'kiangVychodni', direction: 'front'},
      {animal: 'zebraGrevyho', direction: 'right'},
      {animal: 'takinIndicky', direction: 'back'},
//    vlevo nekolik dalsich druhu koni
    ]
  },

  'bizon' : {
    name: 'Bizon',
    contentAdult: require('./components/animals/bizon.adult'),
    contentChild: require('./components/animals/bizon.child'),
    animal: 'bizon',
    neighbours: [
      {animal: 'bizon', direction: 'front'},
      {animal: 'jakDomaci', direction: 'left'},
    ]
  },

  'vlkHrivnaty' : {
    name: 'Vlk hřivnatý',
    contentAdult: require('./components/animals/vlkHrivnaty.adult'),
    contentChild: require('./components/animals/vlkHrivnaty.child'),
    animal: 'vlkHrivnaty',
    neighbours: [
      {animal: 'vlkHrivnaty', direction: 'front'},
      {animal: 'tapirJihoamericky', direction: 'left'},
      {animal: 'kapybara', direction: 'left'},
//      {animal: 'zelvaNadherna', direction: 'left'},
    ]
  },

  'zirafaSitovana' : {
    name: 'Žirafa síťovaná',
    contentAdult: require('./components/animals/zirafaSitovana.adult'),
    contentChild: require('./components/animals/zirafaSitovana.child'),
    animal: 'zirafaSitovana',
    neighbours: [
      {animal: 'zirafaSitovana', direction: 'front'},
//      {animal: 'agapornisFischeruv', direction: 'right'},
      {animal: 'zebraChapmanova', direction: 'front'},
      {animal: 'lemurKata', direction: 'left'},
    ]
  },

  'husickaDvoubarva' : {
    name: 'Husička dvoubarvá',
    contentAdult: require('./components/animals/husickaDvoubarva.adult'),
    contentChild: require('./components/animals/husickaDvoubarva.child'),
    animal: 'husickaDvoubarva',
    neighbours: [
      {animal: 'husickaDvoubarva', direction: 'front'},
      {animal: 'husickaVdovka', direction: 'front'},
      {animal: 'plamenakRuzovy', direction: 'front'},
      {animal: 'lemurKata', direction: 'right'},
    ]
  },

  'kajmanekTrpaslici' : {
    name: 'Kajmánek trpasličí',
    contentAdult: require('./components/animals/kajmanekTrpaslici.adult'),
    contentChild: require('./components/animals/kajmanekTrpaslici.child'),
    animal: 'kajmanekTrpaslici',
    neighbours: [
      {animal: 'kajmanekTrpaslici', direction: 'front'},
//      {animal: 'karetkaNovoguinejska', direction: 'front'},
//      {animal: 'kolosoma', direction: 'front'},
//      {animal: 'leguanekModry', direction: 'left'},
//      {animal: 'cukvalaZavalita', direction: 'left'},
//      {animal: 'agutiAzaruv', direction: 'back'},
    ]
  },


/*
  '' : {
    name: '',
    contentAdult: require('./components/animals/.adult'),
    contentChild: require('./components/animals/.child'),
    animal: '',
    neighbours: [
      {animal: '', direction: ''},
      {animal: '', direction: ''},
      {animal: '', direction: ''},
      {animal: '', direction: ''},
      {animal: '', direction: ''},
    ]
  },
*/
};
