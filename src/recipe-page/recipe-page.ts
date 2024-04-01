import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { data, Recipe } from '../data/data.js';
import './instructions-tab.js';
import './add-to-shopping-list-tab.js';

const ADD_TO_SHOPPING_LIST_URL = '/add-to-shopping-list';

@customElement('recipe-page')
export class RecipePage extends LitElement {
  static styles = css`
    .tabs {
      margin-bottom: 1.5rem;
      ul {
        margin: 0;
        padding: 0;
        display: flex;
      }

      li {
        list-style: none;
        padding-right: 0.5rem;
      }

      a {
        text-decoration: none;
      }

      a,
      a:visited,
      a:hover,
      a:active {
        color: inherit;
      }

      a.active {
        text-decoration: underline;
        font-weight: 700;
      }
    }
  `;

  @state()
  private recipe: Recipe | undefined;

  @state()
  private isAddToShoppingListPage = false;

  constructor() {
    super();

    const currentPath = window.location.pathname;
    const addToShoppingListIndex = currentPath.indexOf(
      ADD_TO_SHOPPING_LIST_URL
    );

    let recipeName: string;
    if (addToShoppingListIndex > -1) {
      this.isAddToShoppingListPage = true;
      recipeName = currentPath.substring(
        0,
        currentPath.indexOf(ADD_TO_SHOPPING_LIST_URL)
      );
    } else {
      recipeName = currentPath;
    }

    this.recipe = data.filter(item => item.path === recipeName).at(0);
  }

  render() {
    if (!this.recipe) {
      return html`error`;
    }
    return html`
      <heading><h1>${this.recipe.name}</h1></heading>
      <nav class="tabs">
        <ul>
          <li>
            <a
              href="${this.recipe.path}"
              class=${this.isAddToShoppingListPage ? '' : 'active'}
              >Ohje</a
            >
          </li>
          <li>
            <a
              href="${this.recipe.path}/add-to-shopping-list"
              class=${this.isAddToShoppingListPage ? 'active' : ''}
              >Lisää Ostoslistalle</a
            >
          </li>
        </ul>
      </nav>
      <main>
        ${this.isAddToShoppingListPage === false
          ? html` <instructions-tab .recipe=${this.recipe}></instructions-tab> `
          : html`<add-to-shopping-list-tab
              .recipe=${this.recipe}
            ></add-to-shopping-list-tab>`}
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'recipe-page': RecipePage;
  }
}
