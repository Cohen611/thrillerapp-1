var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  el: '.likesContent',
  template: _.template(tmpl.post),
  initialize: function() {},
  render: function() {
    var markup = this.template(this.model.toJSON);
    this.$el.html(markup);
    return this;
  }
});
