const template = document.createElement('template');
template.innerHTML = `
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