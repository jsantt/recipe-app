import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('back-button')
export class BackButton extends LitElement {
  @property({ type: String })
  backUrl: string | undefined;

  static styles = css`
    * {
      box-sizing: border-box;
    }

    a,
    a:visited,
    a:hover,
    a:active {
      color: inherit;
    }

    nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;

      padding: 1rem 1rem 3rem 1rem;
      text-align: center;
    }
  `;

  render() {
    if (!this.backUrl) {
      return null;
    }
    return html`<nav><a href=${this.backUrl}>Takaisin</a></nav>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'back-button': BackButton;
  }
}
