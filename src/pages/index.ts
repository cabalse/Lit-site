import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('index')
export class Index extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  @property() name = 'to my CV site';

  render() {
    return html`<h1>Welcome ${this.name}</h1> `;
  }
}
