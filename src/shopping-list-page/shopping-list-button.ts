import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Recipe } from '../data/data.js';

@customElement('shopping-list-button')
export class ShoppingListButton extends LitElement {
  @property({ type: Array })
  recipes: Recipe[] = [];

  static styles = css`
    :host {
      display: block;
    }

    button {
      position: fixed;
      right: 0;
      top: 80vh;
      bottom: 0;

      background-color: var(--color-blue);
      color: white;
      fill: white;
      border-top: var(--border);
      border-bottom: var(--border);
      border-left: var(--border);
      height: 6rem;
      width: 2.5rem;

      padding: 0.5rem;
      text-align: center;

      z-index: 1;
    }
  `;

  render() {
    return html`<button>
      <aside>
        ${this.recipes?.filter((recipe: Recipe) => recipe.selected).length}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
          />
        </svg>
      </aside>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shopping-list-button': ShoppingListButton;
  }
}
