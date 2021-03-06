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

import ApiClient from '../ApiClient';
import Alert from './Alert';
import AlertStatus from './AlertStatus';
import GettableAlertAllOf from './GettableAlertAllOf';
import Receiver from './Receiver';

/**
 * The GettableAlert model module.
 * @module model/GettableAlert
 * @version 0.0.1
 */
class GettableAlert {
    /**
     * Constructs a new <code>GettableAlert</code>.
     * @alias module:model/GettableAlert
     * @implements module:model/GettableAlertAllOf
     * @implements module:model/Alert
     * @param annotations {Object.<String, String>} 
     * @param receivers {Array.<module:model/Receiver>} 
     * @param fingerprint {String} 
     * @param startsAt {Date} 
     * @param updatedAt {Date} 
     * @param endsAt {Date} 
     * @param status {module:model/AlertStatus} 
     * @param labels {Object.<String, String>} 
     */
    constructor(annotations, receivers, fingerprint, startsAt, updatedAt, endsAt, status, labels) { 
        GettableAlertAllOf.initialize(this, annotations, receivers, fingerprint, startsAt, updatedAt, endsAt, status);Alert.initialize(this, labels);
        GettableAlert.initialize(this, annotations, receivers, fingerprint, startsAt, updatedAt, endsAt, status, labels);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, annotations, receivers, fingerprint, startsAt, updatedAt, endsAt, status, labels) { 
        obj['annotations'] = annotations;
        obj['receivers'] = receivers;
        obj['fingerprint'] = fingerprint;
        obj['startsAt'] = startsAt;
        obj['updatedAt'] = updatedAt;
        obj['endsAt'] = endsAt;
        obj['status'] = status;
        obj['labels'] = labels;
    }

    /**
     * Constructs a <code>GettableAlert</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GettableAlert} obj Optional instance to populate.
     * @return {module:model/GettableAlert} The populated <code>GettableAlert</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GettableAlert();
            GettableAlertAllOf.constructFromObject(data, obj);
            Alert.constructFromObject(data, obj);

            if (data.hasOwnProperty('annotations')) {
                obj['annotations'] = ApiClient.convertToType(data['annotations'], {'String': 'String'});
            }
            if (data.hasOwnProperty('receivers')) {
                obj['receivers'] = ApiClient.convertToType(data['receivers'], [Receiver]);
            }
            if (data.hasOwnProperty('fingerprint')) {
                obj['fingerprint'] = ApiClient.convertToType(data['fingerprint'], 'String');
            }
            if (data.hasOwnProperty('startsAt')) {
                obj['startsAt'] = ApiClient.convertToType(data['startsAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('endsAt')) {
                obj['endsAt'] = ApiClient.convertToType(data['endsAt'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = AlertStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], {'String': 'String'});
            }
            if (data.hasOwnProperty('generatorURL')) {
                obj['generatorURL'] = ApiClient.convertToType(data['generatorURL'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, String>} annotations
 */
GettableAlert.prototype['annotations'] = undefined;

/**
 * @member {Array.<module:model/Receiver>} receivers
 */
GettableAlert.prototype['receivers'] = undefined;

/**
 * @member {String} fingerprint
 */
GettableAlert.prototype['fingerprint'] = undefined;

/**
 * @member {Date} startsAt
 */
GettableAlert.prototype['startsAt'] = undefined;

/**
 * @member {Date} updatedAt
 */
GettableAlert.prototype['updatedAt'] = undefined;

/**
 * @member {Date} endsAt
 */
GettableAlert.prototype['endsAt'] = undefined;

/**
 * @member {module:model/AlertStatus} status
 */
GettableAlert.prototype['status'] = undefined;

/**
 * @member {Object.<String, String>} labels
 */
GettableAlert.prototype['labels'] = undefined;

/**
 * @member {String} generatorURL
 */
GettableAlert.prototype['generatorURL'] = undefined;


// Implement GettableAlertAllOf interface:
/**
 * @member {Object.<String, String>} annotations
 */
GettableAlertAllOf.prototype['annotations'] = undefined;
/**
 * @member {Array.<module:model/Receiver>} receivers
 */
GettableAlertAllOf.prototype['receivers'] = undefined;
/**
 * @member {String} fingerprint
 */
GettableAlertAllOf.prototype['fingerprint'] = undefined;
/**
 * @member {Date} startsAt
 */
GettableAlertAllOf.prototype['startsAt'] = undefined;
/**
 * @member {Date} updatedAt
 */
GettableAlertAllOf.prototype['updatedAt'] = undefined;
/**
 * @member {Date} endsAt
 */
GettableAlertAllOf.prototype['endsAt'] = undefined;
/**
 * @member {module:model/AlertStatus} status
 */
GettableAlertAllOf.prototype['status'] = undefined;
// Implement Alert interface:
/**
 * @member {Object.<String, String>} labels
 */
Alert.prototype['labels'] = undefined;
/**
 * @member {String} generatorURL
 */
Alert.prototype['generatorURL'] = undefined;




export default GettableAlert;

