const createCharacterRow = (character) => {
    const element = document.createElement("div");
  
    const avatar = createAvatar(character);
    element.appendChild(avatar);
  
    const link = createRowText(character);
    element.appendChild(link);
  
    element.className = "character-row";
  
    return element;
  };
  
  const createAvatar = (character) => {
    const element = document.createElement("img");
    element.width = 150;
    element.className = "thumbnail";
    element.src = character.image;
  
    return element;
  };
  
  const createRowText = (character) => {
    const element = document.createElement("span");
    element.append(character.name);
  
    return element;
  };
  
  const createAvatarDetail = (character) => {
    const element = document.createElement("img");
    element.width = 350;
    element.src = character.image;
  
    return element;
  };
  
  const showCharacter = (character) => {
    console.log("character", character);
    const characterDetail = document.getElementById("character-detail");
  
    characterDetail.innerHTML = "";
    characterDetail.appendChild(createAvatarDetail(character));
    characterDetail.appendChild(createParagraph("Name: " + character.name));
    characterDetail.appendChild(createParagraph("Status: " + character.status));
    characterDetail.appendChild(createParagraph("Species: " + character.species));
    characterDetail.appendChild(createParagraph("Gender: " + character.gender));
  };
  
  const createParagraph = (text) => {
    const element = document.createElement("p");
    element.append(text);
    return element;
  };
  //----------------------------------------------------------------------------------------
  
  const createEpisodeRow = (episode) => {
    const element = document.createElement("div");
    element.className = "episode-list";
    
    const textConnection = document.createElement("p");
    textConnection.innerHTML = `<span>${episode.id}. ${episode.name}</span>`;
    element.appendChild(textConnection);
  
    return element;
  };
  
  const showEpisode = (episode) => {
    console.log("episode", episode);
    const characterDetail = document.getElementById("character-detail");
    characterDetail.innerHTML = "";
  
    const properties = ["id", "name", "air_date","created","url"];
    for (const prop of properties) {
      const paragraph = document.createElement("p");
      paragraph.innerHTML = `<span>${prop}: ${episode[prop]}</span>`;
      characterDetail.appendChild(paragraph);
    }
  };
  
  export { createCharacterRow, showCharacter, createEpisodeRow, showEpisode };