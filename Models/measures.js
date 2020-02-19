const mongoose = require('mongoose');
require('./devices');

mongoose.connect('mongodb://localhost:27017/DBTry');

const Schema = mongoose.Schema;

const measureSchema_ = new Schema({
    value: Number,
    unity: String,
    date: Date,
});

const Measure_ = mongoose.model('Measure', measureSchema_);

/**
 *
 * @param measure - Object - {value, unity, date}
 * @param deviceId
 * @returns {Promise<AggregationCursor|RegExpExecArray>}
 */
const createMeasure = async (measure, deviceId) => {
    const doc = new Measure_(measure);
    const docMeasure = await doc.save();
    return Device_.findByIdAndUpdate(deviceId, {measureList: {$addToSet: docMeasure.id}}).exec();
    // docMeasure.toObject().id si ça marche pas
};

module.exports = {createMeasure};