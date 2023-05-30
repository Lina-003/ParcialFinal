import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <section>
            <my-recipe></my-recipe>
        </section>
        `;
    }
}

customElements.define('app-container', AppContainer)