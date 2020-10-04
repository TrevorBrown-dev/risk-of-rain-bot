import jsdom from 'jsdom';
import axios from 'axios';

import spellCheck from '../helpers/spellCheck.js';
import db from '../db.json';
const { JSDOM } = jsdom;

const formatText = (text) => {
    text = text.replace('Health', '**Health:**');
    text = text.replace('Health Regen', '**Health Regen:**');
    text = text.replace('Damage', '**Damage:**');
    text = text.replace(/\bSpeed\b/, '**Speed:**');
    text = text.replace(/\bBase Cost\b/, '**Base Cost:**');
    text = text.replace(/\bHeal\b/, '**Heal:**');
    text = text.replace('Armor', '**Armor:**');
    text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
    text = text.replace(/\(/g, '*(');
    text = text.replace(/\)/g, ')*');
    return text;
};

const getDrone = async (droneName) => {
    droneName = spellCheck(droneName, db.drones);
    const response = await axios.get(`https://riskofrain2.gamepedia.com/${droneName}`).catch((error) => {
        console.log(error);
    });
    const page = new JSDOM(response.data);
    const name = page.window.document.querySelector('.infoboxname').textContent;
    let text = page.window.document.querySelector('.infoboxtable').textContent.trim();
    text = text.replace(name, '');
    text = formatText(text);
    const description = page.window.document.querySelector('.mw-parser-output p').textContent;
    const image = page.window.document.querySelector('.infoboxtable img').src;
    return {
        description,
        text,
        name,
        image,
    };
};

export default getDrone;
