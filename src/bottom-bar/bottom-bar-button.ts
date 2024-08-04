import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('bottom-bar-button')
export class BottomBarButton extends LitElement {
  static styles = css`
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

    :host([middle]) button {
      position: relative;
    }


    :host([middle]) ::slotted(svg) {
      width: 4rem;
      height: 4rem;
      position: absolute;
      bottom: 1rem;
    }
  `;

  render() {
    return html`<button>
      <slot></slot>
    </button>`;
  }
}
