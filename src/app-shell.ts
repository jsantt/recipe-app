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
  static styles = css``;

  @state()
  recipes: Recipe[];

  @state()
  page: 'home' | 'recipe' = 'home';

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

    if (window.location.pathname !== '/') {
      this.page = 'recipe';
    }
  }

  render() {
    if (this.page === 'home') {
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
