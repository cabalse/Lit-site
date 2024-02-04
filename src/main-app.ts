import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import './atoms/default-button';

@customElement('main-app')
export class MainApp extends LitElement {
  @property() name = 'to my CV site';
  @state() protected _count = 0;

  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`<h1>Welcome ${this.name} ${this._count}</h1>
      <default-button
        @count-changed=${this._counterListener}
      ></default-button>`;
  }

  private _counterListener(e: CustomEvent) {
    this._count = e.detail;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-app': MainApp;
  }
}
