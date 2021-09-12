import { CustomDiv } from './view/domElements.js';
const client = ZAFClient.init();
client.invoke('resize', { width: '100%', height: '350px' });
const knownProblemHtml = new CustomDiv('known-problems', 'p');
const test = knownProblemHtml.addInnerText('New New');
knownProblemHtml.applyCssStyle('background-color', 'blue');
knownProblemHtml.insertToParent();
console.log(test);
console.log('test');
