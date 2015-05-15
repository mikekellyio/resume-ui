import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  company: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  startedAt: DS.attr('date'),
  endedAt: DS.attr('date'),
  skills: DS.hasMany('skills')
});
