import HeroApi from './HeroApi';

const getCharacters = async () => {

    const path = "characters";
    try {
        const res = await HeroApi(path);
        const json = await res.json();
        return  json;
    } catch (error) {
        return error;
    }
};

export default getCharacters;

