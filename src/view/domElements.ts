const knownProblemsDiv = document.querySelector('#known-problems');
const similarTicketsDiv = document.querySelector('#similar-tickets');

export class CustomDiv {
    private divId: string;
    private htmlEl: HTMLElement;

    constructor(divId: string, htmlEl: string) {
        this.divId = divId
        this.htmlEl = document.createElement(htmlEl)
    }

    public addInnerText(text:string) {
        this.htmlEl.innerText = text;
    }

    public applyCssStyle(userStyle: string, value: string) {
        this.htmlEl.style.setProperty(userStyle, value)
    }

    public insertHtmlElToParent() {
        document.querySelector(`#${this.divId}`).appendChild(this.htmlEl)
    }
}