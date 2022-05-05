import React from "react";
import "./index.css";
import HomeHeader from "../../Components/HomeHeader";
import CardHero from "../../Components/CardHero";
import { useFavorites } from "../../Hooks";
import { getCharacters, getCharacterFilteredByName } from "../../Api";
import PaginationButtom from "../../Components/Pagination";
import SearchBar from "../../Components/SearchBar";
import Loader from "../../Components/Loader";
import Filter from "../../Components/Filter";
function Home() {
  const [characters, setCharacters] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  const [isOnlyFavorites, setIsOnlyFavorites] = React.useState(false);
  const [ascFilter, setAscFilter] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const [favorites, addFavorites, removeFavorite, isFavorited] = useFavorites();

  React.useEffect(() => {
    const fetchData = async () => {
      let params ={};
      if(ascFilter){
        params.orderBy = "-name";
      }
      
      const { data } = await getCharacters(params);
      setCharacters(data?.results || []);
      setLoading(false);
    };
    fetchData();
  }, [ascFilter]);

  const handleFavorite = (hero) => {
    if (!hero.isFavorited) {
      addFavorites(hero);
    } else removeFavorite(hero);
  };
  const handleSearch = async (e) => {
    const value = e.target.value;
    if (value) {
      const { data } = await getCharacterFilteredByName(value);
      setCharacters(data?.results || []);
    } else {
      const { data } = await getCharacters();
      setCharacters(data?.results || []);
    }
  };
  const handlePagination = async () => {
    const { data } = await getCharacters({ offset: offset + 20 });
    setOffset(data.offset + 20);
    setCharacters([...characters, ...data.results]);
  };
  const handleToggleFavorite = () => {
    setIsOnlyFavorites(!isOnlyFavorites);
  };
  const handleToggleAscFilter = () => {
    setAscFilter(!ascFilter)
  };
  const heros = isOnlyFavorites ? favorites : characters;
  return (
    <>
      <HomeHeader />

      <SearchBar onSearch={handleSearch} />
      <Filter
        charactersLength={characters.length}
        isOnlyFavorites={isOnlyFavorites}
        onToggleFavorite={handleToggleFavorite}
        onToggleFilterAsc={handleToggleAscFilter}
      />
      {loading ? (
        <Loader />
      ) : (
        <div className="listingContainer">
          {heros.length > 0 &&
            heros.map(
              ({ name, thumbnail: { path, extension }, id, description }) => {
                return (
                  <CardHero
                    onFavorite={handleFavorite}
                    img={`${path}.${extension}`}
                    name={name}
                    key={id}
                    id={id}
                    isFavorited={isFavorited({ id })}
                    path={path}
                    extension={extension}
                    description={description}
                  />
                );
              }
            )}
        </div>
      )}
      <PaginationButtom onClick={handlePagination} />
    </>
  );
}
export default Home;
