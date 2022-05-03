import HeroApi from './HeroApi';

const getCharacter = async (id) => {

    const path = `characters/${id}`;
    try {
        const res = await HeroApi(path);
        const json = await res.json();
        return  json;
    } catch (error) {
        return error;
    }
};

export default getCharacter;

