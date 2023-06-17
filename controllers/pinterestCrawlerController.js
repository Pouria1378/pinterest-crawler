const getImagesLinks = require("../functions/getImagesLinks")
const responseMessage = require("../functions/responseMessage")
const PinterestCrawler = require('../model/pinterest')

exports.getImagesByID = async (req, res, next) => {
    try {
        const {
            userID
        } = req.body

        const imagesLinks = await getImagesLinks(userID)

        if (!imagesLinks.length)
            return responseMessage(400)

        const pinterestCrawlerObj = new PinterestCrawler(userID, imagesLinks)

        pinterestCrawlerObj.save()

        res
            .json({
                ...responseMessage(200),
                imagesLinks
            })

    } catch (err) {
        console.log(err)
    }
}