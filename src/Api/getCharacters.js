import HeroApi from './HeroApi';

const getCharacters = async (query) => {

    const path = "characters";
    try {
        const res = await HeroApi(path, query);
        const json = await res.json();
        return  json;
    } catch (error) {
        return error;
    }
};

export default getCharacters;

