declare var ZAFClient: any
import { CustomDivWithParent } from "./view/domElements.js"

const client = ZAFClient.init();
client.invoke('resize', { width: '100%', height: '350px' });

const knownProblemHtml = new CustomDivWithParent('p','known-problems',)
console.log(knownProblemHtml)
const test = knownProblemHtml.addInnerText('New New')
knownProblemHtml.applyCssStyle('background-color','blue')
knownProblemHtml.insertHtmlElToParent()
console.log(test)
console.log('test')