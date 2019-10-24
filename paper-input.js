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
  <input type="text" name="paper-input"/>
`;

class PaperInput extends HTMLElement {
  static get observedAttributes() {
    return ['placeholder']
  }

  $paperInput

  constructor() {
    super();
    this.innerHTML = 'Input Something'

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$paperInput = this.shadowRoot.querySelector('input');
  }

  connectedCallback() {
    console.log('work')
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'placeholder':
        return this.$paperInput.placeholder = newValue;
      default:
        return;
    }
  }
}

customElements.define('paper-input', PaperInput);