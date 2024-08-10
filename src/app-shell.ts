import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import './home-page/home-page.js';
import './recipe-page/recipe-page.js';

import { getState } from './data/state.js';
import { Recipe } from './data/data.js';
import { getPage, routeChangedEventName } from './router.js';

@customElement('app-shell')
export class AppShell extends LitElement {
  static styles = css``;

  @state()
  recipes: Recipe[];

  @state()
  page: 'home' | 'recipe' = 'home';

  @state()
  modal?: 'shopping-list';

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

    this.page = getPage();

    window.addEventListener(routeChangedEventName, () => {
      this.page = getPage();
      if (window.location.search.includes('shopping-list')) {
        this.modal = 'shopping-list';
      } else {
        this.modal = undefined;
      }
    });
  }

  render() {
    if (this.page === 'home') {
      return html`${this.modal}<home-page
          .modal=${this.modal === 'shopping-list'}
          .recipes=${this.recipes}
          @recipes-changed=${(event: { detail: Recipe[] }) => {
            this.recipes = event.detail;
          }}
        ></home-page>`;
    }

    return html`<recipe-page
      .modal=${this.modal === 'shopping-list'}
      .recipes=${this.recipes}
      @recipes-changed=${(event: { detail: Recipe[] }) => {
        this.recipes = event.detail;
      }}
    ></recipe-page>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-shell': AppShell;
  }
}
