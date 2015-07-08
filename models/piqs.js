var mongoose = require('mongoose');
// var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

var piqsSchema = new Schema({
	createdAt: new Date(),
	updatedAt: new Date(),
	color: String,
	u_id: {
		type: Schema.ObjectId,
		ref: 'users'
	}
});
// piqsSchema.plugin(timestamps);

var Piq = mongoose.model('piqs', piqsSchema);
