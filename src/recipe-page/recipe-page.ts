import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  isHeading,
  isIngredient,
  isInstruction,
  Recipe,
} from '../data/data.js';
import { getRecipe } from '../data/state.js';

import '../text-checkbox.js';
import '../bottom-bar/bottom-bar.js';
import '../bottom-bar/bottom-bar-button.js';

import '../selectable-chip.js';
import '../selectable-text.js';
import '../shopping-list-page/shopping-list-button.js';

import { navigateTo } from '../router.js';

@customElement('recipe-page')
export class RecipePage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    h2 {
      border-bottom: 1px solid #ccc;
      padding-bottom: 0.5rem;
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

    main {
      margin-bottom: 6rem;
    }

    selectable-chip {
      margin-bottom: 0.5rem;
    }

    button {
      padding: 0.75rem;
      border-radius: 2rem;
    }

    p {
      margin: 0;
      padding: 0;

      margin-top: 0.5rem;
    }
  `;

  @property({ type: Array })
  recipes?: Recipe[] = [];

  @property({ type: Boolean })
  modal!: boolean;

  @state()
  private recipe: Recipe | undefined;

  @state()
  private wakeLock: any;

  constructor() {
    super();

    const currentPath = window.location.pathname;

    const recipeName: string = currentPath;
    this.recipe = getRecipe(recipeName);
  }

  async toggleWakeLock() {
    // create an async function to request a wake lock
    try {
      this.wakeLock = await (navigator as any).wakeLock.request('screen');
    } catch (err) {
      // The Wake Lock request has failed - usually system related, such as battery.
      console.log(err);
    }
  }

  async release() {
    await this.wakeLock.release();
    this.wakeLock = null;
  }

  render() {
    if (!this.recipe) {
      return html`error`;
    }
    return html`
      <heading><h1>${this.recipe.name}</h1></heading>
      ${'wakeLock' in navigator
        ? html`<!--p>
            <button type="button" @click=${this.toggleWakeLock()}>
              Pidä näyttö päällä
            </button>
          </p-->`
        : null}
      <main>
        ${this.recipe?.steps.map(
          step =>
            html`<div class="step">
              ${isHeading(step) ? html` <h2>${step.heading}</h2>` : null}
              ${isInstruction(step)
                ? html` <selectable-text>${step.instruction}</selectable-text>`
                : null}
              ${isIngredient(step)
                ? html` <selectable-chip>
                    ${step.amount} ${step.unit} ${step.name}
                  </selectable-chip>`
                : null}
            </div>`
        )}
      </main>
      <shopping-list-button
        .recipes=${this.recipes}
        @click=${(ev: Event) => {
          navigateTo(ev, 'shopping-list');
        }}
      ></shopping-list-button>
      <bottom-bar>
        <bottom-bar-button
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20l44 0 0 44c0 11 9 20 20 20s20-9 20-20l0-44 44 0c11 0 20-9 20-20s-9-20-20-20l-44 0 0-44c0-11-9-20-20-20s-20 9-20 20l0 44-44 0c-11 0-20 9-20 20z"
            /></svg
          >Lisää ostoslistalle</bottom-bar-button
        >
        <bottom-bar-button
          middle
          @click=${(ev: Event) => {
            navigateTo(ev, '/');
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
          Jaa resepti
        </bottom-bar-button>
      </bottom-bar>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'recipe-page': RecipePage;
  }
}
