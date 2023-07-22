import "./styles.css";
import * as Utils from "./utils.js";
import * as DataBusiness from "./data-business.js";

const renderCharacters = () => {
  return DataBusiness.getCharacters()
    .then((characterData) => {
      const rootElement = document.getElementById("root");
      rootElement.innerHTML = "";

      for (let i = 0; i < characterData.length; i++) {
        const character = characterData[i];
        const characterRow = Utils.createCharacterRow(character);
        characterRow.onclick = () => {
          Utils.showCharacter(character);
          DataBusiness.getCharacterById(character.id);
        };
        rootElement.appendChild(characterRow);
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};

const renderEpisodes = () => {
  return DataBusiness.getEpisodeList()
    .then((episodeData) => {
      const episodeListElement = document.getElementById("episode-list");
      episodeListElement.innerHTML = "";

      for (let i = 0; i < episodeData.length; i++) {
        const episode = episodeData[i];
        const episodeRow = Utils.createEpisodeRow(episode);
        episodeRow.onclick = () => {
          Utils.showEpisode(episode);
          DataBusiness.getEpisodeById(episode.id);
        };
        episodeListElement.appendChild(episodeRow);
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};

renderCharacters()
  .then(renderEpisodes)
  .catch((error) => {
    console.error("An error occurred:", error);
  });

  document.body.addEventListener('click', () => {
    document.body.classList.toggle('color-change');
  });