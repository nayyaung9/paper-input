const template = document.createElement('template');
template.innerHTML = `
  <style>
  input {
    border-top: none;
    border-right: none;
    border-left: none;
    padding: 6px 0;
    border-bottom: 1px solid #555;
    style: display;
  }
  </style>
  <input type="text" class="paper-input"/>
`;

class PaperInput extends HTMLElement {
  static get observedAttributes() {
    return ['placeholder', 'fullwidth', 'type', 'required', 'disabled']
  }

  $paperInput

  constructor() {
    super();

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
      case 'fullwidth':
        return this.$paperInput.style.width= "100%";
      case 'type':
        return this.$paperInput.type = newValue;
      case 'required':
        return this.$paperInput.required = true;
      case 'disabled':
        return this.$paperInput.disabled = true;
      default:
        return;
    }
  }
}

customElements.define('paper-input', PaperInput);