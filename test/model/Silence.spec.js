/**
 * Alertmanager API
 * API of the Prometheus Alertmanager (https://github.com/prometheus/alertmanager)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AlertmanagerApi);
  }
}(this, function(expect, AlertmanagerApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AlertmanagerApi.Silence();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Silence', function() {
    it('should create an instance of Silence', function() {
      // uncomment below and update the code to test Silence
      //var instane = new AlertmanagerApi.Silence();
      //expect(instance).to.be.a(AlertmanagerApi.Silence);
    });

    it('should have the property matchers (base name: "matchers")', function() {
      // uncomment below and update the code to test the property matchers
      //var instance = new AlertmanagerApi.Silence();
      //expect(instance).to.be();
    });

    it('should have the property startsAt (base name: "startsAt")', function() {
      // uncomment below and update the code to test the property startsAt
      //var instance = new AlertmanagerApi.Silence();
      //expect(instance).to.be();
    });

    it('should have the property endsAt (base name: "endsAt")', function() {
      // uncomment below and update the code to test the property endsAt
      //var instance = new AlertmanagerApi.Silence();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new AlertmanagerApi.Silence();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new AlertmanagerApi.Silence();
      //expect(instance).to.be();
    });

  });

}));