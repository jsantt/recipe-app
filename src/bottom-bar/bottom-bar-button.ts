import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('bottom-bar-button')
export class BottomBarButton extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }
    button {
      background: none;
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      text-align: center;
      margin: 0px auto;
      touch-action: manipulation;
      width: 100%;
      padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    }
    ::slotted(svg) {
      width: 1.5rem;
      height: 1.5rem;
    }
  `;

  render() {
    return html`<button>
    <slot></slot>
    </button>`;
  }
}
