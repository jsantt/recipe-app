import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import './home-page/home-page.js';
import './recipe-page/recipe-page.js';

import './shopping-list/shopping-list-modal.js';
import './shopping-list/shopping-list-button.js';
import { getState } from './data/state.js';
import { Recipe } from './data/data.js';

@customElement('app-shell')
export class AppShell extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }
    aside {
      position: fixed;
      right: 0;
      border: 1px solid black;
      width: 5rem;
      bottom: 6rem;
    }
  `;

  @state()
  recipes: Recipe[];

  constructor() {
    super();
    const recipes = getState();
    const searchParams = new URLSearchParams(window.location.search);

    this.recipes = recipes.map((recipe: Recipe) => {
      if (searchParams.get(recipe.id) === null) {
        return recipe;
      }
      const copy = { ...recipe };
      copy.selected = true;
      return copy;
    });
  }

  render() {
    if (window.location.pathname === '/') {
      return html`<home-page
        .recipes=${this.recipes}
        @recipes-changed=${(event: { detail: Recipe[] }) => {
          this.recipes = event.detail;
        }}
      ></home-page>`;
    }

    return html`<recipe-page .recipes=${this.recipes}></recipe-page>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-shell': AppShell;
  }
}
