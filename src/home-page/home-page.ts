import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { Recipe } from '../data/data.js';
import '../bottom-bar/bottom-bar.js';
import '../bottom-bar/bottom-bar-button.js';
import { navigateTo, toggleModal } from '../router.js';

import '../shopping-list/shopping-list-modal.js';
import '../shopping-list/shopping-list-button.js';
import '../text-checkbox.js';
import '../choice-chip.js';
import { toggleUrlParam } from '../url.js';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = css`
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
      margin: 0;
    }

    .tags {
      display: grid;
      grid-gap: 0.5rem;
      grid-template-columns: auto;

      margin-top: 2rem;
      margin-bottom: 1rem;
      color: white;
      line-height: 2;
    }

    label {
      display: flex;

      align-items: center;
    }

    input[type='checkbox'] {
      width: 1.25rem;
      height: 1.25rem;
    }

    label {
      margin: 0.5rem 0;
    }

    ul {
      margin: 0;
      padding: 0;
      text-align: center;
    }

    li {
      list-style-type: none;
    }
  `;

  @property({ type: Array })
  recipes: Recipe[] = [];

  @property({ type: Boolean })
  modal!: boolean;

  @query('[id=random]')
  randomCheckbox!: HTMLElement;

  @query('[id=fodmap]')
  fodmapCheckbox!: HTMLElement;

  @query('[id=ready]')
  readyCheckbox!: HTMLElement;

  render() {
    return html`
      <h1>Kaalilaatikko.com</h1>
      <main>
        <section class="tags">
          <choice-chip
            selected
            green
            id="ready"
            @click=${() => this.filterByReadyness(this.readyCheckbox)}
          >
            valmiit
          </choice-chip>
          <choice-chip green id="random" @click=${this.toggleRandom}>
            satunnainen
          </choice-chip>
          <choice-chip
            id="fodmap"
            @click=${() => this.filterByTag('fodmap', this.fodmapCheckbox)}
          >
            fodmap
          </choice-chip>
        </section>
        <ul>
          ${this.recipes
            .filter(recipe => recipe.show !== false)
            .map(
              recipe => html` <li>
                <label>
                  <input
                    slot="checkbox"
                    type="checkbox"
                    ?checked=${recipe.selected === true}
                    name=${recipe.id}
                    .value=${recipe.path}
                    @change=${() => this.recipeClicked(recipe)}
                  />
                  <a
                    slot="text"
                    href=${recipe.path}
                    @click=${(ev: Event) => {
                      ev.preventDefault();
                      navigateTo(recipe.path);
                    }}
                    >${recipe.name}
                  </a>
                </label>
              </li>`
            )}
        </ul>
      </main>
      <bottom-bar>
        <bottom-bar-button @click=${this.removeSelections}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"
            />
          </svg>
          Tyhjennä kaikki
        </bottom-bar-button>
        <bottom-bar-button
          middle
          @click=${() => {
            // this.randomCheckbox.setAttribute('selected', '') = true;
            this.toggleRandom();
          }}
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-114.3 0c11.6 36 3.1 77-25.4 105.5L320 413.8l0 34.2zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
            />
          </svg>
          Satunnainen
        </bottom-bar-button>
        <bottom-bar-button @click=${HomePage._share}
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
            />
          </svg>
          Jaa sovellus
        </bottom-bar-button>
      </bottom-bar>
      <shopping-list-button
        .recipes=${this.recipes}
        @click=${() => {
          toggleModal('shopping-list');
        }}
      ></shopping-list-button>
      <shopping-list-modal
        .recipes=${this.recipes}
        ?open=${this.modal}
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

    this.dispatchChanged(recipes);
  }

  private dispatchChanged(recipes: Recipe[]) {
    this.dispatchEvent(
      new CustomEvent('recipes-changed', {
        detail: recipes,
      })
    );
  }

  toggleRandom() {
    const random = Math.floor(Math.random() * this.recipes.length);

    const recipes = this.recipes.map((item, index: number) => {
      const copy = { ...item };

      if (index === random || !this.randomCheckbox.hasAttribute('selected')) {
        copy.show = true;
      } else {
        copy.show = false;
      }
      return copy;
    });

    toggleUrlParam('random');

    this.dispatchChanged(recipes);
  }

  filterByReadyness(checkbox: HTMLElement) {
    const recipes = this.recipes.map(item => {
      const copy = { ...item };

      if (item.steps.length > 0 || !checkbox.hasAttribute('selected')) {
        copy.show = true;
      } else {
        copy.show = false;
      }
      return copy;
    });

    toggleUrlParam('ready');

    this.dispatchChanged(recipes);
  }

  filterByTag(tagName: string, checkbox: HTMLElement) {
    const recipes = this.recipes.map(item => {
      const copy = { ...item };

      if (item.tags.includes(tagName) || !checkbox.hasAttribute('selected')) {
        copy.show = true;
      } else {
        copy.show = false;
      }
      return copy;
    });

    toggleUrlParam(tagName);

    this.dispatchChanged(recipes);
  }

  removeSelections(event: Event) {
    event.preventDefault();
    const recipes = this.recipes?.map((recipe: Recipe) => {
      const copy = { ...recipe };
      copy.selected = false;
      return copy;
    });

    this.dispatchChanged(recipes);

    const newUrl = new URL(window.location.href);
    newUrl.search = '';
    window.history.pushState(null, document.title, newUrl);
  }

  static _share() {
    if (navigator.share) {
      navigator.share({
        title: 'Kaalilaatikko.com',
        text: 'Hei, tässä ehdottamani ruoat',
        url: window.location.href,
      });
    }
  }
}
