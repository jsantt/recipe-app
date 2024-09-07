import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('text-checkbox')
export class InstructionsTab extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    :host([green]) label {
      background: rgb(152, 208, 195);
      color: var(--color-black);
    }

    :host([hideCheckbox]) ::slotted(input[type='checkbox']) {
      appearance: none;
    }

    label {
      background: var(--color-grey);
      display: flex;
      align-items: center;
      margin: 0.25rem;
      padding: 0.125rem 0.75rem;
      border-radius: 2rem;
    }

    ::slotted(input[type='checkbox']) {
      min-height: 1.75rem;
      min-width: 1.5rem;
      margin-right: 0.5rem;
      border-radius: 1rem;
    }
    ::slotted(a) {
      text-align: left;
    }
  `;

  render() {
    return html`<label
      ><slot name="checkbox"></slot><slot name="text"></slot
    ></label>`;
  }
}
