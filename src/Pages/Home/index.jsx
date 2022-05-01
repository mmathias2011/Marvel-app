import React from "react";
import HomeHeader from "../../Components/HomeHeader";
import CardHero from "../../Components/CardHero";
import { useFavorites } from "../../Hooks";
import { getCharacters } from "../../Api";

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
    }else removeFavorite(hero);
  };
  return (
    <>
      <HomeHeader />
      {characters.length &&
        characters.map(
          ({ name, thumbnail: { path, extension }, description, id }) => {
            return (
              <CardHero
                onFavorite={handleFavorite}
                img={`${path}.${extension}`}
                name={name}
                description={description}
                key={id}
                id={id}
                isFavorited={isFavorited({ id })}
              />
            );
          }
        )}
    </>
  );
}
export default Home;
