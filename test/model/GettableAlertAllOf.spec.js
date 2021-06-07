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
    instance = new AlertmanagerApi.GettableAlertAllOf();
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

  describe('GettableAlertAllOf', function() {
    it('should create an instance of GettableAlertAllOf', function() {
      // uncomment below and update the code to test GettableAlertAllOf
      //var instane = new AlertmanagerApi.GettableAlertAllOf();
      //expect(instance).to.be.a(AlertmanagerApi.GettableAlertAllOf);
    });

    it('should have the property annotations (base name: "annotations")', function() {
      // uncomment below and update the code to test the property annotations
      //var instance = new AlertmanagerApi.GettableAlertAllOf();
      //expect(instance).to.be();
    });

    it('should have the property receivers (base name: "receivers")', function() {
      // uncomment below and update the code to test the property receivers
      //var instance = new AlertmanagerApi.GettableAlertAllOf();
      //expect(instance).to.be();
    });

    it('should have the property fingerprint (base name: "fingerprint")', function() {
      // uncomment below and update the code to test the property fingerprint
      //var instance = new AlertmanagerApi.GettableAlertAllOf();
      //expect(instance).to.be();
    });

    it('should have the property startsAt (base name: "startsAt")', function() {
      // uncomment below and update the code to test the property startsAt
      //var instance = new AlertmanagerApi.GettableAlertAllOf();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new AlertmanagerApi.GettableAlertAllOf();
      //expect(instance).to.be();
    });

    it('should have the property endsAt (base name: "endsAt")', function() {
      // uncomment below and update the code to test the property endsAt
      //var instance = new AlertmanagerApi.GettableAlertAllOf();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new AlertmanagerApi.GettableAlertAllOf();
      //expect(instance).to.be();
    });

  });

}));