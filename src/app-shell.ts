import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import './home-page/home-page.js';
import './recipe-page/recipe-page.js';
import './shopping-list-page/shopping-list-page.js';

import { data, Recipe } from './data/data.js';
import { getPage, routeChangedEventName } from './router.js';
import { readFromLocalStorage } from './local-storage.js';
import { addIntoUrl } from './url.js';

@customElement('app-shell')
export class AppShell extends LitElement {
  static styles = css``;

  @state()
  recipes: Recipe[];

  @state()
  page: 'home' | 'recipe' | 'shopping-list' = 'home';

  @state()
  modal?: 'shopping-list';

  constructor() {
    super();
    const recipes = data;

    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.size === 0) {
      searchParams = readFromLocalStorage('searchParams');
      addIntoUrl(searchParams);
    }

    // sync URL param state
    this.recipes = recipes.map((recipe: Recipe) => {
      if (searchParams.get(recipe.id) === null) {
        return recipe;
      }
      const copy = { ...recipe };
      copy.selected = true;
      return copy;
    });

    this.page = getPage(window.location.pathname);

    // listen route changes
    window.addEventListener(routeChangedEventName, () => {
      this.page = getPage(window.location.pathname);
    });
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

    if (this.page === 'shopping-list') {
      return html`<shopping-list-page
        .recipes=${this.recipes}
        @recipes-changed=${(event: { detail: Recipe[] }) => {
          this.recipes = event.detail;
        }}
      ></shopping-list-page>`;
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
