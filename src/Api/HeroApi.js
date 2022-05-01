import MD5 from "crypto-js/md5";

const HeroApi = async (path) => {
  const now = new Date().getTime();
  const privateKey = "93dbed4099b659d21dbca46d7d867087407f0343";
  const publicKey = process.env.REACT_APP_PUBLIC_API_KEY;
  const hash = MD5(`${now}${privateKey}${publicKey}`).toString();
  const url = `http://gateway.marvel.com/v1/public/${path}?ts=${now}&apikey=${publicKey}&hash=${hash}`;
  return fetch(url);
};
export default HeroApi;