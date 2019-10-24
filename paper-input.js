class PaperInput extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = 'Input Something'
  }

  connectedCallback() {
    console.log('work')
  }
}

customElements.define('paper-input', PaperInput);