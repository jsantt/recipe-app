import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { data } from '../data/data.js';

@customElement('recipes-page')
export class IndexRoute extends LitElement {
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

    recipe-list {
      display: block;
    }

    ul {
      margin: 0;
      padding: 0;
      text-align: center;
      margin-top: 4rem;
    }

    li {
      list-style-type: none;
      padding: 0.25rem 1rem;
    }
  `;

  render() {
    return html`
      <main>
        <ul>
          ${data.map(
            recipe => html` <li>
              <a href=${recipe.path}>${recipe.name}</a>
            </li>`
          )}
        </ul>
      </main>
    `;
  }
}
