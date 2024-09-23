import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('selectable-chip')
export class SelectableChip extends LitElement {
  @property({ type: Boolean, reflect: true })
  selected: boolean = false;

  static styles = css`
    :host {
      display: inline-block;
    }

    :host([selected]) button {
      background: rgb(152, 208, 195);
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    :host([round]) button {
      border-radius: 2rem;
    }

    button {
      all: unset;

      background: #ccc;
      border-radius: 0.25rem;
      color: var(--color-black);
      cursor: pointer;

      display: flex;
      align-items: center;
      font-size: 1rem;
      line-height: 1;

      padding: 0.375rem 1rem;
    }

    :host([selected]) svg {
      display: initial;
    }

    svg {
      display: none;
      padding-right: 0.25rem;
      width: 0.75rem;
    }
  `;

  render() {
    return html`<button
      @click=${() => {
        this.selected = !this.selected;
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
      <slot></slot>
    </button>`;
  }
}
