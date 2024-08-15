export type Instruction = {
  instruction: string;
};

export type Heading = {
  heading: string;
};

export type Ingredient = {
  amount: number;
  name: string;
  unit?: 'g' | 'kpl' | 'dl' | 'rkl' | 'tl' | 'ruukku' | 'annosta';
  how?: string;
  inShoppingList?: boolean;
};

export function isInstruction(obj: any): obj is Instruction {
  return obj && typeof obj.Instruction === 'string';
}

export function isHeading(obj: any): obj is Heading {
  return obj && typeof obj.heading === 'string';
}

export function isIngredient(obj: any): obj is Ingredient {
  return obj && typeof obj.amount === 'number';
}

export type Recipe = {
  id: string;
  name: string;
  path: string;
  portions: Number;
  tags: Array<string>;
  steps: (Heading | Instruction | Ingredient)[];
  selected?: boolean;
  show?: boolean;
};

export const data: Recipe[] = [
  {
    id: 'av1',
    name: 'Avokadopasta',
    path: '/avokadopasta',
    portions: 4,
    tags: ['fodmap'],
    steps: [
      {
        heading: 'Pasta',
      },
      {
        amount: 4,
        unit: 'annosta',
        name: 'spaghettia tai pastaa',
      },
      {
        instruction:
          'Keitä pastapakkauksen ohjeen mukaan. Ota talteen desi pastan keitinvettä',
      },
      {
        heading: 'Kastike',
      },
      {
        amount: 1,
        name: 'sitruuna',
      },
      {
        amount: 0.5,
        unit: 'dl',
        name: 'oliiviöljyä',
      },
      {
        amount: 2,
        name: 'avokadoa',
        how: 'tai herneitä tai fetaa tms.',
      },
      {
        amount: 100,
        unit: 'g',
        name: 'parmesan-juustoa',
        how: 'raastettuna tai pieniksi viipaloituna',
      },
      {
        amount: 1,
        name: 'chili tai ripaus kuivattua chiliä',
      },
      {
        amount: 2,
        name: 'valkosipulinkynttä',
      },
      {
        amount: 1,
        unit: 'tl',
        name: 'suolaa',
      },
      {
        amount: 0.5,
        unit: 'tl',
        name: 'pippuria',
      },
      {
        instruction:
          'Sekoita kastikkeen aineet keskenään. Lisää kypsennetyn pastan joukkoon.',
      },
      {
        heading: 'Tarjoilu',
      },
      {
        amount: 1,
        unit: 'ruukku',
        name: 'basilikaa',
      },
      {
        amount: 0.5,
        unit: 'dl',
        name: 'pastan keitinlientä',
      },
      {
        instruction:
          'lisää joukkoon pastan keitinlientä sen verran, että pasta on mehukasta',
      },
    ],
  },

  {
    id: 'ba1',
    name: 'Bataattikeitto',
    path: '/bataattikeitto',
    portions: 4,
    tags: ['fodmap'],
    steps: [
      {
        heading: 'Sekoita keskenään kattilassa ja keitä kypsäksi',
      },
      {
        amount: 4,
        name: 'bataattia',
        how: 'pilkottuna pieneksi (tai bataattisosetta)',
      },
      {
        amount: 2,
        unit: 'dl',
        name: 'kookosmaitoa',
      },
      {
        amount: 5,
        unit: 'rkl',
        name: 'punaista/keltaista/vihreää currytahnaa',
      },
      {
        amount: 2,
        unit: 'tl',
        name: 'sokeria',
      },
      {
        heading: 'mausta lopuksi',
      },
      {
        amount: 2,
        unit: 'kpl',
        name: 'limettiä',
        how: 'purista mehu',
      },
      {
        amount: 1,
        unit: 'ruukku',
        name: 'korianteria',
      },
    ],
  },
  {
    id: 'ba2',
    name: 'Banaanipannukakku',
    path: '/banaanipannukakku',
    portions: 2,
    tags: [],
    steps: [
      {
        heading: 'Taikina',
      },
      {
        amount: 2,
        name: 'munaa',
      },
      {
        amount: 2,
        name: 'maitoa',
        unit: 'dl',
      },
      {
        amount: 50,
        name: 'sokeria',
        unit: 'g',
      },
      {
        amount: 5,
        name: 'suolaa',
        unit: 'g',
      },
      {
        amount: 200,
        name: 'jauhoa',
        unit: 'g',
      },
      {
        instruction: 'Sekoita ainekset keskenään.',
      },

      {
        heading: 'Paistaminen',
      },
      {
        amount: 2,
        name: 'banaania',
      },
      {
        instruction:
          'Pilko banaanit paistinpannun pohjalle. Kaada taikina päälle. Paista kunnes kypsä.',
      },
    ],
  },
  {
    id: 'br1',
    name: 'Broileri-rucolasalaatti',
    path: '/broileri-rucolasalaatti',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'bu1',
    name: 'Butter chicken',
    path: '/butter-chicken',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'ja1',
    name: 'Jauhelihakastike ja spaghetti',
    path: '/jauhelihakastike ja spaghetti',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'ka1',
    name: 'Kananuudeliwok',
    path: '/kananuudeliwok',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'ka2',
    name: 'Kalakeitto',
    path: '/kalakeitto',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'ma1',
    name: 'Mac and cheese pekonilla',
    path: '/mac-and-cheese-pekonilla',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'ha1',
    name: 'Hampurilaiset',
    path: '/hampurilaiset',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'ho1',
    name: 'Hot dogit',
    path: '/hotdog',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'it1',
    name: 'Itkukana',
    path: '/itkukana',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'lo1',
    name: 'Lohipasta',
    path: '/lohipasta',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'na1',
    name: 'Nakkikastike perunamuusilla',
    path: '/nakkikastike-perunamuusilla',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'ni1',
    name: 'Nizzan savulohisalaatti',
    path: '/nizzan-savulohisalaatti',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'pa1',
    name: 'Pad Thai',
    path: '/pad-thai',
    portions: 4,
    tags: [],
    steps: [
      {
        heading: 'Riisi',
      },
      {
        amount: 4,
        unit: 'dl',
        name: 'riisiä',
        inShoppingList: false,
      },
      {
        instruction: 'Huuhtele ja keitä pakkauksen ohjeen mukaan.',
      },
      {
        amount: 3,
        unit: 'rkl',
        name: 'riisiviinietikkaa',
        inShoppingList: false,
      },
      {
        amount: 1,
        unit: 'tl',
        name: 'suolaa',
        inShoppingList: false,
      },
      {
        amount: 1.5,
        unit: 'rkl',
        name: 'sokeria',
        inShoppingList: false,
      },
      {
        instruction: 'Sekoita keskenään ja kaada riisin joukkoon',
      },
      {
        heading: 'Ponzu',
      },
      {
        amount: 4,
        unit: 'dl',
        name: 'riisiä',
        inShoppingList: false,
      },
      {
        instruction: 'Huuhtele ja keitä pakkauksen ohjeen mukaan.',
      },
    ],
  },
  {
    id: 'pi1',
    name: 'Pinaattipasta',
    path: '/pinaattipasta',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'pa2',
    name: 'Parmankinkku-salviapasta',
    path: '/parmankinkku-salviapasta',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'pa3',
    name: 'Palak Paneer',
    path: '/palak-paneer',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'pi2',
    name: 'Pinaattiletut',
    path: '/pinaattiletut',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'pi3',
    name: 'Pitsa',
    path: '/pitsa',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'po1',
    name: 'porkkana-inkiväärisosekeitto',
    path: '/porkkana-inkiväärisosekeitto',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'pu1',
    name: 'Purkkipalapasta',
    path: '/purkkipalapasta',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'ra1',
    name: 'Raparperibooli',
    path: '/raparperibooli',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'so1',
    name: 'Sokerilohi',
    path: '/sokerilohi',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'sa1',
    name: 'Savulohisalaatti kermaviilikastikkeella',
    path: '/savulohisalaatti-kermaviilikastikkeella',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'su1',
    name: 'Sushibowl',
    path: '/sushibowl',
    portions: 4,
    tags: [],
    steps: [
      {
        heading: 'Riisi',
      },
      {
        amount: 4,
        unit: 'dl',
        name: 'riisiä',
        inShoppingList: false,
      },
      {
        instruction: 'Huuhtele ja keitä pakkauksen ohjeen mukaan.',
      },
      {
        amount: 3,
        unit: 'rkl',
        name: 'riisiviinietikkaa',
        inShoppingList: false,
      },
      {
        amount: 1,
        unit: 'tl',
        name: 'suolaa',
        inShoppingList: false,
      },
      {
        amount: 1.5,
        unit: 'rkl',
        name: 'sokeria',
        inShoppingList: false,
      },
      {
        instruction: 'Sekoita keskenään ja kaada riisin joukkoon',
      },
      {
        heading: 'Ponzu',
      },
      {
        amount: 4,
        unit: 'dl',
        name: 'riisiä',
      },
      {
        instruction: 'Huuhtele ja keitä pakkauksen ohjeen mukaan.',
      },
    ],
  },
  {
    id: 'ti1',
    name: 'Tikka masala',
    path: '/tikka-masala',
    portions: 4,
    tags: ['kana', 'intialainen'],
    steps: [
      {
        heading: 'Kanan maustaminen ja paisto',

        amount: 2,
        unit: 'tl',
        name: 'inkivääriä',
        how: 'raastettuna',
      },
      {
        amount: 2,
        unit: 'tl',
        name: 'kurkumaa (ei pakollinen, värjää)',
      },
      {
        amount: 2,
        unit: 'tl',
        name: 'juustokuminaa',
      },
      {
        amount: 2,
        unit: 'tl',
        name: 'paprikajauhetta',
      },
      {
        amount: 1,
        unit: 'tl',
        name: 'korianteria',
      },
      {
        amount: 1,
        unit: 'tl',
        name: 'garam masala -mausteseosta',
      },
      {
        amount: 1,
        unit: 'tl',
        name: 'suolaa',
      },

      {
        amount: 3,
        unit: 'kpl',
        name: 'valkosipulinkynttä',
        how: 'raastettuna',
      },
      {
        amount: 1.5,
        unit: 'dl',
        name: 'turkkilaista jugurttia',
      },
      {
        instruction: `Sekoita mausteet jugurttiin ja mausta kanat: Paista kanoja
          250 asteessa grillivastuksilla ylätasolla n. 10 minuuttia. 
          Vaihtoehtoisesti tee pannulla.`,
      },
      {
        heading: 'Kastike',
      },
      {
        amount: 1,
        name: 'sipuli',
      },
      {
        amount: 400,
        unit: 'g',
        name: 'kuorittuja tomaatteja',
      },
      {
        amount: 1,
        unit: 'ruukku',
        name: 'korianteria',
      },
      {
        instruction:
          'Sekoita puolet mausteseoksesta jugurttiin ja mausta kanat',
      },
    ],
  },
  {
    id: 'to1',
    name: 'Tonnikalapihvit ja perunamuusi',
    path: '/Tonnikalapihvit ja perunamuusi',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'uu1',
    name: 'Uunifetapasta',
    path: '/uunifetapasta',
    portions: 4,
    tags: [],
    steps: [],
  },
  {
    id: 'va1',
    name: 'Valkoinen pitsa',
    path: '/valkoinen-pitsa',
    portions: 4,
    tags: [],
    steps: [],
  },
];
