'ues strict';

var mixin = function(mix, obj) {
  Object.keys(mix).forEach(function(key) {
    obj[key] = mix[key];
  });
  return obj;
};

var mixins = function(mixs, obj) {
  return mixs.reduce(function(obj, mix) {
    return mixin(mix, obj);
  }, obj);
};

module.exports = {
  mixin: mixin,
  mixins: mixins,
};
