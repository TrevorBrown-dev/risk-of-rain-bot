import jsdom from 'jsdom';
import axios from 'axios';

const { JSDOM } = jsdom;

const formatText = (text) => {
    text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
    text = text.replace('Health', '**Health**');
    text = text.replace('Damage', '**Damage**');
    text = text.replace('Speed', '**Speed**');
    text = text.replace('Health Regen', '**Health Regen**');
    text = text.replace('Armor', '**Armor:**');
    text = text.replace(/\(/g, '*(');
    text = text.replace(/\)/g, ')*');
    return text;
};

const getMonster = async (monsterName) => {
    const response = await axios.get(`https://riskofrain2.gamepedia.com/${monsterName}`).catch((error) => {
        // console.log(error);
    });
    const page = new JSDOM(response.data);
    const name = page.window.document.querySelector('.infoboxname').textContent;
    let text = page.window.document.querySelector('.infoboxtable').textContent.trim();
    text = text.replace(name, '');
    text = formatText(text);
    const image = page.window.document.querySelector('.infoboxtable img').src;
    // const description = page.window.document.querySelector('.infoboxtable').textContent;
    return {
        name,
        text,
        image,
    };
};

export default getMonster;
