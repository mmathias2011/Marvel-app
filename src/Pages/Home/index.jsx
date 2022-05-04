import React from "react";
import "./index.css";
import HomeHeader from "../../Components/HomeHeader";
import CardHero from "../../Components/CardHero";
import { useFavorites } from "../../Hooks";
import { getCharacters, getCharacterFilteredByName } from "../../Api";
import PaginationButtom from "../../Components/Pagination";
import SearchBar from "../../Components/SearchBar";
import Loader from "../../Components/Loader";
function Home() {
  const [characters, setCharacters] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  const [, addFavorites, removeFavorite, isFavorited] = useFavorites();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCharacters();
      setCharacters(data?.results || []);
      setLoading(false);
    };
    fetchData();
  }, []);
  

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
  const handlePagination = async ()=>{

    const { data } = await getCharacters({offset:offset + 20});
    setOffset(data.offset + 20);
    setCharacters([...characters,...data.results])
    
  }
  return (
    <>
      <HomeHeader />

      <SearchBar onSearch={handleSearch} />
      {loading ? <Loader /> :
      (<div className="listingContainer">
        {characters.length > 0 &&
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
      </div>)}
      <PaginationButtom onClick={handlePagination}/>
    </>
  );
}
export default Home;
