const knownProblemsDiv = document.querySelector('#known-problems');
const similarTicketsDiv = document.querySelector('#similar-tickets');

export class CustomDivWithParent {
    private parentId: string;
    private parentElement: HTMLElement | null;
    private htmlElement: HTMLElement;

    constructor(htmlElement: string, parentId: string, ) {
        this.parentId = parentId
        this.htmlElement = document.createElement(htmlElement)
        this.parentElement = document.querySelector(`#${this.parentId}`)
        if(!this.parentElement){
            throw new Error(`No HTML element with id "${this.parentElement}" found.`)
        }

    }

    public addInnerText(text:string) {
        this.htmlElement.innerText = text;
    }

    public applyCssStyle(userStyle: string, value: string) {
        this.htmlElement.style.setProperty(userStyle, value)
    }

    public insertHtmlElToParent() {
        this.parentElement!.appendChild(this.htmlElement)
    }
}