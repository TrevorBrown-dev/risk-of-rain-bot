import jsdom from 'jsdom';
import axios from 'axios';

import spellCheck from '../helpers/spellCheck.js';
import db from '../db.json';
const { JSDOM } = jsdom;

const formatText = (text) => {
    text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
    text = text.replace(/\(/g, '*(');
    text = text.replace(/\)/g, ')*');
    return text;
};

const getInteractable = async (interactableName) => {
    interactableName = spellCheck(interactableName, db.interactables);
    const response = await axios.get(`https://riskofrain2.gamepedia.com/${interactableName}`).catch((error) => {
        console.log(error);
    });
    const page = new JSDOM(response.data);
    const name = page.window.document.querySelector('.firstHeading').textContent;
    let description = formatText(page.window.document.querySelector('.mw-parser-output p').textContent);
    const image = page.window.document.querySelector('.thumbinner img').src;
    return {
        name,
        description,
        image,
    };
};

export default getInteractable;