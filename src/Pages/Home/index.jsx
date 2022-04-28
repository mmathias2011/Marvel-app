import React from "react";
import HomeHeader from "../../Components/HomeHeader/index.jsx";
import { getCharacters } from "../../Api";

function Home() {
  const [characters, setCharacters] = React.useState();
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      console.log(data);
    };
    fetchData();
  }, []);
  return <HomeHeader />;
}
export default Home;
