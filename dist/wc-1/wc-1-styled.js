import {WC1} from './wc-1';

console.log(WC1);

const moduleName = 'wc-1-styles';

const $template = document.createElement('template');

$template.innerHTML = `<dom-module id="${moduleName}" theme-for="wc-1">
  <template>
    <style>
      :host {
        background: blue;
        color: white;
        padding: 12px;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($template.content);


console.log('0');
if (WC1.template && !WC1.template.content.querySelector(`style[include="${moduleName}"]`)) {
  console.log('a');
  let styleEl = document.createElement('style');
  styleEl.innerHTML = `
  :host {
    background: blue;
    color: white;
    padding: 12px;
  }`;

  //styleEl.setAttribute('include', moduleName);
  console.log(styleEl);
  console.log(WC1.template.content);
  WC1.template.content.appendChild(styleEl);
  console.log(WC1.template.content);
}

console.log(WC1);
