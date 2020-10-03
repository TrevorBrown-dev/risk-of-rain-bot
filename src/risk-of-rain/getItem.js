import jsdom from 'jsdom';
import axios from 'axios';

import spellCheck from '../helpers/spellCheck.js';
import db from '../db.json';
const { JSDOM } = jsdom;

const getItem = async (itemName) => {
    itemName = spellCheck(itemName, db.items);
    const response = await axios.get(`https://riskofrain2.gamepedia.com/${itemName}`);
    const page = new JSDOM(response.data);
    const name = page.window.document.querySelector('.infoboxname').textContent;
    const caption = page.window.document.querySelector('.infoboxcaption').textContent;
    const description = page.window.document.querySelector('.infoboxdesc').textContent;
    const image = page.window.document.querySelector('.infoboxtable img').src;
    return {
        name,
        caption,
        description,
        image,
    };
};

export default getItem;
