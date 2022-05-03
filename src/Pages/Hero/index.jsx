import React from "react";
import { getCharacter } from "../../Api";
import { useParams } from "react-router-dom";
import HeroDetails from "../../Components/HeroDetails";
import { useFavorites } from "../../Hooks";
function Hero() {
  const params = useParams();
  const [character, setCharacter] = React.useState({});
  const [, addFavorites, removeFavorite, isFavorited] = useFavorites();
  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCharacter(params.heroID);
      console.log(data.results)
      setCharacter(data?.results?.[0] || {});
    };
    fetchData();
  }, [params.heroID]);
  const handleFavorite = (character) => {
    console.log(character)
    if (!character.isFavorited) {
      addFavorites(character);
    } else{ removeFavorite(character)};
  };
 
  return (
    <HeroDetails
      name={character.name}
      description={character.description}
      img={`${character.path}.${character.extension}`}
      isFavorited={isFavorited(character)}
      onFavorite={handleFavorite}
      id={character.id}
    />
  );
}
export default Hero;
