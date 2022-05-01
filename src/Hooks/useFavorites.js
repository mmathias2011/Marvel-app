import React from 'react'
import { LOCAL_STORAGE_FAVORITES_KEY } from '../Constants'

export default function useFavorites() {
    const [favorites, setFavorites] = React.useState([]);
    const addFavorite = (hero) => {

        if (favorites.length === 5) {
            alert("Limite de favoritos atingido - 5")
        } else {
            const newFavorites = [...favorites, ...[{ id: hero.id, name: hero.name }]];
            window.localStorage.setItem(LOCAL_STORAGE_FAVORITES_KEY, JSON.stringify(newFavorites));
            setFavorites(newFavorites);
        }
    };

    const removeFavorite = (hero) => {
        const favoritedHeros = favorites.filter((h) => {
            return h.id !== hero.id;
        });
        window.localStorage.setItem(LOCAL_STORAGE_FAVORITES_KEY, JSON.stringify(favoritedHeros));
        setFavorites(favoritedHeros);

    };

    const isFavorited = (hero) => {
        return favorites.find((h) => {
            return h.id === hero.id;
        });
    };

    React.useEffect(() => {
        const LocalFavorites = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY) || "[]");
        setFavorites(LocalFavorites || []);
    }, []);

    return [favorites, addFavorite, removeFavorite, isFavorited];

}
