'use strict';

describe('Teachers Assistant', function() {

  var TA;
  beforeEach(function() {
    TA = require('../lib/teachers_asst');
  });

  describe('Grades', function() {

    var A, B, C, D, F;

    beforeEach(function() {
      A = new TA.Grades([100, 90, 100]);
      B = new TA.Grades([80, 85, 89]);
      C = new TA.Grades([70, 75, 72]);
      D = new TA.Grades([60, 68, 63]);
      F = new TA.Grades([50, 51, 53]);
    });

    it('averages the grades for a student', function() {
      expect(A.avg).toEqual(97);
      expect(B.avg).toEqual(85);
      expect(C.avg).toEqual(72);
      expect(D.avg).toEqual(64);
      expect(F.avg).toEqual(51);
    });

    it('produces a lettergrade for a student', function() {
      expect(A.lettergrade()).toEqual('A');
      expect(B.lettergrade()).toEqual('B');
      expect(C.lettergrade()).toEqual('C');
      expect(D.lettergrade()).toEqual('D');
      expect(F.lettergrade()).toEqual('F');
    });

  });

  describe('StudentList', function() {

    var list;

    beforeEach(function() {
      list = new TA.List({
        Camron: [100, 90, 100],
        Darren: [80, 85, 89],
        Kyle:   [70, 75, 72],
        Nora:   [60, 68, 63],
        Brad:   [50, 51, 53]
      });
    });

    it('transforms each students grades into a grade object', function() {
      expect(list.students.Camron.avg).toEqual(97);
      expect(list.students.Darren.avg).toEqual(85);
      expect(list.students.Kyle.avg).toEqual(72);
      expect(list.students.Nora.avg).toEqual(64);
      expect(list.students.Brad.avg).toEqual(51);
    });

    it('provides the class average', function() {
      expect(list.avg).toEqual(74);
    });

    it('provides the class min', function() {
      expect(list.min).toEqual(51);
    });

    it('provides the class max', function() {
      expect(list.max).toEqual(97);
    });

    it('provides the standard deviation', function() {
      expect(list.standardDev).toEqual(16.01873902652765);
    });
  });
});
