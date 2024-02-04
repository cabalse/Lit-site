import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('default-button')
export class DefaultButton extends LitElement {
  @property() title: string = 'default title';
  @state() protected _count = 0;

  render() {
    return html`<button type="button" @click="${this._increment}">
      ${this.title} ${this._count}
    </button>`;
  }

  private _increment() {
    this._count++;
    this.dispatchEvent(
      new CustomEvent('count-changed', { detail: this._count })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'default-button': DefaultButton;
  }
}
