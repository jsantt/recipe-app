export type Ingredient = {
  amount: number;
  unit: 'g' | 'kpl' | 'dl' | 'rkl' | 'tl';
  name: string;
  shoppingListStatus: 'in' | 'out';
};

export type Steps = {
  heading?: string;
  ingredients: Ingredient[];
  instructions: string;
};

export type Recipe = {
  name: string;
  path: string;
  portions: Number;
  tags: Array<string>;
  steps: Steps[];
};

export const data: Recipe[] = [
  {
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
            shoppingListStatus: 'in',
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
            shoppingListStatus: 'in',
          },
          {
            amount: 1,
            unit: 'tl',
            name: 'suolaa',
            shoppingListStatus: 'in',
          },
          {
            amount: 1.5,
            unit: 'rkl',
            name: 'sokeria',
            shoppingListStatus: 'in',
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
            shoppingListStatus: 'in',
          },
        ],
        instructions: 'Huuhtele ja keitä pakkauksen ohjeen mukaan.',
      },
    ],
  },
  {
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
            shoppingListStatus: 'in',
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
            shoppingListStatus: 'in',
          },
          {
            amount: 1,
            unit: 'tl',
            name: 'suolaa',
            shoppingListStatus: 'in',
          },
          {
            amount: 1.5,
            unit: 'rkl',
            name: 'sokeria',
            shoppingListStatus: 'in',
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
            shoppingListStatus: 'in',
          },
        ],
        instructions: 'Huuhtele ja keitä pakkauksen ohjeen mukaan.',
      },
    ],
  },
];
/*

  {
    id: 2,
    name: 'Phad thai',
    path: 'another',
    portions: 4,
    tags: [],
    incredients: [
      {
        amount: 700,
        amountUnit: 'g',
        ingredient: 'keittiojuureksia',
        shoppingListStatus: 'in',
      },
    ],
  },
  {
    id: 3,
    name: 'Kananuudeliwok',
    path: 'another',
    portions: 4,
    tags: [],
    incredients: [
      {
        amount: 700,
        amountUnit: 'g',
        ingredient: 'keittiojuureksia',
        shoppingListStatus: 'in',
      },
    ],
  },
  {
    id: 4,
    name: 'Nakkikastike ja perunamuusi',
    path: 'another',
    portions: 4,
    tags: [],
    incredients: [
      {
        amount: 700,
        amountUnit: 'g',
        ingredient: 'keittiojuureksia',
        shoppingListStatus: 'in',
      },
    ],
  },
  {
    id: 5,
    name: 'Jauhelihakastike ja spaghetti',
    path: 'another',
    portions: 4,
    tags: [],
    incredients: [
      {
        amount: 700,
        amountUnit: 'g',
        ingredient: 'keittiojuureksia',
        shoppingListStatus: 'in',
      },
    ],
  },
  {
    id: 6,
    name: 'Kalakeitto',
    path: 'another',
    portions: 4,
    tags: [],
    incredients: [
      {
        amount: 700,
        amountUnit: 'g',
        ingredient: 'keittiojuureksia',
        shoppingListStatus: 'in',
      },
    ],
  },
  {
    id: 7,
    name: 'Hampurilaiset',
    path: 'another',
    portions: 4,
    tags: [],
    incredients: [
      {
        amount: 700,
        amountUnit: 'g',
        ingredient: 'keittiojuureksia',
        shoppingListStatus: 'in',
      },
    ],
  },
  {
    id: 8,
    name: 'Pinaattiletut',
    path: 'another',
    portions: 4,
    tags: [],
    incredients: [
      {
        amount: 700,
        amountUnit: 'g',
        ingredient: 'keittiojuureksia',
        shoppingListStatus: 'in',
      },
    ],
  },
  {
    id: 9,
    name: 'Kanasalaatti',
    path: 'another',
    portions: 4,
    tags: [],
    incredients: [
      {
        amount: 700,
        amountUnit: 'g',
        ingredient: 'keittiojuureksia',
        shoppingListStatus: 'in',
      },
    ],
  },
  {
    id: 10,
    name: 'Pitsa',
    path: 'another',
    portions: 4,
    tags: [],
    incredients: [
      {
        amount: 700,
        amountUnit: 'g',
        ingredient: 'keittiojuureksia',
        shoppingListStatus: 'in',
      },
    ],
  },
  {
    id: 11,
    name: 'Valkoinen pitsa',
    path: 'another',
    portions: 4,
    tags: [],
    incredients: [
      {
        amount: 700,
        amountUnit: 'g',
        ingredient: 'keittiojuureksia',
        shoppingListStatus: 'in',
      },
    ],
  },
  {
    id: 12,
    name: 'Butter chicken',
    path: 'another',
    portions: 4,
    tags: [],
    incredients: [
      {
        amount: 700,
        amountUnit: 'g',
        ingredient: 'keittiojuureksia',
        shoppingListStatus: 'in',
      },
    ],
  },
  {
    id: 13,
    name: 'Tikka masala',
    path: 'another',
    portions: 4,
    tags: [],
    incredients: [
      {
        amount: 700,
        amountUnit: 'g',
        ingredient: 'keittiojuureksia',
        shoppingListStatus: 'in',
      },
    ],
  },
  {
    id: 14,
    name: 'Tonnikalapihvit',
    path: 'another',
    portions: 4,
    tags: [],
    incredients: [
      {
        amount: 700,
        amountUnit: 'g',
        ingredient: 'keittiojuureksia',
        shoppingListStatus: 'in',
      },
    ],
  },
  {
    id: 15,
    name: 'Uunifetapasta',
    path: 'another',
    portions: 4,
    tags: [],
    incredients: [
      {
        amount: 700,
        amountUnit: 'g',
        ingredient: 'keittiojuureksia',
        shoppingListStatus: 'in',
      },
    ],
  },
];
*/
