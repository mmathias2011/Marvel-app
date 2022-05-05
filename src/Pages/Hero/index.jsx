import React from "react";
import { getCharacter } from "../../Api";
import { useParams,useNavigate } from "react-router-dom";
import HeroDetails from "../../Components/HeroDetails";
import { useFavorites } from "../../Hooks";
import Releases from "../../Components/Releases";
import SearchBar from "../../Components/SearchBar";

function Hero() {
  const params = useParams();
  const navigate = useNavigate();

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
    if (!character.isFavorited) {
      addFavorites(character);
    } else {
      removeFavorite(character);
    }
  };
  const handleSearch = (e) => {
    const value = e.target.elements.query.value;
    navigate(`/?search=${value}`);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
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
