import axios from 'axios';
import jsdom from 'jsdom';
import spellCheck from '../helpers/spellCheck.js';

class WikiRequest {
    constructor(requestParamaters, array) {
        this._array = array;
        requestParamaters = spellCheck(requestParamaters, array);
        this._RiskOfRain = axios.create({
            baseURL: 'https://riskofrain2.gamepedia.com',
        });
        this.RiskOfRain.get(`/${requestParamaters}`).then((response) => {
            const { JSDOM } = jsdom;
            this._page = new JSDOM(response.data);
        });
    }

    getPage() {
        return this._page;
    }

    _query(selector) {
        return this._page.window.document.querySelector(selector);
    }

    _formatText(text) {}
}
