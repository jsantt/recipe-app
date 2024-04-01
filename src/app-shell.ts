import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './recipes-page/recipes-page.js';
import './recipe-page/recipe-page.js';

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

  render() {
    return html`${window.location.pathname === '/'
      ? html`<recipes-page></recipes-page>`
      : ''}
    ${window.location.pathname !== '/' ? html`<recipe-page></recipe-page>` : ''}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-shell': AppShell;
  }
}
