import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '../back-button/back-button.js';
import { Recipe } from '../data/data.js';

@customElement('shopping-list-modal')
export class ShoppingListModal extends LitElement {
  @property({ type: Boolean }) open = false;

  @property({ type: Array })
  recipes!: Recipe[];

  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host([open]) {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host {
      background: lightblue;
    }
  `;

  render() {
    if (!this.open) {
      return undefined;
    }
    return html`
      <h1>Ostoslista</h1>
      <main>
        ${this.recipes
          .filter((recipe: Recipe) => recipe.selected)
          .map(
            recipe => html`
              <h2>${recipe.name}</h2>
              ${recipe.steps.map(
                step => html`<div>
                  ${step.ingredients.map(
                    ingredient =>
                      html`
                        <div slot="text">
                          ${ingredient.amount} ${ingredient.unit}
                          ${ingredient.name}
                        </div>
                      `
                  )}
                </div>`
              )}
            `
          )}
      </main>
    `;
  }
}
