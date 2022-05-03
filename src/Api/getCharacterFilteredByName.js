import HeroApi from './HeroApi';

const getCharacterFilteredByName = async (name) => {

    const path = `characters`;
    try {
        const res = await HeroApi(path, { nameStartsWith: name });
        const json = await res.json();
        return json;
    } catch (error) {
        return error;
    }
};

export default getCharacterFilteredByName;

