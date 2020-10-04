import jsdom from 'jsdom';
import axios from 'axios';

import spellCheck from '../helpers/spellCheck.js';
import db from '../db.json';
const { JSDOM } = jsdom;
const formatText = (text) => {
    text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
    text = text.replace('Soundtrack', '**Soundtrack**');
    text = text.replace('Stage', '**Stage**');
    text = text.replace(/Lunar Seer Quote(\r\n|\n|\r)*/gm, '**Lunar Seer Quote**\n*');
    text += '*';
    return text;
};
const getEnvironment = async (environmentName) => {
    // environmentName = spellCheck(environmentName, db.environments);
    // const response = await axios.get(`https://riskofrain2.gamepedia.com/${environmentName}`).catch((error) => {
    //     console.log(error);
    // });
    // const page = new JSDOM(response.data);

    const name = page.window.document.querySelector('.infoboxname').textContent;
    let text = page.window.document.querySelector('.infoboxtable').textContent.trim();
    const description = page.window.document.querySelector('.mw-parser-output p').textContent;
    text = text.replace(name, '');
    text = formatText(text);
    const image = page.window.document.querySelector('.infoboxtable img').src;
    // const description = page.window.document.querySelector('.infoboxtable').textContent;
    return {
        name,
        description,
        text,
        image,
    };
};

export default getEnvironment;
