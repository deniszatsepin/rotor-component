
var Component = function() {
	this._entity = null;
	this._realized = false;
};

var proto = Component.prototype;

proto.getEntity = function() {
	return this._entity;
};

proto.setEntity = function(entity) {
	this._entity = entity;
};

proto.realize = function() {
	if (!this._realized) {
		this._realized = true;
	}
};

proto.isRealized = function() {
	return this._realized;
};

proto.update = function() {

};

module.exports = Component;