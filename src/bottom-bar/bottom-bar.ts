import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('bottom-bar')
export class BottomBar extends LitElement {
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
      background: white;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      max-width: 500px;
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
