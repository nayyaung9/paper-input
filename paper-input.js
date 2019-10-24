const template = document.createElement('template');
template.innerHTML = `
  <style>
  *:focus {
    outline: none;
  }
  .paperInput_standard {
    border-top: none;
    border-right: none;
    border-left: none;
    padding: 6px 0;
    border-bottom: 1px solid #555;
  }
  .outlined {
    border: 1px solid #ddd !important;
    padding: 10px;
    border-radius: .5em;
  }
  </style>
  <input type="text" class="paperInput_standard"/>
`;

class PaperInput extends HTMLElement {
  static get observedAttributes() {
    return ['placeholder', 'fullwidth', 'type', 'required', 'disabled', 'value', 'autofocus', 'margin', 'class', 'variant']
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
      case 'value':
        return this.$paperInput.value = newValue;
      case 'autofocus':
        return this.$paperInput.autofocus = true;
      case 'margin':
        return this.$paperInput.style.margin = '10px auto';
      case 'class':
        return this.$paperInput.classList.add(newValue);
      case 'variant':
        return this.$paperInput.classList.add(newValue);
      default:
        return;
    }

  
  }
}

customElements.define('paper-input', PaperInput);