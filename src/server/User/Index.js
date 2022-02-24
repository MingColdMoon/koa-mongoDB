const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const uuid = require('uuid')
// mongoDB
const { MONGODB_URL } = require("../../config/Index")
const client = new MongoClient(MONGODB_URL, {useNewUrlParser: true});
const dbName = 'lengyue_test'
const tableName = 'lengyue_test'
function queryUsers() {
  return new Promise(function (resolve, reject) {
    try {
      client.connect(function(err) {
        assert.equal(null, err);
        const db = client.db(dbName);
        const collection = db.collection(tableName);
        collection.find({}).toArray(function(err, result) {
          assert.equal(err, null);
          client.close();
          resolve(result)
        });
      })
    } catch(e) {
      reject(e)
    }
  })
}
function addUser(form) {
  return new Promise(function (resolve, reject) {
    try {
      client.connect(function(err) {
        assert.equal(null, err);
        const db = client.db(dbName);
        const collection = db.collection(tableName);
        collection.insertOne({
          username: form.username,
          password: form.password,
          createtime: new Date().toLocaleString(),
          lasttime: new Date().toLocaleString(),
          id: uuid.v1()
        }).then(result => {
          assert.equal(err, null);
          client.close();
          resolve(result)
        })
      })
    } catch(e) {
      reject(e)
    }
  })
}
module.exports = {
  queryUsers,
  addUser
}