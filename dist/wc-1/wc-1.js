import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

export const WC1 = class extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          color: blue;
          font-weight: bold;
        }
      </style>
      <h2>Hello from WC-1! [prop=[[prop]]]</h2>
    `;
  }
  static get properties() {
    return {
      prop: {
        type: String,
        value: 'defaultValue',
      },
    };
  }
}

window.customElements.define('wc-1', WC1);
