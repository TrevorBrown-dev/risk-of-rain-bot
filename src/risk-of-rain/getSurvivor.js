import jsdom from 'jsdom';
import axios from 'axios';

import spellCheck from '../helpers/spellCheck.js';
import db from '../db.json';
const { JSDOM } = jsdom;

const getSurvivor = async (survivorName) => {
    survivorName = spellCheck(survivorName, db.survivors);
    const response = await axios.get(`https://riskofrain2.gamepedia.com/${survivorName}`);
    const page = new JSDOM(response.data);
    const name = page.window.document.querySelector('.infoboxname').textContent;
    let text = page.window.document.querySelector('.infoboxtable').textContent.trim();
    text = text.replace(name, '');
    text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');

    const image = page.window.document.querySelector('.infoboxtable img').src;
    // const description = page.window.document.querySelector('.infoboxtable').textContent;
    return {
        name,
        text,
        image,
    };
};

export default getSurvivor;
