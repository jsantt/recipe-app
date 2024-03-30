import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Recipe } from '../data/data.js';



@customElement('instructions-tab')
export class InstructionsTab extends LitElement {
  @property({ type: Object }) recipe: Recipe | undefined;

  static styles = css`
    :host {
      display: block;
    }

    :host * {
      box-sizing: border-box;
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
  `;

  render() {
    return html`
      <section>
          ${this.recipe?.steps.map(
            step =>
              html`
              <h2>${step.heading}</h2>
              <div class="step">
                <div>
                  ${step.ingredients.map(
                    ingredient =>
                      html`<div class="ingredient">
                        ${ingredient.amount} ${ingredient.unit}
                        ${ingredient.name}
                      </div>`
                  )}
                  ${step.instructions}
                </div>
                <div class="step__done">
                  <input type="checkbox"></input>
                  </div>
              </div>`
          )}
        </section>
      </main>
    `;
  }
}
