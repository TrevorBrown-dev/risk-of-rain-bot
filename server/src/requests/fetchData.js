import { getDrone, getEnvironment, getInteractable, getItem, getMonster, getSurvivor } from './index';
const fetchData = async (route, name) => {
    switch (route) {
        case 'items':
            return await getItem(name);
        case 'interactables':
            return await getInteractable(name);
        case 'monsters':
            return await getMonster(name);
        case 'survivors':
            return await getSurvivor(name);
        case 'drones':
            return await getDrone(name);
        case 'environments':
            return await getEnvironment(name);
        // case 'challenges':
        // case 'artifacts':
    }
};

export default fetchData;
