import React from "react";
import { getCharacter } from "../../Api";
import { useParams } from "react-router-dom";
import HeroDetails from "../../Components/HeroDetails";
import { useFavorites } from "../../Hooks";
import Releases from "../../Components/Releases";
function Hero() {
  const params = useParams();
  const [character, setCharacter] = React.useState({});
  const [, addFavorites, removeFavorite, isFavorited] = useFavorites();
  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCharacter(params.heroID);
      setCharacter(data?.results?.[0] || {});
    };
    fetchData();
  }, [params.heroID]);
  const handleFavorite = (character) => {
    console.log(character);
    if (!character.isFavorited) {
      addFavorites(character);
    } else {
      removeFavorite(character);
    }
  };
  console.log(character);
  return (
    <>
      <HeroDetails
        name={character.name}
        description={character.description}
        img={character.thumbnail}
        isFavorited={isFavorited(character)}
        onFavorite={handleFavorite}
        id={character.id}
        comics={character.comics}
        modified={character.modified}
      />
      <Releases id={character.id} />
    </>
  );
}
export default Hero;
