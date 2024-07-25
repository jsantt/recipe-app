import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Recipe } from '../data/data.js';
import '../back-button/back-button.js';
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
                    <text-checkbox>
                      <div>${step.instructions}</div>
                      <input type="checkbox" />
                    </text-checkbox>
                  </div>
                </div>`
          )}
        </section>
      </main>
      <back-button backUrl="./"></back-button>
    `;
  }
}
