import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('bottom-bar')
export class BottomBar extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    a,
    a:visited,
    a:hover,
    a:active {
      color: inherit;
    }

    nav {
      border-top: 1px solid grey;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      max-width: 50rem;
      margin: 0px auto;
    }

    ::slotted(ul) {
      display: grid;
      margin: 0;
      padding: 0;
    }

    ::slotted(li) {
      color: red;
    }
  `;

  render() {
    return html`<nav>
      <!--button type="button">Jaa</button-->
      <slot></slot>
    </nav>`;
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

declare global {
  interface HTMLElementTagNameMap {
    'bottom-bar': BottomBar;
  }
}
