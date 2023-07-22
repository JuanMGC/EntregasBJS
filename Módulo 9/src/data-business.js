import axios from "axios";

function getCharacters() {
  return axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => response.data.results)
    .catch((error) => {
      console.error("An error occurred:", error);
      return null;
    });
}

function getCharacterById(id) {
    return axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error("An error occurred:", error);
        return null;
      });
  }
  
  function getEpisodeList() {
    return axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((response) => response.data.results)
      .catch((error) => {
        console.error("An error occurred:", error);
        return null;
      });
  }

  function getEpisodeById(id) {
    return axios
      .get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((response) => response.data.results)
      .catch((error) => {
        console.error("An error occurred:", error);
        return null;
      });
  }
  
 

export { getCharacters, getCharacterById, getEpisodeList, getEpisodeById };
