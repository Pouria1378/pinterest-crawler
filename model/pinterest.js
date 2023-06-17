const getDB = require('../utils/database').getDB;

class PinterestCrawler {
    constructor(
        userID,
        imagesLinks
    ) {
        this.userID = userID;
        this.imagesLinks = imagesLinks;
    }

    save() {
        const db = getDB()

        return db
            .collection('pinterestCrawler')
            .insertOne(this)
            .then(result => {
                console.log("pinterestCrawler inserted", result)
            })
            .catch(err => {
                console.error(err)
            })
    }

    // static getImagesLinks({ userID }) {
    //     const db = getDB()

    //     return db
    //         .collection('pinterestCrawler')
    //         .findOne({ userID })
    //         .then(links => {
    //             return links
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         })
    // }
}

module.exports = PinterestCrawler;