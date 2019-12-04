//Imports
const utils = require('./utils');
const trello = require('./trello-api');
const spotify = require('./spotify-api');
const dotenv = require('dotenv');

//Init Configuration
dotenv.config();
  //
//Proccessing
const start = async () => {
    const discography = utils.readDiscography(process.env.DISCOGRAPHY_PATH);
    let token = await spotify.getToken();
    const trelloBoardId = await trello.createBoard('Board Discography FINAL');
    let currentDecade = -1, currentList;
    for (let i = 0; i < discography.length; i++) {
        let album = discography[i];
        let decade = Math.floor((album.year % 100) / 10); 
        if(decade != currentDecade) {
            currentList = await trello.createList(trelloBoardId, decade + "0's");
            currentDecade = decade;
        }
        let cardId = await trello.createCard(currentList, album.year + " - " + album.name);
        let spotifyAlbums = await spotify.searchAlbums(token, album.name);
        if (spotifyAlbums[0]) {
            await trello.createAttachmentURL(cardId, spotifyAlbums[0].images[0].url);
        }
    }
};

start();
    



