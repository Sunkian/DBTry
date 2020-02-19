//https://www.mongodb.com/blog/post/quick-start-nodejs--mongodb--how-to-create-documents

// /!\ Important Foreign keys : https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/

const mongoose = require('mongoose');
require('./measures');

mongoose.connect('mongodb://localhost:27017/DBTry');

//https://mongoosejs.com/docs/guide.html
//Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection
// and defines the shape of the documents within that collection.

const {ObjectId} = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const deviceSchema_ = new Schema({
    name: {type: String, required: true},
    brand: String,
    ecology: String,
    measuredBy: [{
        type: ObjectId,
        ref: 'Measure'
    }],
    state: Boolean

});

/**
 *
 * @type {function(Object, *=, *=): void}
 * @private
 */
const Device_ = mongoose.model('Device', deviceSchema_);

/**
 *
 * @param device - Object - {name, brand, ecology}
 * @returns {void|Promise|*}
 */
const createDevice = device => {
    const doc = new Device_(device);
    return doc.save(); // Renvoie le document avec l'id
};

const getTheDevice = deviceId => Device_.findById(deviceId).populate('measuredBy').exec();


module.exports = {createDevice};


