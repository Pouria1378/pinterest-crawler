const { MongoClient } = require("mongodb")

let db

const mongoConnect = (callback) => {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pinterest"

    MongoClient.connect(uri)
        .then(client => {
            console.log("Connected!", uri);
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