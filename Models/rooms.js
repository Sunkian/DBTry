const mongoose = require('mongoose');
require('./devices');

mongoose.connect('mongodb://localhost:27017/DBTry');

const {ObjectId} = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const roomSchema_ = new Schema({
    name: String,
    deviceList : [{ name: ObjectId,
                    ref: 'Device'
    }]
});

const Room_ = mongoose.model('Room', roomSchema_);

const createRoom = room => {
    const doc = new Room_(room);
    return doc.save();
};

const addDeviceToRoom = (room, deviceId) => {
    return Room_.findOneAndUpdate({name: room}, {deviceList: {$addToSet: deviceId}}).exec();
};

module.exports = {createRoom, addDeviceToRoom};