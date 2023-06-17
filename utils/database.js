const { MongoClient } = require("mongodb")

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pinterest"

let db

const mongoConnect = (callback) => {
    MongoClient.connect(uri)
        .then(client => {
            console.log("Connected!");
            db = client.db()
            callback()
        })
        .catch(err => {
            console.log(err);
            throw err
        })
}

const getDB = () => {
    if (db) {
        return db
    }
    throw "No database found!"
}

exports.mongoConnect = mongoConnect
exports.getDB = getDB