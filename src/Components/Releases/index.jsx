import React from "react";
import "./index.css";
import Loader from "../Loader";
import { getComics } from "../../Api";
import { useParams } from "react-router-dom";
const Releases = ( ) => {
  const [comics, setcomics] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const params = useParams();
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const {data} = await getComics(params.heroID);
      setcomics(data.results);
      console.log(data.results)
      setIsLoading(false);
    };
    fetchData();
  }, [params.heroID]);

  const initialItems = comics.filter((comic, index) => index < 10);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="containerReleases" key={comics.id}>
      <p className="titleRelease">Últimos lançamentos</p>
      <div className="charactersReleases">
        {initialItems.map((comic) => (
          <div key={comic.id} className="releases">
            <img
              className="imgReleases"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
            <h4 className="releasesName">{comic.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Releases;
