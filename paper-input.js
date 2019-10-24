const template = document.createElement('template');
template.innerHTML = `
  <style>
  input {
    border-top: none;
    border-right: none;
    border-left: none;
    padding: 6px 0;
    border-bottom: 1px solid #ddd;
  }
  </style>
  <input type="text" name="paper-input" />
`;

class PaperInput extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = 'Input Something'

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log('work')
  }
}

customElements.define('paper-input', PaperInput);