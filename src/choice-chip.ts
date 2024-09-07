import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('choice-chip')
export class InstructionsTab extends LitElement {
  @property({ type: Boolean })
  selected: boolean = false;

  static styles = css`
    :host {
      display: inline-block;
    }
    :host([selected]) {
      background: red;
    }

    button {
      all: unset;
      font-size: 1rem;
      border-radius: 2rem;
      background: rgb(152, 208, 195);
      color: var(--color-black);
      margin: 0.25rem;
      padding: 0.062rem 0.5rem;
    }
  `;

  render() {
    return html`<button
      @click=${() => {
        this.selected = !this.selected;
      }}
    >
      <slot></slot>
    </button>`;
  }
}
