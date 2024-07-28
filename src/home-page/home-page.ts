import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Recipe } from '../data/data.js';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    a,
    a:hover,
    a:active {
      color: inherit;
      font-weight: 700;
    }

    a:visited {
      font-weight: 400;
    }

    main {
      max-width: 25rem;
    }

    ul {
      margin: 0;
      padding: 0;
      text-align: center;
      margin-top: 4rem;
    }

    li {
      list-style-type: none;
    }
  `;

  @property({ type: Array })
  recipes!: Recipe[];

  @state()
  open: boolean = false;

  render() {
    return html`
      <h1>Kaalilaatikko.com</h1>
      <h2>Kauppalista ja reseptit yhdessä</h2>
      <main>
        <ul>
          ${this.recipes.map(
            recipe => html` <li>
              <text-checkbox>
                <a slot="text" href=${recipe.path}>${recipe.name}</a>
                <input
                  slot="checkbox"
                  type="checkbox"
                  ?checked=${recipe.selected === true}
                  name=${recipe.id}
                  .value=${recipe.path}
                  @change=${() => this.recipeClicked(recipe)}
                />
              </text-checkbox>
            </li>`
          )}
        </ul>
      </main>
      <bottom-bar>
        <!--button type="button" @click=${this.removeSelections}>
            Tyhjennä kaikki
          </button-->
      </bottom-bar>
      <shopping-list-button
        .recipes=${this.recipes}
        @click=${() => {
          this.open = !this.open;
        }}
      ></shopping-list-button>
      <shopping-list-modal
        .recipes=${this.recipes}
        ?open=${this.open}
      ></shopping-list-modal>
    `;
  }

  recipeClicked(clickedRecipe: Recipe) {
    const newSearchParams = new URLSearchParams(window.location.search);
    if (newSearchParams.get(clickedRecipe.id) === null) {
      newSearchParams.append(clickedRecipe.id, '');
    } else {
      newSearchParams.delete(clickedRecipe.id);
    }

    const newUrl = new URL(window.location.href);
    newUrl.search = newSearchParams.toString();
    window.history.pushState(null, document.title, newUrl);

    const recipes = this.recipes.map((recipe: Recipe) => {
      if (clickedRecipe.id !== recipe.id) {
        return recipe;
      }

      const copy = { ...recipe };
      copy.selected = !copy.selected;
      return copy;
    });

    this.dispatchEvent(
      new CustomEvent('recipes-changed', {
        detail: recipes,
      })
    );
  }

  removeSelections(event: Event) {
    event.preventDefault();
    const recipes = this.recipes.map((recipe: Recipe) => {
      const copy = { ...recipe };
      copy.selected = false;
      return copy;
    });

    this.dispatchEvent(
      new CustomEvent('recipes-changed', {
        detail: recipes,
      })
    );

    // const newUrl = new URL(
    // `${window.location.origin}${window.location.pathname}`
    // );

    // const newUrl = new URL(`${window.location.origin}${window.location.pathname}`)
    // newUrl.search = '';
    // window.history.pushState(null, document.title, newUrl);
  }
}
