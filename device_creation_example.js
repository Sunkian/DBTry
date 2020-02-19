const fs = require('fs-extra');
const rp = require('request-promise');
var request = require("request");

require("./index");

const Device = requie('./devices'),
    Measure = require('./measures');

const lamp = new Device({
    name: LivingRoomLamp,
    brand: Bosh,
    ecology: A
});

const heather = new Device({
    name: LivingRoomHeather,
    brand: Ikea,
    ecology: B
});