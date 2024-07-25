export type Ingredient = {
  amount: number;
  unit: 'g' | 'kpl' | 'dl' | 'rkl' | 'tl';
  name: string;
  inShoppingList: boolean;
};

export type Steps = {
  heading?: string;
  ingredients: Ingredient[];
  instructions: string;
};

export type Recipe = {
  id: string;
  name: string;
  path: string;
  portions: Number;
  tags: Array<string>;
  steps: Steps[];
  selected?: boolean;
};

export const data: Recipe[] = [
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
    id: 'pi1',
    name: 'Pinaattipasta',
    path: '/pinaattipasta',
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
        ingredients: [
          {
            amount: 4,
            unit: 'dl',
            name: 'riisiä',
            inShoppingList: false,
          },
        ],
        instructions: 'Huuhtele ja keitä pakkauksen ohjeen mukaan.',
      },
      {
        ingredients: [
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
        ],
        instructions: 'Sekoita keskenään ja kaada riisin joukkoon',
      },
      {
        heading: 'Ponzu',
        ingredients: [
          {
            amount: 4,
            unit: 'dl',
            name: 'riisiä',
            inShoppingList: false,
          },
        ],
        instructions: 'Huuhtele ja keitä pakkauksen ohjeen mukaan.',
      },
    ],
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
        ingredients: [
          {
            amount: 4,
            unit: 'dl',
            name: 'riisiä',
            inShoppingList: false,
          },
        ],
        instructions: 'Huuhtele ja keitä pakkauksen ohjeen mukaan.',
      },
      {
        ingredients: [
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
        ],
        instructions: 'Sekoita keskenään ja kaada riisin joukkoon',
      },
      {
        heading: 'Ponzu',
        ingredients: [
          {
            amount: 4,
            unit: 'dl',
            name: 'riisiä',
            inShoppingList: false,
          },
        ],
        instructions: 'Huuhtele ja keitä pakkauksen ohjeen mukaan.',
      },
    ],
  },
];
