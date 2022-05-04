import HeroApi from './HeroApi';

const getComics = async (id) => {

    const path = `characters/${id}/comics`;
    try {
        const res = await HeroApi(path);
        const json = await res.json();
        return  json;
    } catch (error) {
        return error;
    }
};

export default getComics;

