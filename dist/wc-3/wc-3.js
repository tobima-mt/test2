import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@tobima-test/wc-2/wc-2';

export const WC3 = class extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          color: white;
          font-weight: bold;
        }

        wc-2 {
          border: double 3px palegreen;
        }
      </style>
      <div style="margin: 12px; background: navy; padding: 8px;">
        <h2>Hello from WC-3! [prop3=[[prop3]]]</h2>
        <wc-2 prop1="[[prop1]]" prop2="[[prop2]]"></wc-1>
      </div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'wc3.prop1.default',
      },
      prop2: {
        type: String,
        value: 'wc3.prop2.default',
      },
      prop3: {
        type: String,
        value: 'wc3.prop2.default',
      },
    };
  }
}

window.customElements.define('wc-3', WC3);
