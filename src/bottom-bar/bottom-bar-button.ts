import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('bottom-bar-button')
export class BottomBarButton extends LitElement {
  static styles = css`
    button {
      background-color: var(--color-grey);
      color: white;

      font-family: var(--font-family);

      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      height: 100%;

      line-height: 1.5;
      text-align: center;
      margin: 0px auto;
      touch-action: manipulation;
      width: 100%;
      padding: 0.75rem 0.5rem 0.5rem 0.5rem;
    }
    ::slotted(svg) {
      fill: white;
      width: 1.5rem;
      height: 1.5rem;
    }

    :host([middle]) button {
      position: relative;

      stroke-width: 10px;
      stroke: #555;
    }

    :host([middle]) ::slotted(svg) {
      width: 4rem;
      height: 4rem;
      position: absolute;
      bottom: 1.75rem;
    }
  `;

  render() {
    return html`<button>
      <slot></slot>
    </button>`;
  }
}
