import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@tobima-test/wc-1/wc-1';
import {sayHello} from '@tobima-test/lib/lib';

/**
 * `wc-1`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export const WC2 = class extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          color: white;
          font-weight: bold;
        }

        wc-1 {
          color: yellow;
        }
      </style>
      <div style="margin: 12px; background: navy; padding: 8px;">
        <h2>Hello from wc-2! [prop2=[[prop2]]]</h2>
        <wc-1 prop="[[prop1]]"></wc-1>
      </div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'prop1.default',
      },
      prop2: {
        type: String,
        value: 'prop2.default',
      },
    };
  }
}

window.customElements.define('wc-2', WC2);

sayHello('wc-2');