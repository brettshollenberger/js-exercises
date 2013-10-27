'use strict';

var _ = require('underscore');

module.exports = (function() {

  // Private interface
  function sum(array) {
    return _.chain(array).reduce(function(start, num) { return start + num; }, 0).value();
  }

  function avg(array) {
    return Math.round(sum(array) / array.length);
  }
  
  // Public interface
  var TA = {
    Grades: function(grades) {
      this.grades      = grades;
      this.avg         = avg(this.grades);
      this.lettergrade = lettergrade;

      function lettergrade() {
        if (this.avg > 89.9) return 'A';
        if (this.avg > 79.9) return 'B';
        if (this.avg > 69.9) return 'C';
        if (this.avg > 59.9) return 'D';
        return 'F';
      }
    },
    List: function(students) {
      // Init function
      this.students = {};
      _.each(students, function(grades, name) {
        this.students[name] = new TA.Grades(grades);
      }, this);

      // Average, min, max
      var classAverages = _.map(this.students, function(grades, names) { return grades.avg; });
      this.avg = avg(classAverages);
      this.min = _.min(classAverages);
      this.max = _.max(classAverages);
      
      // Standard Deviation
      var differences = _.map(classAverages, function(score) { return score - this.avg; }, this);
      var squareDiffs = _.map(differences, function(difference) { return difference * difference; });
      var variance    = sum(squareDiffs) / squareDiffs.length;
      this.standardDev = Math.sqrt(variance);
    }
  };

  return TA;
    
})();
