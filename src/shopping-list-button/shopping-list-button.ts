import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('shopping-list-button')
export class ShoppingListButton extends LitElement {
  @property({ type: Number }) amount: Number = 0;

  static styles = css`
    :host * {
      box-sizing: border-box;
    }

    :host {
      display: block;
    }

    aside {
      position: fixed;
      right: 0;
      top: 80vh;
      bottom: 0;

      background-color: white;
      --border: 2px solid black;
      border-top: var(--border);
      border-bottom: var(--border);
      border-left: var(--border);
      height: 4rem;
      width: 2rem;

      padding: 0.25rem;
      text-align: center;
    }
  `;

  render() {
    return html`<aside>${this.amount}</aside>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shopping-list-button': ShoppingListButton;
  }
}
