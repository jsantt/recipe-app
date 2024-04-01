import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';

import { Ingredient, Recipe } from '../data/data.js';

import '../back-button/back-button.js';
import '../shopping-list-button/shopping-list-button.js';
import { getState } from '../data/state.js';

@customElement('add-to-shopping-list-tab')
export class AddToShoppingListTab extends LitElement {
  @property({ type: Object }) recipe: Recipe | undefined;

  @state()
  amount: number = 0;

  static styles = css`
    :host {
      display: block;
    }

    :host * {
      box-sizing: border-box;
    }

    input[type='checkbox'] {
      height: 1.5rem;
      width: 1.5rem;
    }

    label {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.25rem 0;
    }
  `;

  render() {
    if (!this.recipe) {
      return null;
    }
    return html`
      <section>
          ${this.recipe?.steps.map(
            step =>
              html` <div class="step">
                <div>
                  ${step.ingredients.map(
                    ingredient =>
                      html`
                        <label
                          ><input
                            @click=${() => this.checked(ingredient)}
                            type="checkbox"
                          />
                          ${ingredient.amount} ${ingredient.unit}
                          ${ingredient.name}
                        </label>
                      `
                  )}
                </div>
              </div>`
          )}
        </section>
      </main>
      <shopping-list-button amount=${this.amount}></shopping-list-button>
      <back-button backUrl=${this.recipe.path}></back-button>
    `;
  }

  checked(ingredient: Ingredient) {
    console.log(ingredient);
    const ingredientCopy = { ...ingredient };
    ingredientCopy.shoppingListStatus = 'in';

    this.amount = getState().filter(() => true).length;
  }
}
