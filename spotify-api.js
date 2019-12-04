const axios = require('axios');
const qs = require('qs');

const getToken = async () => {
    let concat = `${process.env.SPOTIFY_CLIENT}:${process.env.SPOTIFY_SECRET}`
    let buffer = new Buffer(concat);
    let base64data = buffer.toString('base64');
    try {
        let response = await axios({
            method: 'post',
            url: process.env.SPOTIFY_ACCOUNTS_URL + '/api/token',
            data: qs.stringify({
                'grant_type': 'client_credentials'
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Authorization': `Basic ${base64data}`
            }
        });
        return response.data.access_token;

    } catch (error) {
        console.log(error);
    }   
}

const searchAlbums = async(token, name) => {
    try {
        let response = await axios({
            method: 'get',
            url: process.env.SPOTIFY_URL + '/search',
            params: {
                q: name,
                type: 'album'

            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data.albums.items;
    } catch (error) {
        console.log(error);
    }
}



module.exports = { getToken, searchAlbums }