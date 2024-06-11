//HEADER
class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    <a href="index.html" class="logo"><h1>Sky of the <span>day.</span></h1></a>
`
    }
}
customElements.define('special-header', SpecialHeader)