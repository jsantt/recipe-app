import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import './home-page/home-page.js';
import './recipe-page/recipe-page.js';

import { data, Recipe } from './data/data.js';
import { getPage, routeChangedEventName } from './router.js';

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

    const searchParams = new URLSearchParams(window.location.search);

    // sync URL param state
    this.recipes = recipes.map((recipe: Recipe) => {
      if (searchParams.get(recipe.id) === null) {
        return recipe;
      }
      const copy = { ...recipe };
      copy.selected = true;
      return copy;
    });

    // sync url path to state
    this.page = getPage();

    // listen route changes
    window.addEventListener(routeChangedEventName, () => {
      this.page = getPage();
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
      return html`<shopping-list-modal
        .recipes=${this.recipes}
        @recipes-changed=${(event: { detail: Recipe[] }) => {
          this.recipes = event.detail;
        }}
      ></shopping-list-modal>`;
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
