import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { navigateTo } from './router.js';

@customElement('router-link')
export class SelectableChip extends LitElement {
  @property({ type: String, reflect: true })
  href: string = '';

  static styles = css`
    :host {
      display: inline-block;
    }
    a,
    :visited {
      color: var(--color-white);
    }
  `;

  render() {
    return html`<a
      href=${this.href}
      @click=${(ev: Event) => navigateTo(ev, this.href)}
    >
      <slot></slot>
    </a>`;
  }
}
