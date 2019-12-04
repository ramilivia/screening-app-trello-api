const axios = require('axios');

const createBoard = async (name) => {
    try {
        let response = await axios.post(
            process.env.TRELLO_URL + `/1/boards`,
            {
                name: name,
                defaultLists: false
            },
            {
                params: {
                    key: process.env.TRELLO_KEY,
                    token: process.env.TRELLO_TOKEN
                }
            }
        );
        return response.data.id;

    } catch (error) {
        console.log(error);
    }

};

const createList = async (boardId, name) => {
    try {
        let response = await axios.post(
            process.env.TRELLO_URL + `/1/boards/${boardId}/lists`,
            { name: name },
            {
                params: {
                    key: process.env.TRELLO_KEY,
                    token: process.env.TRELLO_TOKEN,
                }
            }
        );
        return response.data.id;

    } catch (error) {
        console.log(error);
    }
}

const createCard = async (listId, name) => {
    try {
        let response = await axios.post(
            process.env.TRELLO_URL + `/1/cards`,
            null,
            {
                params: {
                    idList: listId,
                    name: name,
                    key: process.env.TRELLO_KEY,
                    token: process.env.TRELLO_TOKEN,
                }
            }
        );
        return response.data.id;

    } catch (error) {
        console.log(error);
    }
}

const createAttachmentURL = async (cardId, url) => {
    try {
        let response = await axios.post(
            process.env.TRELLO_URL + `/1/cards/${cardId}/attachments`,
            null,
            {
                params: {
                    url: url,
                    key: process.env.TRELLO_KEY,
                    token: process.env.TRELLO_TOKEN,
                }
            }
        );
        return response.data.id;

    } catch (error) {
        console.log(error);
    }
}

module.exports = { createBoard, createList, createCard, createAttachmentURL };