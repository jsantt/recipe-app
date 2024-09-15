import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '../bottom-bar/bottom-bar.js';
import { isIngredient, Recipe } from '../data/data.js';
import { navigateTo } from '../router.js';

@customElement('shopping-list-page')
export class ShoppingListModal extends LitElement {
  @property({ type: Array })
  recipes: Recipe[] = [];

  static styles = css`
    h2 {
      border-bottom: 1px solid #ccc;
      padding-bottom: 0.5rem;
    }

    section {
      display: flex;
      flex-wrap: wrap;
    }
  `;

  render() {
    return html`
      <h1>Ostoslista</h1>
      <main>
        ${this.recipes
          ?.filter((recipe: Recipe) => recipe.selected)
          .map(
            recipe => html`
              <h2>${recipe.name}</h2>
              <section>
              ${recipe.steps.map(step =>
                isIngredient(step)
                  ? html`
                        <text-checkbox>
                          <input slot="checkbox" type="checkbox"></input>

                          <div slot="text">
                            ${step.amount} ${step.unit}
                            ${step.name}
                          </div>
                        </text-checkbox>
                      `
                  : null
              )}
                </div>`
          )}
          </section>
      </main>
      <bottom-bar>
        <bottom-bar-button></bottom-bar-button>
        <bottom-bar-button
          middle
          @click=${() => {
            navigateTo('/');
          }}
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z"
            /></svg
          >Takaisin</bottom-bar-button
        >
        <bottom-bar-button
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
            />
          </svg>
          Jaa Ostoslista
        </bottom-bar-button>
      </bottom-bar>
    `;
  }
}
