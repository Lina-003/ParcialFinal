export enum Attribute2 {
    "Title" = "Title",
    "Description" = "Description",
    "Image" = "Image"
}

export default class Recipe extends HTMLElement {

    Title?: string;
    Description?: string;
    Image?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute2, null> = {
            Title: null,
            Description: null,
            Image: null,
        }
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(
        propName: Attribute2,
        oldValue: string | undefined,
        newValue: string | undefined
      ) {
        this[propName] = newValue;
        this.render();
      }

    render() {
        if (this.shadowRoot) 
        this.shadowRoot.innerHTML = `
        <section>
        <h1>Title</h1>
        
        </section>
        `;
        
    }
}


customElements.define('my-recipe', Recipe);