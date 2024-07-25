import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('text-checkbox')
export class InstructionsTab extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    :host * {
      box-sizing: border-box;
    }

    label {
      display: flex;
      align-items: center;
    }

    ::slotted(input[type='checkbox']) {
      min-height: 1.5rem;
      min-width: 1.5rem;
      margin-right: 0.5rem;
    }
  `;

  render() {
    return html`<label
      ><slot name="checkbox"></slot><slot name="text"></slot
    ></label>`;
  }
}
