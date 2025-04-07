const rest = require('rest');
const mime = require('rest/interceptor/mime');

const request = rest.wrap(mime);

const getListOfRestEndPoint = () => request(`https://www.anapioficeandfire.com/api`);
const getBooks = () => request(`https://www.anapioficeandfire.com/api/books`);

const getHouse = () => {
    return new Promise((resolve) => {
        resolve({
            name: "House Allyrion of Godsgrace",
            region: "Dorne"
        });
    });
};

module.exports = { getListOfRestEndPoint, getBooks, getHouse };