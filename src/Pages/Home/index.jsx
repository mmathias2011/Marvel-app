import React from "react";
import './index.css';
import HomeHeader from "../../Components/HomeHeader";
import CardHero from "../../Components/CardHero";
import { useFavorites } from "../../Hooks";
import { getCharacters } from "../../Api";
import SearchBar from '../../Components/SearchBar'

function Home() {
  const [characters, setCharacters] = React.useState([]);
  const [, addFavorites, removeFavorite, isFavorited] = useFavorites();

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCharacters();
      setCharacters(data?.results || []);
    };
    fetchData();
  }, []);

  const handleFavorite = (hero) => {
    if (!hero.isFavorited) {
      addFavorites(hero);
    } else removeFavorite(hero);
  };
  return (
    <>
      <HomeHeader />
      <SearchBar />
      <div className="listingContainer">
        {characters.length &&
          characters.map(({ name, thumbnail: { path, extension }, id }) => {
            return (
              <CardHero
                onFavorite={handleFavorite}
                img={`${path}.${extension}`}
                name={name}
                key={id}
                id={id}
                isFavorited={isFavorited({ id })}
              />
            );
          })}
      </div>
    </>
  );
}
export default Home;
