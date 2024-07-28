import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Recipe } from '../data/data.js';
import '../bottom-bar/bottom-bar.js';
import '../text-checkbox.js';

@customElement('instructions-tab')
export class InstructionsTab extends LitElement {
  @property({ type: Object })
  recipe!: Recipe;

  static styles = css`
    :host {
      display: block;
    }

    :host * {
      box-sizing: border-box;
    }

    label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.25rem 0;
    }

    label:has(input:checked) {
      opacity: 0.4;
    }

    .step {
      display: grid;
      grid-template-columns: 99fr 1fr;
      padding: 0.25rem 0;
    }

    .step__done {
      align-self: center;
    }

    .ingredient {
      font-weight: 700;
    }

    .row {
      display: flex;
    }
    .instructions {
      margin-top: 1rem;
      font-weight: 600;
    }
  `;

  render() {
    return html`
      <section>
          ${this.recipe?.steps.map(
            step =>
              html` <h2>${step.heading}</h2>
                <div class="step">
                  <div>
                    ${step.ingredients.map(
                      ingredient =>
                        html`<text-checkbox>
                          <div slot="text">
                            ${ingredient.amount} ${ingredient.unit}
                            ${ingredient.name}
                          </div>
                          <input slot="checkbox" type="checkbox" />
                        </text-checkbox>`
                    )}
                    <div class="instructions">
                      <div>${step.instructions}</div>
                    </div>
                  </div>
                </div>`
          )}
        </section>
      </main>
      <bottom-bar><a href="./">Takaisin</a></bottom-bar>`;
  }
}
