import { expect } from '@open-wc/testing';
import { getRecipe } from './state.js';

describe('State', () => {
  it('addToShoppingList() returns right recipe', () => {
    const recipe = getRecipe('/pad-thai');
    expect(recipe?.name).to.equal('Pad Thai');
  });
});
