import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('add-to-shopping-list-tab')
export class AddToShoppingListTab extends LitElement {
  @property({ type: String }) header = 'My app';

  static styles = css`
    * {
      box-sizing: border-box;
    }
  `;

  render() {
    return html`
      <main>
        <div>Hampurilaiset</div>
        <div>Kalakeitto</div>
      </main>
    `;
  }
}
