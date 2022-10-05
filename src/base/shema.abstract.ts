const mongoose = require('mongoose');
const uuidV4 = require('uuid/v4');
require('mongoose-uuid2')(mongoose);

const Schema = mongoose.Schema;

// Will add the UUID type to the Mongoose Schema types
var UUID = mongoose.Types.UUID;
