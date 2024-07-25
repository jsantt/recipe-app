import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Recipe } from '../data/data.js';
import './instructions-tab.js';
import { getRecipe } from '../data/state.js';

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

  @property({ type: Array })
  recipes!: Recipe[];

  @state()
  private recipe: Recipe | undefined;

  @state()
  private open: boolean = false;

  constructor() {
    super();

    const currentPath = window.location.pathname;

    const recipeName: string = currentPath;
    this.recipe = getRecipe(recipeName);
  }

  render() {
    if (!this.recipe) {
      return html`error`;
    }
    return html`
      <heading><h1>${this.recipe.name}</h1></heading>

      <main>
        <instructions-tab .recipe=${this.recipe}></instructions-tab>
      </main>
      <shopping-list-button
        @click=${() => {
          this.open = !this.open;
        }}
      ></shopping-list-button>
      <shopping-list-modal ?open=${this.open}></shopping-list-modal>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'recipe-page': RecipePage;
  }
}
